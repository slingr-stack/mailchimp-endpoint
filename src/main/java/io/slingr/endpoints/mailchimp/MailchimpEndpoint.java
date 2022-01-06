package io.slingr.endpoints.mailchimp;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.exceptions.ErrorCode;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
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
 * <p>Modified by nmarquez on 04/01/22
 */
@SlingrEndpoint(name = "mailchimp", functionPrefix = "_")
public class MailchimpEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(MailchimpEndpoint.class);

    @ApplicationLogger
    private AppLogs appLogger;

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

    @Override
    public void endpointStarted() {
        httpService().setupBasicAuthentication("anyUser", apiKey);
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {

        Json req = request.getJsonParams();
        Json body = req.json("body");
        String path = req.string("path");

        if (path.contains("/file-manager/files")) {
            getResourceById(body);
        }
        req.set("body", body);

        return httpService().defaultPostRequest(req);
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

    @EndpointFunction(name = "_convertDateToTimestamp")
    public Json convertDateToTimestamp(Json params) {
        if (params != null && params.size() > 0) {

            String dateStr = params.string("date");
            if (StringUtils.isEmpty(dateStr)) {
                throw EndpointException.permanent(ErrorCode.ARGUMENT, "Parameter 'date' is required");
            }

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssX");

            try {
                Json res = Json.map();
                Date d = sdf.parse(dateStr);
                return res.set("timestamp", d.getTime());
            } catch (ParseException e) {
                throw EndpointException.permanent(ErrorCode.CONVERSION, String.format("Parameter '%s' can not be converted.", dateStr));
            }
        }
        return null;
    }

    @EndpointFunction(name = "_formatFromMillis")
    public Json formatFromMillis(Json params) {
        if (params != null && params.size() > 0) {
            long millis = params.longInteger("millis");

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssX");

            Json res = Json.map();
            Date d = new Date(millis);
            return res.set("date", sdf.format(d));
        }
        return null;
    }

    @EndpointFunction(name = "_getResourceById")
    public Json getResourceById(Json requestBody) {
        String key = "fileId";
        try {
            if (!requestBody.isEmpty(key)) {
                String fileId = requestBody.string(key);
                requestBody.remove(key);
                Json descriptor = files().metadata(fileId);
                if (descriptor != null && !descriptor.isEmpty()) {
                    String file = files().download(fileId, true);
                    return requestBody.set("file_data", file);
                }
            }
        } catch (Exception ex) {
            throw httpService().convertToEndpointException(ex);
        }
        return null;
    }

    @EndpointWebService
    public WebServiceResponse webhooks(WebServiceRequest request) {
        Json webhookBody = request.getJsonBody();
        //Small verification to discard strange webhooks
        if (request.getMethod().equals(RestMethod.POST) &&
                webhookBody.contains("type") && webhookBody.string("type").matches("subscribe|unsubscribe|profile|cleaned|upemail|campaign") &&
                webhookBody.contains("fired_at") && !webhookBody.string("fired_at").isEmpty() &&
                webhookBody.contains("data")) {
            // send the webhook event
            events().send(HttpService.WEBHOOK_EVENT, webhookBody);
        } else {
            logger.info("Webhook discarded because of bad formatting",webhookBody);
            appLogger.warn("[mailchimp] Webhook discarded because of bad formatting",webhookBody);
        }
        return HttpService.defaultWebhookResponse();
    }
}
