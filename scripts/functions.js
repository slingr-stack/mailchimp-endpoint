////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.batchWebhooks = {};

endpoint.campaignFolders = {};

endpoint.campaigns = {};

endpoint.campaigns.feedback = {};

endpoint.ecommerce = {};

endpoint.ecommerce.stores = {};

endpoint.ecommerce.stores.carts = {};

endpoint.ecommerce.stores.carts.lines = {};

endpoint.ecommerce.stores.customers = {};

endpoint.ecommerce.stores.orders = {};

endpoint.ecommerce.stores.orders.lines = {};

endpoint.ecommerce.stores.products = {};

endpoint.ecommerce.stores.products.images = {};

endpoint.ecommerce.stores.products.variants = {};

endpoint.fileManager = {};

endpoint.fileManager.files = {};

endpoint.fileManager.folders = {};

endpoint.lists = {};

endpoint.lists.interestCategories = {};

endpoint.lists.interestCategories.interests = {};

endpoint.lists.members = {};

endpoint.lists.members.notes = {};

endpoint.lists.mergeFields = {};

endpoint.lists.segments = {};

endpoint.lists.webhooks = {};

endpoint.templateFolders = {};

endpoint.templates = {};

endpoint.authorizedApps = {};

endpoint.automations = {};

endpoint.automations.actions = {};

endpoint.automations.actions.pauseAllEmails = {};

endpoint.automations.actions.startAllEmails = {};

endpoint.automations.emails = {};

endpoint.automations.emails.actions = {};

endpoint.automations.emails.actions.pause = {};

endpoint.automations.emails.actions.start = {};

endpoint.automations.emails.queue = {};

endpoint.automations.removedSubscribers = {};

endpoint.batches = {};

endpoint.campaigns.actions = {};

endpoint.campaigns.actions.cancelSend = {};

endpoint.campaigns.actions.pause = {};

endpoint.campaigns.actions.replicate = {};

endpoint.campaigns.actions.resume = {};

endpoint.campaigns.actions.schedule = {};

endpoint.campaigns.actions.send = {};

endpoint.campaigns.actions.test = {};

endpoint.campaigns.actions.unschedule = {};

endpoint.conversations = {};

endpoint.conversations.messages = {};

endpoint.lists.segments.members = {};

endpoint.lists.signupForms = {};

endpoint.campaigns.content = {};

endpoint.campaigns.sendChecklist = {};

endpoint.lists.abuseReports = {};

endpoint.lists.activity = {};

endpoint.lists.clients = {};

endpoint.lists.growthHistory = {};

endpoint.lists.locations = {};

endpoint.lists.members.activity = {};

endpoint.lists.members.goals = {};

endpoint.reports = {};

endpoint.reports.abuseReports = {};

endpoint.reports.advice = {};

endpoint.reports.clickDetails = {};

endpoint.reports.clickDetails.members = {};

endpoint.reports.domainPerformance = {};

endpoint.reports.eepurl = {};

endpoint.reports.emailActivity = {};

endpoint.reports.locations = {};

endpoint.reports.sentTo = {};

endpoint.reports.subReports = {};

endpoint.reports.unsubscribed = {};

endpoint.searchCampaigns = {};

endpoint.searchMembers = {};

endpoint.templates.defaultContent = {};

