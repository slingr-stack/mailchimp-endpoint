var fs = require('fs');

var FILE_NAME = "mailchimp-fn-helpers.js";
var CODE = '';
var cache = {};

var apiURLs = {
    'get': [
        '/authorized-apps',
        '/authorized-apps/{app_id}',
        '/automations',
        '/automations/{workflow_id}',
        '/automations/{workflow_id}/emails',
        '/automations/{workflow_id}/emails/{workflow_email_id}',
        '/automations/{workflow_id}/emails/{workflow_email_id}/queue',
        '/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}',
        '/automations/{workflow_id}/removed-subscribers',
        '/batches',
        '/batches/{batch_id}',
        '/batch-webhooks',
        '/batch-webhooks/{batch_webhook_id}',
        '/campaign-folders',
        '/campaign-folders/{folder_id}',
        '/campaigns',
        '/campaigns/{campaign_id}',
        '/campaigns/{campaign_id}/content',
        '/campaigns/{campaign_id}/feedback',
        '/campaigns/{campaign_id}/feedback/{feedback_id}',
        '/campaigns/{campaign_id}/send-checklist',
        '/conversations',
        '/conversations/{conversation_id}',
        '/conversations/{conversation_id}/messages',
        '/conversations/{conversation_id}/messages/{message_id}',
        '/ecommerce/stores',
        '/ecommerce/stores/{store_id}',
        '/ecommerce/stores/{store_id}/carts/{cart_id}/lines',
        '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}',
        '/ecommerce/stores/{store_id}/customers',
        '/ecommerce/stores/{store_id}/customers/{customer_id}',
        '/ecommerce/stores/{store_id}/orders',
        '/ecommerce/stores/{store_id}/orders/{order_id}',
        '/ecommerce/stores/{store_id}/orders/{order_id}/lines',
        '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}',
        '/ecommerce/stores/{store_id}/products',
        '/ecommerce/stores/{store_id}/products/{product_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}/images',
        '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}/variants',
        '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}',
        '/file-manager/files',
        '/file-manager/files/{file_id}',
        '/file-manager/folders',
        '/file-manager/folders/{folder_id}',
        '/lists',
        '/lists/{list_id}',
        '/lists/{list_id}/abuse-reports',
        '/lists/{list_id}/abuse-reports/{report_id}',
        '/lists/{list_id}/activity',
        '/lists/{list_id}/clients',
        '/lists/{list_id}/growth-history',
        '/lists/{list_id}/growth-history/{month}',
        '/lists/{list_id}/interest-categories/{interest_category_id}/interests',
        '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}',
        '/lists/{list_id}/locations',
        '/lists/{list_id}/members',
        '/lists/{list_id}/members/{subscriber_hash}',
        '/lists/{list_id}/members/{subscriber_hash}/activity',
        '/lists/{list_id}/members/{subscriber_hash}/goals',
        '/lists/{list_id}/members/{subscriber_hash}/notes',
        '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}',
        '/lists/{list_id}/merge-fields',
        '/lists/{list_id}/merge-fields/{merge_id}',
        '/lists/{list_id}/segments',
        '/lists/{list_id}/segments/{segment_id}',
        '/lists/{list_id}/segments/{segment_id}/members',
        '/lists/{list_id}/signup-forms',
        '/lists/{list_id}/webhooks',
        '/lists/{list_id}/webhooks/{webhook_id}',
        '/reports',
        '/reports/{campaign_id}',
        '/reports/{campaign_id}/abuse-reports',
        '/reports/{campaign_id}/abuse-reports/{report_id}',
        '/reports/{campaign_id}/advice',
        '/reports/{campaign_id}/click-details',
        '/reports/{campaign_id}/click-details/{link_id}',
        '/reports/{campaign_id}/click-details/{link_id}/members',
        '/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}',
        '/reports/{campaign_id}/domain-performance',
        '/reports/{campaign_id}/eepurl',
        '/reports/{campaign_id}/email-activity',
        '/reports/{campaign_id}/email-activity/{subscriber_hash}',
        '/reports/{campaign_id}/locations',
        '/reports/{campaign_id}/sent-to',
        '/reports/{campaign_id}/sent-to/{subscriber_hash}',
        '/reports/{campaign_id}/sub-reports',
        '/reports/{campaign_id}/unsubscribed',
        '/reports/{campaign_id}/unsubscribed/{subscriber_hash}',
        '/search-campaigns',
        '/search-members',
        '/template-folders',
        '/template-folders/{folder_id}',
        '/templates',
        '/templates/{template_id}',
        '/templates/{template_id}/default-content',
    ],
    'post': [
        '/authorized-apps',
        '/automations/{workflow_id}/actions/pause-all-emails',
        '/automations/{workflow_id}/actions/start-all-emails',
        '/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause',
        '/automations/{workflow_id}/emails/{workflow_email_id}/actions/start',
        '/automations/{workflow_id}/emails/{workflow_email_id}/queue',
        '/automations/{workflow_id}/removed-subscribers',
        '/batches',
        '/batch-webhooks',
        '/campaign-folders',
        '/campaigns',
        '/campaigns/{campaign_id}/actions/cancel-send',
        '/campaigns/{campaign_id}/actions/pause',
        '/campaigns/{campaign_id}/actions/replicate',
        '/campaigns/{campaign_id}/actions/resume',
        '/campaigns/{campaign_id}/actions/schedule',
        '/campaigns/{campaign_id}/actions/send',
        '/campaigns/{campaign_id}/actions/test',
        '/campaigns/{campaign_id}/actions/unschedule',
        '/campaigns/{campaign_id}/feedback',
        '/conversations/{conversation_id}/messages',
        '/ecommerce/stores',
        '/ecommerce/stores/{store_id}/carts',
        '/ecommerce/stores/{store_id}/carts/{cart_id}',
        '/ecommerce/stores/{store_id}/carts/{cart_id}/lines',
        '/ecommerce/stores/{store_id}/customers',
        '/ecommerce/stores/{store_id}/orders',
        '/ecommerce/stores/{store_id}/products',
        '/ecommerce/stores/{store_id}/products/{product_id}/images',
        '/ecommerce/stores/{store_id}/products/{product_id}/variants',
        '/file-manager/files',
        '/file-manager/folders',
        '/lists',
        '/lists/{list_id}',
        '/lists/{list_id}/interest-categories',
        '/lists/{list_id}/interest-categories/{interest_category_id}',
        '/lists/{list_id}/interest-categories/{interest_category_id}/interests',
        '/lists/{list_id}/members',
        '/lists/{list_id}/members/{subscriber_hash}/notes',
        '/lists/{list_id}/merge-fields',
        '/lists/{list_id}/segments',
        '/lists/{list_id}/segments/{segment_id}',
        '/lists/{list_id}/segments/{segment_id}/members',
        '/lists/{list_id}/signup-forms',
        '/lists/{list_id}/webhooks',
        '/template-folders',
        '/templates',
    ],
    'delete': [
        '/automations/{workflow_id}/emails/{workflow_email_id}',
        '/batches/{batch_id}',
        '/batch-webhooks/{batch_webhook_id}',
        '/campaign-folders/{folder_id}',
        '/campaigns/{campaign_id}',
        '/campaigns/{campaign_id}/feedback/{feedback_id}',
        '/ecommerce/stores/{store_id}',
        '/ecommerce/stores/{store_id}/carts/{cart_id}',
        '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}',
        '/ecommerce/stores/{store_id}/customers/{customer_id}',
        '/ecommerce/stores/{store_id}/orders/{order_id}',
        '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}',
        '/file-manager/files/{file_id}',
        '/file-manager/folders/{folder_id}',
        '/lists/{list_id}',
        '/lists/{list_id}/interest-categories/{interest_category_id}',
        '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}',
        '/lists/{list_id}/members/{subscriber_hash}',
        '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}',
        '/lists/{list_id}/merge-fields/{merge_id}',
        '/lists/{list_id}/segments/{segment_id}',
        '/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}',
        '/lists/{list_id}/webhooks/{webhook_id}',
        '/template-folders/{folder_id}',
        '/templates/{template_id}',
    ],
    'patch': [
        '/batch-webhooks/{batch_webhook_id}',
        '/campaign-folders/{folder_id}',
        '/campaigns/{campaign_id}',
        '/campaigns/{campaign_id}/feedback/{feedback_id}',
        '/ecommerce/stores/{store_id}',
        '/ecommerce/stores/{store_id}/carts/{cart_id}',
        '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}',
        '/ecommerce/stores/{store_id}/customers/{customer_id}',
        '/ecommerce/stores/{store_id}/orders/{order_id}',
        '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}',
        '/file-manager/files/{file_id}',
        '/file-manager/folders/{folder_id}',
        '/lists/{list_id}',
        '/lists/{list_id}/interest-categories/{interest_category_id}',
        '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}',
        '/lists/{list_id}/members/{subscriber_hash}',
        '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}',
        '/lists/{list_id}/merge-fields/{merge_id}',
        '/lists/{list_id}/segments/{segment_id}',
        '/lists/{list_id}/webhooks/{webhook_id}',
        '/template-folders/{folder_id}',
        '/templates/{template_id}',
    ],
    'put': [
        '/campaigns/{campaign_id}/content',
        '/ecommerce/stores/{store_id}/customers/{customer_id}',
        '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}',
        '/lists/{list_id}/members/{subscriber_hash}',
    ]
};

