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

endpoint.batchWebhooks.batchWebhookId = {};

endpoint.campaignFolders = {};

endpoint.campaignFolders.folderId = {};

endpoint.campaigns = {};

endpoint.campaigns.campaignId = {};

endpoint.campaigns.campaignId.feedback = {};

endpoint.campaigns.campaignId.feedback.feedbackId = {};

endpoint.ecommerce = {};

endpoint.ecommerce.stores = {};

endpoint.ecommerce.stores.storeId = {};

endpoint.ecommerce.stores.storeId.carts = {};

endpoint.ecommerce.stores.storeId.carts.cartId = {};

endpoint.ecommerce.stores.storeId.carts.cartId.lines = {};

endpoint.ecommerce.stores.storeId.carts.cartId.lines.lineId = {};

endpoint.ecommerce.stores.storeId.customers = {};

endpoint.ecommerce.stores.storeId.customers.customerId = {};

endpoint.ecommerce.stores.storeId.orders = {};

endpoint.ecommerce.stores.storeId.orders.orderId = {};

endpoint.ecommerce.stores.storeId.orders.orderId.lines = {};

endpoint.ecommerce.stores.storeId.orders.orderId.lines.lineId = {};

endpoint.ecommerce.stores.storeId.products = {};

endpoint.ecommerce.stores.storeId.products.productId = {};

endpoint.ecommerce.stores.storeId.products.productId.images = {};

endpoint.ecommerce.stores.storeId.products.productId.images.imageId = {};

endpoint.ecommerce.stores.storeId.products.productId.variants = {};

endpoint.ecommerce.stores.storeId.products.productId.variants.variantId = {};

endpoint.fileManager = {};

endpoint.fileManager.files = {};

endpoint.fileManager.files.fileId = {};

endpoint.fileManager.folders = {};

endpoint.fileManager.folders.folderId = {};

endpoint.lists = {};

endpoint.lists.listId = {};

endpoint.lists.listId.interestCategories = {};

endpoint.lists.listId.interestCategories.interestCategoryId = {};

endpoint.lists.listId.interestCategories.interestCategoryId.interests = {};

endpoint.lists.listId.interestCategories.interestCategoryId.interests.interestId = {};

endpoint.lists.listId.members = {};

endpoint.lists.listId.members.subscriberHash = {};

endpoint.lists.listId.members.subscriberHash.notes = {};

endpoint.lists.listId.members.subscriberHash.notes.noteId = {};

endpoint.lists.listId.mergeFields = {};

endpoint.lists.listId.mergeFields.mergeId = {};

endpoint.lists.listId.segments = {};

endpoint.lists.listId.segments.segmentId = {};

endpoint.lists.listId.webhooks = {};

endpoint.lists.listId.webhooks.webhookId = {};

endpoint.templateFolders = {};

endpoint.templateFolders.folderId = {};

endpoint.templates = {};

endpoint.templates.templateId = {};

endpoint.authorizedApps = {};

endpoint.automations = {};

endpoint.automations.workflowId = {};

endpoint.automations.workflowId.actions = {};

endpoint.automations.workflowId.actions.pauseAllEmails = {};

endpoint.automations.workflowId.actions.startAllEmails = {};

endpoint.automations.workflowId.emails = {};

endpoint.automations.workflowId.emails.workflowEmailId = {};

endpoint.automations.workflowId.emails.workflowEmailId.actions = {};

endpoint.automations.workflowId.emails.workflowEmailId.actions.pause = {};

endpoint.automations.workflowId.emails.workflowEmailId.actions.start = {};

endpoint.automations.workflowId.emails.workflowEmailId.queue = {};

endpoint.automations.workflowId.removedSubscribers = {};

endpoint.batches = {};

endpoint.campaigns.campaignId.actions = {};

endpoint.campaigns.campaignId.actions.cancelSend = {};

endpoint.campaigns.campaignId.actions.pause = {};

endpoint.campaigns.campaignId.actions.replicate = {};

endpoint.campaigns.campaignId.actions.resume = {};