endpoint.batchWebhooks.patch = function(batchWebhookId, httpOptions) {
    if (!batchWebhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
        return;
    }
    var url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.campaignFolders.patch = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/campaign-folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.campaigns.patch = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id', [campaignId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.campaigns.feedback.patch = function(campaignId, feedbackId, httpOptions) {
    if (!campaignId || !feedbackId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.patch = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id', [storeId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.carts.patch = function(storeId, cartId, httpOptions) {
    if (!storeId || !cartId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.carts.lines.patch = function(storeId, cartId, lineId, httpOptions) {
    if (!storeId || !cartId || !lineId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.customers.patch = function(storeId, customerId, httpOptions) {
    if (!storeId || !customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.orders.patch = function(storeId, orderId, httpOptions) {
    if (!storeId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.orders.lines.patch = function(storeId, orderId, lineId, httpOptions) {
    if (!storeId || !orderId || !lineId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.products.patch = function(storeId, productId, httpOptions) {
    if (!storeId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.products.images.patch = function(storeId, productId, imageId, httpOptions) {
    if (!storeId || !productId || !imageId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.products.variants.patch = function(storeId, productId, variantId, httpOptions) {
    if (!storeId || !productId || !variantId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.fileManager.files.patch = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/file-manager/files/:file_id', [fileId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.fileManager.folders.patch = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/file-manager/folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.patch = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id', [listId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.interestCategories.patch = function(listId, interestCategoryId, httpOptions) {
    if (!listId || !interestCategoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.interestCategories.interests.patch = function(listId, interestCategoryId, interestId, httpOptions) {
    if (!listId || !interestCategoryId || !interestId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.members.patch = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.members.notes.patch = function(listId, subscriberHash, noteId, httpOptions) {
    if (!listId || !subscriberHash || !noteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.mergeFields.patch = function(listId, mergeId, httpOptions) {
    if (!listId || !mergeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
        return;
    }
    var url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.segments.patch = function(listId, segmentId, httpOptions) {
    if (!listId || !segmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.webhooks.patch = function(listId, webhookId, httpOptions) {
    if (!listId || !webhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
        return;
    }
    var url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.templateFolders.patch = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/template-folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.templates.patch = function(templateId, httpOptions) {
    if (!templateId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
        return;
    }
    var url = parse('/templates/:template_id', [templateId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.authorizedApps.post = function(httpOptions) {
    var url = parse('/authorized-apps');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.actions.pauseAllEmails.post = function(workflowId, httpOptions) {
    if (!workflowId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
        return;
    }
    var url = parse('/automations/:workflow_id/actions/pause-all-emails', [workflowId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.actions.startAllEmails.post = function(workflowId, httpOptions) {
    if (!workflowId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
        return;
    }
    var url = parse('/automations/:workflow_id/actions/start-all-emails', [workflowId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.emails.actions.pause.post = function(workflowId, workflowEmailId, httpOptions) {
    if (!workflowId || !workflowEmailId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
        return;
    }
    var url = parse('/automations/:workflow_id/emails/:workflow_email_id/actions/pause', [workflowId, workflowEmailId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.emails.actions.start.post = function(workflowId, workflowEmailId, httpOptions) {
    if (!workflowId || !workflowEmailId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
        return;
    }
    var url = parse('/automations/:workflow_id/emails/:workflow_email_id/actions/start', [workflowId, workflowEmailId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.emails.queue.post = function(workflowId, workflowEmailId, httpOptions) {
    if (!workflowId || !workflowEmailId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
        return;
    }
    var url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue', [workflowId, workflowEmailId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.removedSubscribers.post = function(workflowId, httpOptions) {
    if (!workflowId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
        return;
    }
    var url = parse('/automations/:workflow_id/removed-subscribers', [workflowId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.batches.post = function(httpOptions) {
    var url = parse('/batches');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.batchWebhooks.post = function(httpOptions) {
    var url = parse('/batch-webhooks');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaignFolders.post = function(httpOptions) {
    var url = parse('/campaign-folders');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.post = function(httpOptions) {
    var url = parse('/campaigns');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.actions.cancelSend.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/cancel-send', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.actions.pause.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/pause', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.actions.replicate.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/replicate', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.actions.resume.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/resume', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.actions.schedule.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/schedule', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.actions.send.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/send', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.actions.test.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/test', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.actions.unschedule.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/unschedule', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.feedback.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/feedback', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.conversations.messages.post = function(conversationId, httpOptions) {
    if (!conversationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [conversationId].');
        return;
    }
    var url = parse('/conversations/:conversation_id/messages', [conversationId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.post = function(httpOptions) {
    var url = parse('/ecommerce/stores');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.carts.post = function(storeId, cartId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 1:
            url = parse('/ecommerce/stores/:store_id/carts', [storeId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
            break;
        case 3:
            url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId,cartId,body]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.carts.lines.post = function(storeId, cartId, httpOptions) {
    if (!storeId || !cartId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines', [storeId, cartId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.customers.post = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/customers', [storeId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.orders.post = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders', [storeId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.products.post = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products', [storeId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.products.images.post = function(storeId, productId, httpOptions) {
    if (!storeId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/images', [storeId, productId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.products.variants.post = function(storeId, productId, httpOptions) {
    if (!storeId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants', [storeId, productId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.fileManager.files.post = function(httpOptions) {
    var url = parse('/file-manager/files');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.fileManager.folders.post = function(httpOptions) {
    var url = parse('/file-manager/folders');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.post = function(listId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 1:
            url = parse('/lists');
            break;
        case 2:
            url = parse('/lists/:list_id', [listId]);
            break;
        case 3:
            url = parse('/lists/:list_id', [listId,body]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.interestCategories.post = function(listId, interestCategoryId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 1:
            url = parse('/lists/:list_id/interest-categories', [listId]);
            break;
        case 2:
            url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
            break;
        case 3:
            url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId,interestCategoryId,body]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.interestCategories.interests.post = function(listId, interestCategoryId, httpOptions) {
    if (!listId || !interestCategoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests', [listId, interestCategoryId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.members.post = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/members', [listId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.members.notes.post = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/notes', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.mergeFields.post = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/merge-fields', [listId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.segments.post = function(listId, segmentId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 1:
            url = parse('/lists/:list_id/segments', [listId]);
            break;
        case 2:
            url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
            break;
        case 3:
            url = parse('/lists/:list_id/segments/:segment_id', [listId,segmentId,body]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.segments.members.post = function(listId, segmentId, httpOptions) {
    if (!listId || !segmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id/members', [listId, segmentId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.signupForms.post = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/signup-forms', [listId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.webhooks.post = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/webhooks', [listId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.templateFolders.post = function(httpOptions) {
    var url = parse('/template-folders');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.templates.post = function(httpOptions) {
    var url = parse('/templates');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.authorizedApps.get = function(appId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/authorized-apps');
            break;
        case 1:
            url = parse('/authorized-apps/:app_id', [appId]);
            break;
        case 2:
            url = parse('/authorized-apps/:app_id', [appId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.get = function(workflowId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/automations');
            break;
        case 1:
            url = parse('/automations/:workflow_id', [workflowId]);
            break;
        case 2:
            url = parse('/automations/:workflow_id', [workflowId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.emails.get = function(workflowId, workflowEmailId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/automations/:workflow_id/emails', [workflowId]);
            break;
        case 1:
            url = parse('/automations/:workflow_id/emails/:workflow_email_id', [workflowId, workflowEmailId]);
            break;
        case 2:
            url = parse('/automations/:workflow_id/emails/:workflow_email_id', [workflowId,workflowEmailId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.emails.queue.get = function(workflowId, workflowEmailId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue', [workflowId, workflowEmailId]);
            break;
        case 1:
            url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue/:subscriber_hash', [workflowId, workflowEmailId, subscriberHash]);
            break;
        case 2:
            url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue/:subscriber_hash', [workflowId,workflowEmailId,subscriberHash]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.removedSubscribers.get = function(workflowId, httpOptions) {
    if (!workflowId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
        return;
    }
    var url = parse('/automations/:workflow_id/removed-subscribers', [workflowId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.batches.get = function(batchId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/batches');
            break;
        case 1:
            url = parse('/batches/:batch_id', [batchId]);
            break;
        case 2:
            url = parse('/batches/:batch_id', [batchId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.batchWebhooks.get = function(batchWebhookId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/batch-webhooks');
            break;
        case 1:
            url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
            break;
        case 2:
            url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaignFolders.get = function(folderId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/campaign-folders');
            break;
        case 1:
            url = parse('/campaign-folders/:folder_id', [folderId]);
            break;
        case 2:
            url = parse('/campaign-folders/:folder_id', [folderId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.get = function(campaignId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/campaigns');
            break;
        case 1:
            url = parse('/campaigns/:campaign_id', [campaignId]);
            break;
        case 2:
            url = parse('/campaigns/:campaign_id', [campaignId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.content.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/content', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.feedback.get = function(campaignId, feedbackId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/campaigns/:campaign_id/feedback', [campaignId]);
            break;
        case 1:
            url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
            break;
        case 2:
            url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId,feedbackId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.sendChecklist.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/send-checklist', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.conversations.get = function(conversationId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/conversations');
            break;
        case 1:
            url = parse('/conversations/:conversation_id', [conversationId]);
            break;
        case 2:
            url = parse('/conversations/:conversation_id', [conversationId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.conversations.messages.get = function(conversationId, messageId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/conversations/:conversation_id/messages', [conversationId]);
            break;
        case 1:
            url = parse('/conversations/:conversation_id/messages/:message_id', [conversationId, messageId]);
            break;
        case 2:
            url = parse('/conversations/:conversation_id/messages/:message_id', [conversationId,messageId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.get = function(storeId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/ecommerce/stores');
            break;
        case 1:
            url = parse('/ecommerce/stores/:store_id', [storeId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id', [storeId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.carts.lines.get = function(storeId, cartId, lineId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines', [storeId, cartId]);
            break;
        case 1:
            url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId,cartId,lineId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.customers.get = function(storeId, customerId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/ecommerce/stores/:store_id/customers', [storeId]);
            break;
        case 1:
            url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId,customerId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.orders.get = function(storeId, orderId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/ecommerce/stores/:store_id/orders', [storeId]);
            break;
        case 1:
            url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId,orderId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.orders.lines.get = function(storeId, orderId, lineId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines', [storeId, orderId]);
            break;
        case 1:
            url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId,orderId,lineId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.products.get = function(storeId, productId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/ecommerce/stores/:store_id/products', [storeId]);
            break;
        case 1:
            url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId,productId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.products.images.get = function(storeId, productId, imageId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/ecommerce/stores/:store_id/products/:product_id/images', [storeId, productId]);
            break;
        case 1:
            url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId,productId,imageId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.products.variants.get = function(storeId, productId, variantId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/ecommerce/stores/:store_id/products/:product_id/variants', [storeId, productId]);
            break;
        case 1:
            url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
            break;
        case 2:
            url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId,productId,variantId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.fileManager.files.get = function(fileId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/file-manager/files');
            break;
        case 1:
            url = parse('/file-manager/files/:file_id', [fileId]);
            break;
        case 2:
            url = parse('/file-manager/files/:file_id', [fileId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.fileManager.folders.get = function(folderId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/file-manager/folders');
            break;
        case 1:
            url = parse('/file-manager/folders/:folder_id', [folderId]);
            break;
        case 2:
            url = parse('/file-manager/folders/:folder_id', [folderId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.get = function(listId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists');
            break;
        case 1:
            url = parse('/lists/:list_id', [listId]);
            break;
        case 2:
            url = parse('/lists/:list_id', [listId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.abuseReports.get = function(listId, reportId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists/:list_id/abuse-reports', [listId]);
            break;
        case 1:
            url = parse('/lists/:list_id/abuse-reports/:report_id', [listId, reportId]);
            break;
        case 2:
            url = parse('/lists/:list_id/abuse-reports/:report_id', [listId,reportId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.activity.get = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/activity', [listId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.clients.get = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/clients', [listId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.growthHistory.get = function(listId, month, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists/:list_id/growth-history', [listId]);
            break;
        case 1:
            url = parse('/lists/:list_id/growth-history/:month', [listId, month]);
            break;
        case 2:
            url = parse('/lists/:list_id/growth-history/:month', [listId,month]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.interestCategories.interests.get = function(listId, interestCategoryId, interestId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests', [listId, interestCategoryId]);
            break;
        case 1:
            url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
            break;
        case 2:
            url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId,interestCategoryId,interestId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.locations.get = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/locations', [listId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.members.get = function(listId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists/:list_id/members', [listId]);
            break;
        case 1:
            url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
            break;
        case 2:
            url = parse('/lists/:list_id/members/:subscriber_hash', [listId,subscriberHash]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.members.activity.get = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/activity', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.members.goals.get = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/goals', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.members.notes.get = function(listId, subscriberHash, noteId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists/:list_id/members/:subscriber_hash/notes', [listId, subscriberHash]);
            break;
        case 1:
            url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
            break;
        case 2:
            url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId,subscriberHash,noteId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.mergeFields.get = function(listId, mergeId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists/:list_id/merge-fields', [listId]);
            break;
        case 1:
            url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
            break;
        case 2:
            url = parse('/lists/:list_id/merge-fields/:merge_id', [listId,mergeId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.segments.get = function(listId, segmentId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists/:list_id/segments', [listId]);
            break;
        case 1:
            url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
            break;
        case 2:
            url = parse('/lists/:list_id/segments/:segment_id', [listId,segmentId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.segments.members.get = function(listId, segmentId, httpOptions) {
    if (!listId || !segmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id/members', [listId, segmentId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.signupForms.get = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/signup-forms', [listId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.webhooks.get = function(listId, webhookId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/lists/:list_id/webhooks', [listId]);
            break;
        case 1:
            url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
            break;
        case 2:
            url = parse('/lists/:list_id/webhooks/:webhook_id', [listId,webhookId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.get = function(campaignId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/reports');
            break;
        case 1:
            url = parse('/reports/:campaign_id', [campaignId]);
            break;
        case 2:
            url = parse('/reports/:campaign_id', [campaignId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.abuseReports.get = function(campaignId, reportId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/reports/:campaign_id/abuse-reports', [campaignId]);
            break;
        case 1:
            url = parse('/reports/:campaign_id/abuse-reports/:report_id', [campaignId, reportId]);
            break;
        case 2:
            url = parse('/reports/:campaign_id/abuse-reports/:report_id', [campaignId,reportId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.advice.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/advice', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.clickDetails.get = function(campaignId, linkId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/reports/:campaign_id/click-details', [campaignId]);
            break;
        case 1:
            url = parse('/reports/:campaign_id/click-details/:link_id', [campaignId, linkId]);
            break;
        case 2:
            url = parse('/reports/:campaign_id/click-details/:link_id', [campaignId,linkId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.clickDetails.members.get = function(campaignId, linkId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/reports/:campaign_id/click-details/:link_id/members', [campaignId, linkId]);
            break;
        case 1:
            url = parse('/reports/:campaign_id/click-details/:link_id/members/:subscriber_hash', [campaignId, linkId, subscriberHash]);
            break;
        case 2:
            url = parse('/reports/:campaign_id/click-details/:link_id/members/:subscriber_hash', [campaignId,linkId,subscriberHash]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.domainPerformance.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/domain-performance', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.eepurl.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/eepurl', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.emailActivity.get = function(campaignId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/reports/:campaign_id/email-activity', [campaignId]);
            break;
        case 1:
            url = parse('/reports/:campaign_id/email-activity/:subscriber_hash', [campaignId, subscriberHash]);
            break;
        case 2:
            url = parse('/reports/:campaign_id/email-activity/:subscriber_hash', [campaignId,subscriberHash]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.locations.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/locations', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.sentTo.get = function(campaignId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/reports/:campaign_id/sent-to', [campaignId]);
            break;
        case 1:
            url = parse('/reports/:campaign_id/sent-to/:subscriber_hash', [campaignId, subscriberHash]);
            break;
        case 2:
            url = parse('/reports/:campaign_id/sent-to/:subscriber_hash', [campaignId,subscriberHash]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.subReports.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/sub-reports', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.unsubscribed.get = function(campaignId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/reports/:campaign_id/unsubscribed', [campaignId]);
            break;
        case 1:
            url = parse('/reports/:campaign_id/unsubscribed/:subscriber_hash', [campaignId, subscriberHash]);
            break;
        case 2:
            url = parse('/reports/:campaign_id/unsubscribed/:subscriber_hash', [campaignId,subscriberHash]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.searchCampaigns.get = function(httpOptions) {
    var url = parse('/search-campaigns');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.searchMembers.get = function(httpOptions) {
    var url = parse('/search-members');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.templateFolders.get = function(folderId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/template-folders');
            break;
        case 1:
            url = parse('/template-folders/:folder_id', [folderId]);
            break;
        case 2:
            url = parse('/template-folders/:folder_id', [folderId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.templates.get = function(templateId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
            url = parse('/templates');
            break;
        case 1:
            url = parse('/templates/:template_id', [templateId]);
            break;
        case 2:
            url = parse('/templates/:template_id', [templateId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.templates.defaultContent.get = function(templateId, httpOptions) {
    if (!templateId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
        return;
    }
    var url = parse('/templates/:template_id/default-content', [templateId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.emails.delete = function(workflowId, workflowEmailId, httpOptions) {
    if (!workflowId || !workflowEmailId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
        return;
    }
    var url = parse('/automations/:workflow_id/emails/:workflow_email_id', [workflowId, workflowEmailId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.batches.delete = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/batches/:batch_id', [batchId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.batchWebhooks.delete = function(batchWebhookId, httpOptions) {
    if (!batchWebhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
        return;
    }
    var url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.campaignFolders.delete = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/campaign-folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.campaigns.delete = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id', [campaignId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.campaigns.feedback.delete = function(campaignId, feedbackId, httpOptions) {
    if (!campaignId || !feedbackId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.delete = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id', [storeId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.carts.delete = function(storeId, cartId, httpOptions) {
    if (!storeId || !cartId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.carts.lines.delete = function(storeId, cartId, lineId, httpOptions) {
    if (!storeId || !cartId || !lineId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.customers.delete = function(storeId, customerId, httpOptions) {
    if (!storeId || !customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.orders.delete = function(storeId, orderId, httpOptions) {
    if (!storeId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.orders.lines.delete = function(storeId, orderId, lineId, httpOptions) {
    if (!storeId || !orderId || !lineId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.products.delete = function(storeId, productId, httpOptions) {
    if (!storeId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.products.images.delete = function(storeId, productId, imageId, httpOptions) {
    if (!storeId || !productId || !imageId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.products.variants.delete = function(storeId, productId, variantId, httpOptions) {
    if (!storeId || !productId || !variantId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.fileManager.files.delete = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/file-manager/files/:file_id', [fileId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.fileManager.folders.delete = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/file-manager/folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.delete = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id', [listId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.interestCategories.delete = function(listId, interestCategoryId, httpOptions) {
    if (!listId || !interestCategoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.interestCategories.interests.delete = function(listId, interestCategoryId, interestId, httpOptions) {
    if (!listId || !interestCategoryId || !interestId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.members.delete = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.members.notes.delete = function(listId, subscriberHash, noteId, httpOptions) {
    if (!listId || !subscriberHash || !noteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.mergeFields.delete = function(listId, mergeId, httpOptions) {
    if (!listId || !mergeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
        return;
    }
    var url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.segments.delete = function(listId, segmentId, httpOptions) {
    if (!listId || !segmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.segments.members.delete = function(listId, segmentId, subscriberHash, httpOptions) {
    if (!listId || !segmentId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id/members/:subscriber_hash', [listId, segmentId, subscriberHash]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.webhooks.delete = function(listId, webhookId, httpOptions) {
    if (!listId || !webhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
        return;
    }
    var url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.templateFolders.delete = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/template-folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.templates.delete = function(templateId, httpOptions) {
    if (!templateId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
        return;
    }
    var url = parse('/templates/:template_id', [templateId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.campaigns.content.put = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/content', [campaignId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.ecommerce.stores.customers.put = function(storeId, customerId, httpOptions) {
    if (!storeId || !customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.ecommerce.stores.products.variants.put = function(storeId, productId, variantId, httpOptions) {
    if (!storeId || !productId || !variantId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.lists.members.put = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
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

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}