var convertUrls = function (url) {

    var convertedUrl = url;

    convertedUrl = convertedUrl.replace(/{/gi, ':');
    convertedUrl = convertedUrl.replace(/}/gi, '');

    return convertedUrl;
};

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1],
                i = 0;
            return str.replace(/:(\w+)/g, function () {
                return args[i++];
            });

        } else {
            if (str) {
                return str;
            }
            throw 'Function is not valid.';
        }
    } catch (err) {
        throw 'Function is not valid for given arguments.';
    }
};


var filesByResourceId = function(params) {

    if (!params) {
        throw 'argumentException', 'wrong numbers of arguments for fileManager.files.post';
    }

    var fileId = params.file_id;
    var url = '/file-manager/files';

    sys.logs.debug('[Mailchimp] POST from: ' + url);

    if(fileId){
        var res = endpoint._getResourceById(params);
        params.file_data = res.fileData;

        if (!res.fileData) {
            throw 'argumentException', 'File with the given ID can not be fetch from the app';
        }
    }

    var options = checkHttpOptions(url, params);
    return endpoint._post(options);

};

var camelCase = function (input) {
    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
};

var setInitializers = function (fnName) {

    var tmpCode = '',
        namesArr = fnName.split('.'),
        path = '';

    for (var i in namesArr) {

        if (i == 0) {
            path = namesArr[0];
        } else {
            path += '.' + namesArr[i];
        }

        if (!cache[path]) {
            tmpCode += NAMESPACE + path + ' = {};\n';
            cache[path] = path;
        }
    }

    return tmpCode;
};

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);