endpoint.campaigns.campaignId.actions.schedule = {};

endpoint.campaigns.campaignId.actions.send = {};

endpoint.campaigns.campaignId.actions.test = {};

endpoint.campaigns.campaignId.actions.unschedule = {};

endpoint.conversations = {};

endpoint.conversations.conversationId = {};

endpoint.conversations.conversationId.messages = {};

endpoint.lists.listId.segments.segmentId.members = {};

endpoint.lists.listId.signupForms = {};

endpoint.authorizedApps.appId = {};

endpoint.automations.workflowId.emails.workflowEmailId.queue.subscriberHash = {};

endpoint.batches.batchId = {};

endpoint.campaigns.campaignId.content = {};

endpoint.campaigns.campaignId.sendChecklist = {};

endpoint.conversations.conversationId.messages.messageId = {};

endpoint.lists.listId.abuseReports = {};

endpoint.lists.listId.abuseReports.reportId = {};

endpoint.lists.listId.activity = {};

endpoint.lists.listId.clients = {};

endpoint.lists.listId.growthHistory = {};

endpoint.lists.listId.growthHistory.month = {};

endpoint.lists.listId.locations = {};

endpoint.lists.listId.members.subscriberHash.activity = {};

endpoint.lists.listId.members.subscriberHash.goals = {};

endpoint.reports = {};

endpoint.reports.campaignId = {};

endpoint.reports.campaignId.abuseReports = {};

endpoint.reports.campaignId.abuseReports.reportId = {};

endpoint.reports.campaignId.advice = {};

endpoint.reports.campaignId.clickDetails = {};

endpoint.reports.campaignId.clickDetails.linkId = {};

endpoint.reports.campaignId.clickDetails.linkId.members = {};

endpoint.reports.campaignId.clickDetails.linkId.members.subscriberHash = {};

endpoint.reports.campaignId.domainPerformance = {};

endpoint.reports.campaignId.eepurl = {};

endpoint.reports.campaignId.emailActivity = {};

endpoint.reports.campaignId.emailActivity.subscriberHash = {};

endpoint.reports.campaignId.locations = {};

endpoint.reports.campaignId.sentTo = {};

endpoint.reports.campaignId.sentTo.subscriberHash = {};

endpoint.reports.campaignId.subReports = {};

endpoint.reports.campaignId.unsubscribed = {};

endpoint.reports.campaignId.unsubscribed.subscriberHash = {};

endpoint.searchCampaigns = {};

endpoint.searchMembers = {};

endpoint.templates.templateId.defaultContent = {};

endpoint.lists.listId.segments.segmentId.members.subscriberHash = {};

