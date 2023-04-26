package io.slingr.endpoints.mailchimp;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.exceptions.ErrorCode;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.EndpointWebService;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * <p>Mailchimp endpoint
 * <p>
 * <p>Created by hpacini on 19/07/17.
 */
@SlingrEndpoint(name = "mailchimp", functionPrefix = "_")
public class MailchimpEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(MailchimpEndpoint.class);

    private static final String MAILCHIMP_API_URL = "https://%s.api.mailchimp.com/3.0/";
    private static final char[] HEX_DIGITS = "0123456789ABCDEF".toCharArray();

    @EndpointProperty
    private String apiKey;

    public MailchimpEndpoint() {
    }

    @Override
    public String getApiUri() {
        return generateBaseUrl(apiKey);
    }

    @Override
    public void endpointStarted() {
        httpService().setupBasicAuthentication("anyUser", apiKey);
    }

    @EndpointWebService
    public WebServiceResponse webhooks(WebServiceRequest request) {
        final Json json = HttpService.defaultWebhookConverter(request);
        if (request.getMethod().equals(RestMethod.POST)) {
            if (request.getBody() != null) {
                json.set("body", request.getBody());
            }

            // send the webhook event
            events().send(HttpService.WEBHOOK_EVENT, json);

        }
        return HttpService.defaultWebhookResponse();
    }

    private static String generateBaseUrl(String apiKey) {
        if (StringUtils.isBlank(apiKey)) {
            throw EndpointException.permanent(ErrorCode.CLIENT, "Empty apiKey.");
        }

        final int dash = apiKey.lastIndexOf('-');
        if (dash <= 0) {
            throw EndpointException.permanent(ErrorCode.CLIENT, String.format("Invalid apiKey [%s]. Server is not present.", apiKey));
        }

        final String server = apiKey.substring(dash + 1);
        return String.format(MAILCHIMP_API_URL, StringUtils.isBlank(server) ? "us1" : server.trim());
    }

    @EndpointFunction(name = "_emailHash")
    public Json emailHash(Json params){

        if (params != null && params.size() > 0) {

            String email = params.string("email").toLowerCase();

            if (StringUtils.isEmpty(email)) {
                throw EndpointException.permanent(ErrorCode.ARGUMENT, "Parameter 'email' is required");
            }

            MessageDigest md = null;
            try {

                md = MessageDigest.getInstance("MD5");
                byte[] messageDigest = md.digest(email.getBytes());
                return Json.map().set("hash", toHex(messageDigest).toLowerCase());

            } catch (NoSuchAlgorithmException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static String toHex(byte[] data) {
        char[] chars = new char[data.length * 2];
        for (int i = 0; i < data.length; i++) {
            chars[i * 2] = HEX_DIGITS[(data[i] >> 4) & 0xf];
            chars[i * 2 + 1] = HEX_DIGITS[data[i] & 0xf];
        }
        return new String(chars);
    }


    @EndpointFunction(name = "_getResourceById")
    public Json getResourceById(Json request) {
        String key = "file_id";
        try {
            if (!request.isEmpty(key)) {
                String fileId = request.string(key);
                request.remove(key);
                Json descriptor = files().metadata(fileId);
                if (descriptor != null && !descriptor.isEmpty()) {
                    String file = files().download(fileId, true);
                    return Json.map().set("fileData", file);
                } else {
                    throw EndpointException.permanent(ErrorCode.ARGUMENT, String.format("File with id [%s] not found", fileId));
                }
            }
        } catch (Exception ex) {
            throw httpService().convertToEndpointException(ex);
        }
        return null;
    }

}