var urlsData = {get: {}, post: {}, put: {}, patch: {}, delete: {}};
var endpoint = {};
var NAMESPACE = 'endpoint.';

var makeEndpointsHelpers = function () {

    for (var method in apiURLs) {

        if (Array.isArray(apiURLs[method])) {

            var urlsArr = apiURLs[method];

            for (var n in urlsArr) {

                var numVars = 0;
                var fnNames = [];
                var newPath = '';

                var url = convertUrls(urlsArr[n]);

                var urlParts = url.split('/');
                for (var p in urlParts) {
                    if (urlParts[p] != "") {
                        if (urlParts[p].substr(0, 1) == ':') {
                            numVars++;
                            newPath += '/%s'
                        } else {
                            fnNames.push(urlParts[p]);
                            newPath += '/' + urlParts[p];
                        }
                    }
                }

                var functionName = camelCase(fnNames.join('.'));
                if (!urlsData[method][functionName]) {
                    urlsData[method][functionName] = {};
                }

                urlsData[method][functionName][numVars] = url;

            }
        }

    }

    for (var method in urlsData) {
        for (var fn in urlsData[method]) {

            CODE += setInitializers(fn);

            if (method == 'get' || method == 'delete') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;'
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size], Array.prototype.slice.call(arguments, 0, size));';
                CODE += NAMESPACE + fn + '.' + method + ' = function() {\n\t' + sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[Mailchimp] ' + method.toUpperCase() + ' from: \' + url);\n\treturn ' + NAMESPACE + method + '(url);\n};\n\n';
            } else if (method == 'post' || method == 'put' || method == 'patch') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;\n\t';
                sizeStr += 'if(size <= 0) { return;\n\t\tsys.logs.warn(\'wrong numbers of arguments for ' + fn + '.' + method + '\');\n\t}';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));';
                CODE += NAMESPACE + fn + '.' + method + ' = function() {\n\t' + sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[Mailchimp] ' + method.toUpperCase() + ' from: \' + url);\n\treturn ' + NAMESPACE + method + '(url, arguments[arguments.length - 1]);\n};\n\n';
            }


        }
    }

    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//  This file is generated with mailchimp/gen/gen-mailchimp-helpers.js  //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\nvar parse = ' + parse.toString() + ';\n\n' + CODE
        + 'endpoint.fileManager.files.post = ' +filesByResourceId.toString() + ';\n\n';

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