endpoint.batchWebhooks.batchWebhookId.patch = function(httpOptions) {
    var url = parse('/batch-webhooks/{batch_webhook_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.campaignFolders.folderId.patch = function(httpOptions) {
    var url = parse('/campaign-folders/{folder_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.campaigns.campaignId.patch = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.campaigns.campaignId.feedback.feedbackId.patch = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/feedback/{feedback_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.carts.cartId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts/{cart_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.carts.cartId.lines.lineId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.customers.customerId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/customers/{customer_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.orders.orderId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders/{order_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.orders.orderId.lines.lineId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.products.productId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.products.productId.images.imageId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.ecommerce.stores.storeId.products.productId.variants.variantId.patch = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.fileManager.files.fileId.patch = function(httpOptions) {
    var url = parse('/file-manager/files/{file_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.fileManager.folders.folderId.patch = function(httpOptions) {
    var url = parse('/file-manager/folders/{folder_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.listId.patch = function(httpOptions) {
    var url = parse('/lists/{list_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.listId.interestCategories.interestCategoryId.patch = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories/{interest_category_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.listId.interestCategories.interestCategoryId.interests.interestId.patch = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.listId.members.subscriberHash.patch = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.listId.members.subscriberHash.notes.noteId.patch = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.listId.mergeFields.mergeId.patch = function(httpOptions) {
    var url = parse('/lists/{list_id}/merge-fields/{merge_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.listId.segments.segmentId.patch = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments/{segment_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.lists.listId.webhooks.webhookId.patch = function(httpOptions) {
    var url = parse('/lists/{list_id}/webhooks/{webhook_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.templateFolders.folderId.patch = function(httpOptions) {
    var url = parse('/template-folders/{folder_id}');
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.templates.templateId.patch = function(httpOptions) {
    var url = parse('/templates/{template_id}');
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

endpoint.automations.workflowId.actions.pauseAllEmails.post = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/actions/pause-all-emails');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.workflowId.actions.startAllEmails.post = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/actions/start-all-emails');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.workflowId.emails.workflowEmailId.actions.pause.post = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.workflowId.emails.workflowEmailId.actions.start.post = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/emails/{workflow_email_id}/actions/start');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.workflowId.emails.workflowEmailId.queue.post = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/emails/{workflow_email_id}/queue');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.automations.workflowId.removedSubscribers.post = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/removed-subscribers');
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

endpoint.campaigns.campaignId.actions.cancelSend.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/actions/cancel-send');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.campaignId.actions.pause.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/actions/pause');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.campaignId.actions.replicate.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/actions/replicate');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.campaignId.actions.resume.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/actions/resume');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.campaignId.actions.schedule.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/actions/schedule');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.campaignId.actions.send.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/actions/send');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.campaignId.actions.test.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/actions/test');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.campaignId.actions.unschedule.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/actions/unschedule');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.campaigns.campaignId.feedback.post = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/feedback');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.conversations.conversationId.messages.post = function(httpOptions) {
    var url = parse('/conversations/{conversation_id}/messages');
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

endpoint.ecommerce.stores.storeId.carts.post = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.storeId.carts.cartId.post = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts/{cart_id}');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.storeId.carts.cartId.lines.post = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts/{cart_id}/lines');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.storeId.customers.post = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/customers');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.storeId.orders.post = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.storeId.products.post = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.storeId.products.productId.images.post = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/images');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ecommerce.stores.storeId.products.productId.variants.post = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/variants');
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

endpoint.lists.post = function(httpOptions) {
    var url = parse('/lists');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.post = function(httpOptions) {
    var url = parse('/lists/{list_id}');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.interestCategories.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.interestCategories.interestCategoryId.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories/{interest_category_id}');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.interestCategories.interestCategoryId.interests.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories/{interest_category_id}/interests');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.members.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/members');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.members.subscriberHash.notes.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}/notes');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.mergeFields.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/merge-fields');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.segments.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.segments.segmentId.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments/{segment_id}');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.segments.segmentId.members.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments/{segment_id}/members');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.signupForms.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/signup-forms');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.lists.listId.webhooks.post = function(httpOptions) {
    var url = parse('/lists/{list_id}/webhooks');
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

endpoint.authorizedApps.get = function(httpOptions) {
    var url = parse('/authorized-apps');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.authorizedApps.appId.get = function(httpOptions) {
    var url = parse('/authorized-apps/{app_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.get = function(httpOptions) {
    var url = parse('/automations');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.workflowId.get = function(httpOptions) {
    var url = parse('/automations/{workflow_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.workflowId.emails.get = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/emails');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.workflowId.emails.workflowEmailId.get = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/emails/{workflow_email_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.workflowId.emails.workflowEmailId.queue.get = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/emails/{workflow_email_id}/queue');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.workflowId.emails.workflowEmailId.queue.subscriberHash.get = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.workflowId.removedSubscribers.get = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/removed-subscribers');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.batches.get = function(httpOptions) {
    var url = parse('/batches');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.batches.batchId.get = function(httpOptions) {
    var url = parse('/batches/{batch_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.batchWebhooks.get = function(httpOptions) {
    var url = parse('/batch-webhooks');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.batchWebhooks.batchWebhookId.get = function(httpOptions) {
    var url = parse('/batch-webhooks/{batch_webhook_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaignFolders.get = function(httpOptions) {
    var url = parse('/campaign-folders');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaignFolders.folderId.get = function(httpOptions) {
    var url = parse('/campaign-folders/{folder_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.get = function(httpOptions) {
    var url = parse('/campaigns');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.campaignId.get = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.campaignId.content.get = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/content');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.campaignId.feedback.get = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/feedback');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.campaignId.feedback.feedbackId.get = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/feedback/{feedback_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.campaignId.sendChecklist.get = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/send-checklist');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.conversations.get = function(httpOptions) {
    var url = parse('/conversations');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.conversations.conversationId.get = function(httpOptions) {
    var url = parse('/conversations/{conversation_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.conversations.conversationId.messages.get = function(httpOptions) {
    var url = parse('/conversations/{conversation_id}/messages');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.conversations.conversationId.messages.messageId.get = function(httpOptions) {
    var url = parse('/conversations/{conversation_id}/messages/{message_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.get = function(httpOptions) {
    var url = parse('/ecommerce/stores');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.carts.cartId.lines.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts/{cart_id}/lines');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.carts.cartId.lines.lineId.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.customers.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/customers');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.customers.customerId.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/customers/{customer_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.orders.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.orders.orderId.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders/{order_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.orders.orderId.lines.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders/{order_id}/lines');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.orders.orderId.lines.lineId.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.products.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.products.productId.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.products.productId.images.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/images');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.products.productId.images.imageId.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.products.productId.variants.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/variants');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ecommerce.stores.storeId.products.productId.variants.variantId.get = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.fileManager.files.get = function(httpOptions) {
    var url = parse('/file-manager/files');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.fileManager.files.fileId.get = function(httpOptions) {
    var url = parse('/file-manager/files/{file_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.fileManager.folders.get = function(httpOptions) {
    var url = parse('/file-manager/folders');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.fileManager.folders.folderId.get = function(httpOptions) {
    var url = parse('/file-manager/folders/{folder_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.get = function(httpOptions) {
    var url = parse('/lists');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.get = function(httpOptions) {
    var url = parse('/lists/{list_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.abuseReports.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/abuse-reports');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.abuseReports.reportId.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/abuse-reports/{report_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.activity.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/activity');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.clients.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/clients');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.growthHistory.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/growth-history');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.growthHistory.month.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/growth-history/{month}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.interestCategories.interestCategoryId.interests.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories/{interest_category_id}/interests');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.interestCategories.interestCategoryId.interests.interestId.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.locations.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/locations');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.members.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/members');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.members.subscriberHash.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.members.subscriberHash.activity.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}/activity');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.members.subscriberHash.goals.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}/goals');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.members.subscriberHash.notes.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}/notes');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.members.subscriberHash.notes.noteId.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.mergeFields.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/merge-fields');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.mergeFields.mergeId.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/merge-fields/{merge_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.segments.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.segments.segmentId.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments/{segment_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.segments.segmentId.members.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments/{segment_id}/members');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.signupForms.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/signup-forms');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.webhooks.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/webhooks');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.lists.listId.webhooks.webhookId.get = function(httpOptions) {
    var url = parse('/lists/{list_id}/webhooks/{webhook_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.get = function(httpOptions) {
    var url = parse('/reports');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.abuseReports.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/abuse-reports');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.abuseReports.reportId.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/abuse-reports/{report_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.advice.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/advice');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.clickDetails.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/click-details');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.clickDetails.linkId.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/click-details/{link_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.clickDetails.linkId.members.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/click-details/{link_id}/members');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.clickDetails.linkId.members.subscriberHash.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.domainPerformance.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/domain-performance');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.eepurl.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/eepurl');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.emailActivity.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/email-activity');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.emailActivity.subscriberHash.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/email-activity/{subscriber_hash}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.locations.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/locations');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.sentTo.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/sent-to');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.sentTo.subscriberHash.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/sent-to/{subscriber_hash}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.subReports.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/sub-reports');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.unsubscribed.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/unsubscribed');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.reports.campaignId.unsubscribed.subscriberHash.get = function(httpOptions) {
    var url = parse('/reports/{campaign_id}/unsubscribed/{subscriber_hash}');
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

endpoint.templateFolders.get = function(httpOptions) {
    var url = parse('/template-folders');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.templateFolders.folderId.get = function(httpOptions) {
    var url = parse('/template-folders/{folder_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.templates.get = function(httpOptions) {
    var url = parse('/templates');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.templates.templateId.get = function(httpOptions) {
    var url = parse('/templates/{template_id}');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.templates.templateId.defaultContent.get = function(httpOptions) {
    var url = parse('/templates/{template_id}/default-content');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.automations.workflowId.emails.workflowEmailId.delete = function(httpOptions) {
    var url = parse('/automations/{workflow_id}/emails/{workflow_email_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.batches.batchId.delete = function(httpOptions) {
    var url = parse('/batches/{batch_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.batchWebhooks.batchWebhookId.delete = function(httpOptions) {
    var url = parse('/batch-webhooks/{batch_webhook_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.campaignFolders.folderId.delete = function(httpOptions) {
    var url = parse('/campaign-folders/{folder_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.campaigns.campaignId.delete = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.campaigns.campaignId.feedback.feedbackId.delete = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/feedback/{feedback_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.carts.cartId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts/{cart_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.carts.cartId.lines.lineId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.customers.customerId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/customers/{customer_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.orders.orderId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders/{order_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.orders.orderId.lines.lineId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.products.productId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.products.productId.images.imageId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.ecommerce.stores.storeId.products.productId.variants.variantId.delete = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.fileManager.files.fileId.delete = function(httpOptions) {
    var url = parse('/file-manager/files/{file_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.fileManager.folders.folderId.delete = function(httpOptions) {
    var url = parse('/file-manager/folders/{folder_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.interestCategories.interestCategoryId.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories/{interest_category_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.interestCategories.interestCategoryId.interests.interestId.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.members.subscriberHash.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.members.subscriberHash.notes.noteId.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.mergeFields.mergeId.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}/merge-fields/{merge_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.segments.segmentId.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments/{segment_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.segments.segmentId.members.subscriberHash.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.lists.listId.webhooks.webhookId.delete = function(httpOptions) {
    var url = parse('/lists/{list_id}/webhooks/{webhook_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.templateFolders.folderId.delete = function(httpOptions) {
    var url = parse('/template-folders/{folder_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.templates.templateId.delete = function(httpOptions) {
    var url = parse('/templates/{template_id}');
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.campaigns.campaignId.content.put = function(httpOptions) {
    var url = parse('/campaigns/{campaign_id}/content');
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.ecommerce.stores.storeId.customers.customerId.put = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/customers/{customer_id}');
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.ecommerce.stores.storeId.products.productId.variants.variantId.put = function(httpOptions) {
    var url = parse('/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}');
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.lists.listId.members.subscriberHash.put = function(httpOptions) {
    var url = parse('/lists/{list_id}/members/{subscriber_hash}');
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

/////////////////////////////
// Public API
/////////////////////////////

endpoint.dates = {};
endpoint.dates.toMillis = function (stringDate) {
    var json = endpoint._convertDateToTimestamp({date: stringDate});
    if (json && json instanceof Object) {
        return json.timestamp;
    }
    return null;
};

endpoint.dates.toDate = function (stringDate) {
    var json = endpoint._convertDateToTimestamp({date: stringDate});
    if (json && json instanceof Object) {
        return new Date(json.timestamp);
    }
    return null;
};

endpoint.dates.fromMillis = function (millis) {
    var json = endpoint._formatFromMillis({millis: millis});
    if (json && json instanceof Object) {
        return json.date;
    }
    return null;
};

endpoint.dates.fromDate = function (date) {
    if (date) {
        var json = endpoint._formatFromMillis({millis: date.getTime()});
        if (json && json instanceof Object) {
            return json.date;
        }
    }
    return null;
};

endpoint.emailHash = function (email) {
    var json = endpoint._emailHash({email: email});
    if (json && json instanceof Object) {
        return json.hash;
    }
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