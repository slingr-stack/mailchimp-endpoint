////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

var urlsData = {
	"get": {
		"apiRoot": "/",
		"accountExports.get": "/account-exports",
		"authorizedApps.get": "/authorized-apps/:app_id",
		"automations.get": "/automations/:workflow_id",
		"automations.emails.get": "/automations/:workflow_id/emails/:workflow_email_id",
		"automations.emails.queue.get": "/automations/:workflow_id/emails/:workflow_email_id/queue/:subscriber_hash",
		"automations.removedSubscribers.get": "/automations/:workflow_id/removed-subscribers/:subscriber_hash",
		"batches.get": "/batches/:batch_id",
		"batchWebhooks.get": "/batch-webhooks/:batch_webhook_id",
		"campaignFolders.get": "/campaign-folders/:folder_id",
		"campaigns.get": "/campaigns/:campaign_id",
		"campaigns.content.get": "/campaigns/:campaign_id/content",
		"campaigns.feedback.get": "/campaigns/:campaign_id/feedback/:feedback_id",
		"campaigns.sendChecklist.get": "/campaigns/:campaign_id/send-checklist",
		"activityFeed.chimpChatter.get": "/activity-feed/chimp-chatter",
		"connectedSites.get": "/connected-sites/:connected_site_id",
		"conversations.get": "/conversations/:conversation_id",
		"conversations.messages.get": "/conversations/:conversation_id/messages/:message_id",
		"ecommerce.stores.get": "/ecommerce/stores/:store_id",
		"ecommerce.stores.carts.lines.get": "/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id",
		"ecommerce.stores.carts.get": "/ecommerce/stores/:store_id/carts/:cart_id",
		"ecommerce.stores.customers.get": "/ecommerce/stores/:store_id/customers/:customer_id",
		"ecommerce.stores.orders.lines.get": "/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id",
		"ecommerce.orders.get": "/ecommerce/orders",
		"ecommerce.stores.orders.get": "/ecommerce/stores/:store_id/orders/:order_id",
		"ecommerce.stores.products.images.get": "/ecommerce/stores/:store_id/products/:product_id/images/:image_id",
		"ecommerce.stores.products.variants.get": "/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id",
		"ecommerce.stores.products.get": "/ecommerce/stores/:store_id/products/:product_id",
		"ecommerce.stores.promoRules.promoCodes.get": "/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes/:promo_code_id",
		"ecommerce.stores.promoRules.get": "/ecommerce/stores/:store_id/promo-rules/:promo_rule_id",
		"facebookAds.get": "/facebook-ads/:outreach_id",
		"fileManager.files.get": "/file-manager/files/:file_id",
		"fileManager.folders.get": "/file-manager/folders/:folder_id",
		"landingPages.get": "/landing-pages/:page_id",
		"landingPages.content.get": "/landing-pages/:page_id/content",
		"lists.get": "/lists/:list_id",
		"lists.abuseReports.get": "/lists/:list_id/abuse-reports/:report_id",
		"lists.activity.get": "/lists/:list_id/activity",
		"lists.clients.get": "/lists/:list_id/clients",
		"lists.members.events.get": "/lists/:list_id/members/:subscriber_hash/events",
		"lists.growthHistory.get": "/lists/:list_id/growth-history/:month",
		"lists.interestCategories.get": "/lists/:list_id/interest-categories/:interest_category_id",
		"lists.interestCategories.interests.get": "/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id",
		"lists.locations.get": "/lists/:list_id/locations",
		"lists.members.activity.get": "/lists/:list_id/members/:subscriber_hash/activity",
		"lists.members.activityFeed.get": "/lists/:list_id/members/:subscriber_hash/activity-feed",
		"lists.members.goals.get": "/lists/:list_id/members/:subscriber_hash/goals",
		"lists.members.notes.get": "/lists/:list_id/members/:subscriber_hash/notes/:note_id",
		"lists.members.tags.get": "/lists/:list_id/members/:subscriber_hash/tags",
		"lists.members.get": "/lists/:list_id/members/:subscriber_hash",
		"lists.mergeFields.get": "/lists/:list_id/merge-fields/:merge_id",
		"lists.segments.members.get": "/lists/:list_id/segments/:segment_id/members",
		"lists.segments.get": "/lists/:list_id/segments/:segment_id",
		"lists.signupForms.get": "/lists/:list_id/signup-forms",
		"lists.tagSearch.get": "/lists/:list_id/tag-search",
		"lists.webhooks.get": "/lists/:list_id/webhooks/:webhook_id",
		"ping.get": "/ping",
		"reporting.facebookAds.get": "/reporting/facebook-ads/:outreach_id",
		"reporting.facebookAds.ecommerceProductActivity.get": "/reporting/facebook-ads/:outreach_id/ecommerce-product-activity",
		"reporting.landingPages.get": "/reporting/landing-pages/:outreach_id",
		"reports.get": "/reports/:campaign_id",
		"reports.abuseReports.get": "/reports/:campaign_id/abuse-reports/:report_id",
		"reports.advice.get": "/reports/:campaign_id/advice",
		"reports.openDetails.get": "/reports/:campaign_id/open-details/:subscriber_hash",
		"reports.clickDetails.get": "/reports/:campaign_id/click-details/:link_id",
		"reports.clickDetails.members.get": "/reports/:campaign_id/click-details/:link_id/members/:subscriber_hash",
		"reports.domainPerformance.get": "/reports/:campaign_id/domain-performance",
		"reports.ecommerceProductActivity.get": "/reports/:campaign_id/ecommerce-product-activity",
		"reports.eepurl.get": "/reports/:campaign_id/eepurl",
		"reports.emailActivity.get": "/reports/:campaign_id/email-activity/:subscriber_hash",
		"reports.locations.get": "/reports/:campaign_id/locations",
		"reports.sentTo.get": "/reports/:campaign_id/sent-to/:subscriber_hash",
		"reports.subReports.get": "/reports/:campaign_id/sub-reports",
		"reports.unsubscribed.get": "/reports/:campaign_id/unsubscribed/:subscriber_hash",
		"searchCampaigns.get": "/search-campaigns",
		"searchMembers.get": "/search-members",
		"templateFolders.get": "/template-folders/:folder_id",
		"templates.get": "/templates/:template_id",
		"templates.defaultContent.get": "/templates/:template_id/default-content",
		"verifiedDomains.get": "/verified-domains/:domain_name"
	},
	"post": {
		"accountExports.post": "/account-exports/:export_id",
		"automations.post": "/automations",
		"automations.actions.archive.post": "/automations/:workflow_id/actions/archive",
		"automations.actions.pauseAllEmails.post": "/automations/:workflow_id/actions/pause-all-emails",
		"automations.actions.startAllEmails.post": "/automations/:workflow_id/actions/start-all-emails",
		"automations.emails.actions.pause.post": "/automations/:workflow_id/emails/:workflow_email_id/actions/pause",
		"automations.emails.actions.start.post": "/automations/:workflow_id/emails/:workflow_email_id/actions/start",
		"automations.emails.queue.post": "/automations/:workflow_id/emails/:workflow_email_id/queue",
		"automations.removedSubscribers.post": "/automations/:workflow_id/removed-subscribers",
		"batches.post": "/batches",
		"batchWebhooks.post": "/batch-webhooks",
		"campaignFolders.post": "/campaign-folders",
		"campaigns.post": "/campaigns",
		"campaigns.actions.cancelSend.post": "/campaigns/:campaign_id/actions/cancel-send",
		"campaigns.actions.send.post": "/campaigns/:campaign_id/actions/send",
		"campaigns.actions.schedule.post": "/campaigns/:campaign_id/actions/schedule",
		"campaigns.actions.unschedule.post": "/campaigns/:campaign_id/actions/unschedule",
		"campaigns.actions.pause.post": "/campaigns/:campaign_id/actions/pause",
		"campaigns.actions.resume.post": "/campaigns/:campaign_id/actions/resume",
		"campaigns.actions.replicate.post": "/campaigns/:campaign_id/actions/replicate",
		"campaigns.actions.test.post": "/campaigns/:campaign_id/actions/test",
		"campaigns.actions.createResend.post": "/campaigns/:campaign_id/actions/create-resend",
		"campaigns.feedback.post": "/campaigns/:campaign_id/feedback",
		"connectedSites.post": "/connected-sites",
		"connectedSites.actions.verifyScriptInstallation.post": "/connected-sites/:connected_site_id/actions/verify-script-installation",
		"customerJourneys.journeys.steps.actions.trigger.post": "/customer-journeys/journeys/:journey_id/steps/:step_id/actions/trigger",
		"ecommerce.stores.post": "/ecommerce/stores",
		"ecommerce.stores.carts.lines.post": "/ecommerce/stores/:store_id/carts/:cart_id/lines",
		"ecommerce.stores.carts.post": "/ecommerce/stores/:store_id/carts",
		"ecommerce.stores.customers.post": "/ecommerce/stores/:store_id/customers",
		"ecommerce.stores.orders.lines.post": "/ecommerce/stores/:store_id/orders/:order_id/lines",
		"ecommerce.stores.products.post": "/ecommerce/stores/:store_id/products",
		"ecommerce.stores.orders.post": "/ecommerce/stores/:store_id/orders",
		"ecommerce.stores.products.images.post": "/ecommerce/stores/:store_id/products/:product_id/images",
		"ecommerce.stores.products.variants.post": "/ecommerce/stores/:store_id/products/:product_id/variants",
		"ecommerce.stores.promoRules.promoCodes.post": "/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes",
		"ecommerce.stores.promoRules.post": "/ecommerce/stores/:store_id/promo-rules",
		"fileManager.files.post": "/file-manager/files",
		"fileManager.folders.post": "/file-manager/folders",
		"landingPages.post": "/landing-pages",
		"landingPages.actions.publish.post": "/landing-pages/:page_id/actions/publish",
		"landingPages.actions.unpublish.post": "/landing-pages/:page_id/actions/unpublish",
		"lists.post": "/lists/:list_id",
		"lists.members.events.post": "/lists/:list_id/members/:subscriber_hash/events",
		"lists.interestCategories.post": "/lists/:list_id/interest-categories",
		"lists.interestCategories.interests.post": "/lists/:list_id/interest-categories/:interest_category_id/interests",
		"lists.members.notes.post": "/lists/:list_id/members/:subscriber_hash/notes",
		"lists.members.tags.post": "/lists/:list_id/members/:subscriber_hash/tags",
		"lists.members.post": "/lists/:list_id/members",
		"lists.members.actions.deletePermanent.post": "/lists/:list_id/members/:subscriber_hash/actions/delete-permanent",
		"lists.mergeFields.post": "/lists/:list_id/merge-fields",
		"lists.segments.members.post": "/lists/:list_id/segments/:segment_id/members",
		"lists.segments.post": "/lists/:list_id/segments/:segment_id",
		"lists.signupForms.post": "/lists/:list_id/signup-forms",
		"lists.webhooks.post": "/lists/:list_id/webhooks",
		"templateFolders.post": "/template-folders",
		"templates.post": "/templates",
		"verifiedDomains.post": "/verified-domains",
		"verifiedDomains.actions.verify.post": "/verified-domains/:domain_name/actions/verify"
	},
	"patch": {
		"automations.emails.patch": "/automations/:workflow_id/emails/:workflow_email_id",
		"batchWebhooks.patch": "/batch-webhooks/:batch_webhook_id",
		"campaignFolders.patch": "/campaign-folders/:folder_id",
		"campaigns.patch": "/campaigns/:campaign_id",
		"campaigns.feedback.patch": "/campaigns/:campaign_id/feedback/:feedback_id",
		"ecommerce.stores.patch": "/ecommerce/stores/:store_id",
		"ecommerce.stores.carts.lines.patch": "/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id",
		"ecommerce.stores.carts.patch": "/ecommerce/stores/:store_id/carts/:cart_id",
		"ecommerce.stores.customers.patch": "/ecommerce/stores/:store_id/customers/:customer_id",
		"ecommerce.stores.orders.lines.patch": "/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id",
		"ecommerce.stores.orders.patch": "/ecommerce/stores/:store_id/orders/:order_id",
		"ecommerce.stores.products.images.patch": "/ecommerce/stores/:store_id/products/:product_id/images/:image_id",
		"ecommerce.stores.products.variants.patch": "/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id",
		"ecommerce.stores.products.patch": "/ecommerce/stores/:store_id/products/:product_id",
		"ecommerce.stores.promoRules.promoCodes.patch": "/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes/:promo_code_id",
		"ecommerce.stores.promoRules.patch": "/ecommerce/stores/:store_id/promo-rules/:promo_rule_id",
		"fileManager.files.patch": "/file-manager/files/:file_id",
		"fileManager.folders.patch": "/file-manager/folders/:folder_id",
		"landingPages.patch": "/landing-pages/:page_id",
		"lists.patch": "/lists/:list_id",
		"lists.interestCategories.patch": "/lists/:list_id/interest-categories/:interest_category_id",
		"lists.interestCategories.interests.patch": "/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id",
		"lists.members.notes.patch": "/lists/:list_id/members/:subscriber_hash/notes/:note_id",
		"lists.members.patch": "/lists/:list_id/members/:subscriber_hash",
		"lists.mergeFields.patch": "/lists/:list_id/merge-fields/:merge_id",
		"lists.segments.patch": "/lists/:list_id/segments/:segment_id",
		"lists.webhooks.patch": "/lists/:list_id/webhooks/:webhook_id",
		"templateFolders.patch": "/template-folders/:folder_id",
		"templates.patch": "/templates/:template_id"
	},
	"delete": {
		"automations.emails.delete": "/automations/:workflow_id/emails/:workflow_email_id",
		"batches.delete": "/batches/:batch_id",
		"batchWebhooks.delete": "/batch-webhooks/:batch_webhook_id",
		"campaignFolders.delete": "/campaign-folders/:folder_id",
		"campaigns.delete": "/campaigns/:campaign_id",
		"campaigns.feedback.delete": "/campaigns/:campaign_id/feedback/:feedback_id",
		"connectedSites.delete": "/connected-sites/:connected_site_id",
		"ecommerce.stores.delete": "/ecommerce/stores/:store_id",
		"ecommerce.stores.carts.lines.delete": "/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id",
		"ecommerce.stores.carts.delete": "/ecommerce/stores/:store_id/carts/:cart_id",
		"ecommerce.stores.customers.delete": "/ecommerce/stores/:store_id/customers/:customer_id",
		"ecommerce.stores.orders.lines.delete": "/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id",
		"ecommerce.stores.orders.delete": "/ecommerce/stores/:store_id/orders/:order_id",
		"ecommerce.stores.products.images.delete": "/ecommerce/stores/:store_id/products/:product_id/images/:image_id",
		"ecommerce.stores.products.variants.delete": "/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id",
		"ecommerce.stores.products.delete": "/ecommerce/stores/:store_id/products/:product_id",
		"ecommerce.stores.promoRules.promoCodes.delete": "/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes/:promo_code_id",
		"ecommerce.stores.promoRules.delete": "/ecommerce/stores/:store_id/promo-rules/:promo_rule_id",
		"fileManager.files.delete": "/file-manager/files/:file_id",
		"fileManager.folders.delete": "/file-manager/folders/:folder_id",
		"landingPages.delete": "/landing-pages/:page_id",
		"lists.delete": "/lists/:list_id",
		"lists.interestCategories.delete": "/lists/:list_id/interest-categories/:interest_category_id",
		"lists.interestCategories.interests.delete": "/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id",
		"lists.members.notes.delete": "/lists/:list_id/members/:subscriber_hash/notes/:note_id",
		"lists.members.delete": "/lists/:list_id/members/:subscriber_hash",
		"lists.mergeFields.delete": "/lists/:list_id/merge-fields/:merge_id",
		"lists.segments.members.delete": "/lists/:list_id/segments/:segment_id/members/:subscriber_hash",
		"lists.segments.delete": "/lists/:list_id/segments/:segment_id",
		"lists.webhooks.delete": "/lists/:list_id/webhooks/:webhook_id",
		"templateFolders.delete": "/template-folders/:folder_id",
		"templates.delete": "/templates/:template_id",
		"verifiedDomains.delete": "/verified-domains/:domain_name"
	},
	"put": {
		"campaigns.content.put": "/campaigns/:campaign_id/content",
		"ecommerce.stores.customers.put": "/ecommerce/stores/:store_id/customers/:customer_id",
		"ecommerce.stores.products.variants.put": "/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id",
		"lists.members.put": "/lists/:list_id/members/:subscriber_hash"
	}
};

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, function () {
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
};

endpoint.apiRoot = function(httpOptions) {
	var url = parse(urlsData['get']['apiRoot']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.accountExports = {};

endpoint.accountExports.get = function(httpOptions) {
	var url = parse(urlsData['get']['accountExports.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.accountExports.post = function(httpOptions) {
	var url = parse(urlsData['post']['accountExports.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.accountExports.post = function(exportId, httpOptions) {
	if (!exportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [exportId].');
		return;
	}
	var url = parse(urlsData['post']['accountExports.post'], [exportId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.authorizedApps = {};

endpoint.authorizedApps.get = function(httpOptions) {
	var url = parse(urlsData['get']['authorizedApps.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.authorizedApps.get = function(appId, httpOptions) {
	if (!appId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [appId].');
		return;
	}
	var url = parse(urlsData['get']['authorizedApps.get'], [appId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations = {};

endpoint.automations.get = function(httpOptions) {
	var url = parse(urlsData['get']['automations.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.post = function(httpOptions) {
	var url = parse(urlsData['post']['automations.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.get = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse(urlsData['get']['automations.get'], [workflowId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.actions = {};

endpoint.automations.actions.archive = {};

endpoint.automations.actions.archive.post = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse(urlsData['post']['automations.actions.archive.post'], [workflowId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.actions.pauseAllEmails = {};

endpoint.automations.actions.pauseAllEmails.post = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse(urlsData['post']['automations.actions.pauseAllEmails.post'], [workflowId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.actions.startAllEmails = {};

endpoint.automations.actions.startAllEmails.post = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse(urlsData['post']['automations.actions.startAllEmails.post'], [workflowId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.emails = {};

endpoint.automations.emails.get = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse(urlsData['get']['automations.emails.get'], [workflowId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.emails.get = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse(urlsData['get']['automations.emails.get'], [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.emails.patch = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse(urlsData['patch']['automations.emails.patch'], [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.automations.emails.delete = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse(urlsData['delete']['automations.emails.delete'], [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.automations.emails.actions = {};

endpoint.automations.emails.actions.pause = {};

endpoint.automations.emails.actions.pause.post = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse(urlsData['post']['automations.emails.actions.pause.post'], [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.emails.actions.start = {};

endpoint.automations.emails.actions.start.post = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse(urlsData['post']['automations.emails.actions.start.post'], [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.emails.queue = {};

endpoint.automations.emails.queue.get = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse(urlsData['get']['automations.emails.queue.get'], [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.emails.queue.post = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse(urlsData['post']['automations.emails.queue.post'], [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.emails.queue.get = function(workflowId, workflowEmailId, subscriberHash, httpOptions) {
	if (!workflowId || !workflowEmailId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['automations.emails.queue.get'], [workflowId, workflowEmailId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.removedSubscribers = {};

endpoint.automations.removedSubscribers.get = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse(urlsData['get']['automations.removedSubscribers.get'], [workflowId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.removedSubscribers.post = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse(urlsData['post']['automations.removedSubscribers.post'], [workflowId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.removedSubscribers.get = function(workflowId, subscriberHash, httpOptions) {
	if (!workflowId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['automations.removedSubscribers.get'], [workflowId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batches = {};

endpoint.batches.get = function(httpOptions) {
	var url = parse(urlsData['get']['batches.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batches.post = function(httpOptions) {
	var url = parse(urlsData['post']['batches.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.batches.get = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse(urlsData['get']['batches.get'], [batchId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batches.delete = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse(urlsData['delete']['batches.delete'], [batchId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.batchWebhooks = {};

endpoint.batchWebhooks.get = function(httpOptions) {
	var url = parse(urlsData['get']['batchWebhooks.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batchWebhooks.post = function(httpOptions) {
	var url = parse(urlsData['post']['batchWebhooks.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.batchWebhooks.get = function(batchWebhookId, httpOptions) {
	if (!batchWebhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
		return;
	}
	var url = parse(urlsData['get']['batchWebhooks.get'], [batchWebhookId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batchWebhooks.patch = function(batchWebhookId, httpOptions) {
	if (!batchWebhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
		return;
	}
	var url = parse(urlsData['patch']['batchWebhooks.patch'], [batchWebhookId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.batchWebhooks.delete = function(batchWebhookId, httpOptions) {
	if (!batchWebhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
		return;
	}
	var url = parse(urlsData['delete']['batchWebhooks.delete'], [batchWebhookId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.campaignFolders = {};

endpoint.campaignFolders.get = function(httpOptions) {
	var url = parse(urlsData['get']['campaignFolders.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaignFolders.post = function(httpOptions) {
	var url = parse(urlsData['post']['campaignFolders.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaignFolders.get = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['get']['campaignFolders.get'], [folderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaignFolders.patch = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['patch']['campaignFolders.patch'], [folderId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.campaignFolders.delete = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['delete']['campaignFolders.delete'], [folderId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.campaigns = {};

endpoint.campaigns.get = function(httpOptions) {
	var url = parse(urlsData['get']['campaigns.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.post = function(httpOptions) {
	var url = parse(urlsData['post']['campaigns.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['campaigns.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.patch = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['patch']['campaigns.patch'], [campaignId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.campaigns.delete = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['delete']['campaigns.delete'], [campaignId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.campaigns.actions = {};

endpoint.campaigns.actions.cancelSend = {};

endpoint.campaigns.actions.cancelSend.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.cancelSend.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.send = {};

endpoint.campaigns.actions.send.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.send.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.schedule = {};

endpoint.campaigns.actions.schedule.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.schedule.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.unschedule = {};

endpoint.campaigns.actions.unschedule.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.unschedule.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.pause = {};

endpoint.campaigns.actions.pause.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.pause.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.resume = {};

endpoint.campaigns.actions.resume.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.resume.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.replicate = {};

endpoint.campaigns.actions.replicate.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.replicate.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.test = {};

endpoint.campaigns.actions.test.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.test.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.createResend = {};

endpoint.campaigns.actions.createResend.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.actions.createResend.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.content = {};

endpoint.campaigns.content.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['campaigns.content.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.content.put = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['put']['campaigns.content.put'], [campaignId]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.campaigns.feedback = {};

endpoint.campaigns.feedback.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['campaigns.feedback.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.feedback.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['post']['campaigns.feedback.post'], [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.feedback.get = function(campaignId, feedbackId, httpOptions) {
	if (!campaignId || !feedbackId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
		return;
	}
	var url = parse(urlsData['get']['campaigns.feedback.get'], [campaignId, feedbackId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.feedback.patch = function(campaignId, feedbackId, httpOptions) {
	if (!campaignId || !feedbackId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
		return;
	}
	var url = parse(urlsData['patch']['campaigns.feedback.patch'], [campaignId, feedbackId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.campaigns.feedback.delete = function(campaignId, feedbackId, httpOptions) {
	if (!campaignId || !feedbackId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
		return;
	}
	var url = parse(urlsData['delete']['campaigns.feedback.delete'], [campaignId, feedbackId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.campaigns.sendChecklist = {};

endpoint.campaigns.sendChecklist.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['campaigns.sendChecklist.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.activityFeed = {};

endpoint.activityFeed.chimpChatter = {};

endpoint.activityFeed.chimpChatter.get = function(httpOptions) {
	var url = parse(urlsData['get']['activityFeed.chimpChatter.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.connectedSites = {};

endpoint.connectedSites.get = function(httpOptions) {
	var url = parse(urlsData['get']['connectedSites.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.connectedSites.post = function(httpOptions) {
	var url = parse(urlsData['post']['connectedSites.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.connectedSites.get = function(connectedSiteId, httpOptions) {
	if (!connectedSiteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [connectedSiteId].');
		return;
	}
	var url = parse(urlsData['get']['connectedSites.get'], [connectedSiteId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.connectedSites.delete = function(connectedSiteId, httpOptions) {
	if (!connectedSiteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [connectedSiteId].');
		return;
	}
	var url = parse(urlsData['delete']['connectedSites.delete'], [connectedSiteId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.connectedSites.actions = {};

endpoint.connectedSites.actions.verifyScriptInstallation = {};

endpoint.connectedSites.actions.verifyScriptInstallation.post = function(connectedSiteId, httpOptions) {
	if (!connectedSiteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [connectedSiteId].');
		return;
	}
	var url = parse(urlsData['post']['connectedSites.actions.verifyScriptInstallation.post'], [connectedSiteId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.conversations = {};

endpoint.conversations.get = function(httpOptions) {
	var url = parse(urlsData['get']['conversations.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.conversations.get = function(conversationId, httpOptions) {
	if (!conversationId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [conversationId].');
		return;
	}
	var url = parse(urlsData['get']['conversations.get'], [conversationId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.conversations.messages = {};

endpoint.conversations.messages.get = function(conversationId, httpOptions) {
	if (!conversationId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [conversationId].');
		return;
	}
	var url = parse(urlsData['get']['conversations.messages.get'], [conversationId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.conversations.messages.get = function(conversationId, messageId, httpOptions) {
	if (!conversationId || !messageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [conversationId,messageId].');
		return;
	}
	var url = parse(urlsData['get']['conversations.messages.get'], [conversationId, messageId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.customerJourneys = {};

endpoint.customerJourneys.journeys = {};

endpoint.customerJourneys.journeys.steps = {};

endpoint.customerJourneys.journeys.steps.actions = {};

endpoint.customerJourneys.journeys.steps.actions.trigger = {};

endpoint.customerJourneys.journeys.steps.actions.trigger.post = function(journeyId, stepId, httpOptions) {
	if (!journeyId || !stepId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [journeyId,stepId].');
		return;
	}
	var url = parse(urlsData['post']['customerJourneys.journeys.steps.actions.trigger.post'], [journeyId, stepId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce = {};

endpoint.ecommerce.stores = {};

endpoint.ecommerce.stores.get = function(httpOptions) {
	var url = parse(urlsData['get']['ecommerce.stores.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.post = function(httpOptions) {
	var url = parse(urlsData['post']['ecommerce.stores.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.get'], [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.patch = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.patch'], [storeId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.delete = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.delete'], [storeId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.carts = {};

endpoint.ecommerce.stores.carts.lines = {};

endpoint.ecommerce.stores.carts.lines.get = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.carts.lines.get'], [storeId, cartId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.carts.lines.post = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.carts.lines.post'], [storeId, cartId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.carts.lines.get = function(storeId, cartId, lineId, httpOptions) {
	if (!storeId || !cartId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.carts.lines.get'], [storeId, cartId, lineId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.carts.lines.patch = function(storeId, cartId, lineId, httpOptions) {
	if (!storeId || !cartId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.carts.lines.patch'], [storeId, cartId, lineId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.carts.lines.delete = function(storeId, cartId, lineId, httpOptions) {
	if (!storeId || !cartId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.carts.lines.delete'], [storeId, cartId, lineId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.carts.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.carts.get'], [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.carts.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.carts.post'], [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.carts.get = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.carts.get'], [storeId, cartId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.carts.patch = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.carts.patch'], [storeId, cartId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.carts.delete = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.carts.delete'], [storeId, cartId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.customers = {};

endpoint.ecommerce.stores.customers.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.customers.get'], [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.customers.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.customers.post'], [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.customers.get = function(storeId, customerId, httpOptions) {
	if (!storeId || !customerId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.customers.get'], [storeId, customerId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.customers.put = function(storeId, customerId, httpOptions) {
	if (!storeId || !customerId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
		return;
	}
	var url = parse(urlsData['put']['ecommerce.stores.customers.put'], [storeId, customerId]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.ecommerce.stores.customers.patch = function(storeId, customerId, httpOptions) {
	if (!storeId || !customerId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.customers.patch'], [storeId, customerId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.customers.delete = function(storeId, customerId, httpOptions) {
	if (!storeId || !customerId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.customers.delete'], [storeId, customerId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.orders = {};

endpoint.ecommerce.stores.orders.lines = {};

endpoint.ecommerce.stores.orders.lines.get = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.orders.lines.get'], [storeId, orderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.lines.post = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.orders.lines.post'], [storeId, orderId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.orders.lines.get = function(storeId, orderId, lineId, httpOptions) {
	if (!storeId || !orderId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.orders.lines.get'], [storeId, orderId, lineId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.lines.patch = function(storeId, orderId, lineId, httpOptions) {
	if (!storeId || !orderId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.orders.lines.patch'], [storeId, orderId, lineId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.orders.lines.delete = function(storeId, orderId, lineId, httpOptions) {
	if (!storeId || !orderId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.orders.lines.delete'], [storeId, orderId, lineId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.products = {};

endpoint.ecommerce.stores.products.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.products.post'], [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.orders = {};

endpoint.ecommerce.orders.get = function(httpOptions) {
	var url = parse(urlsData['get']['ecommerce.orders.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.orders.get'], [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.orders.post'], [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.orders.get = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.orders.get'], [storeId, orderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.patch = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.orders.patch'], [storeId, orderId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.orders.delete = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.orders.delete'], [storeId, orderId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.products.images = {};

endpoint.ecommerce.stores.products.images.get = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.products.images.get'], [storeId, productId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.images.post = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.products.images.post'], [storeId, productId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.products.images.get = function(storeId, productId, imageId, httpOptions) {
	if (!storeId || !productId || !imageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.products.images.get'], [storeId, productId, imageId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.images.patch = function(storeId, productId, imageId, httpOptions) {
	if (!storeId || !productId || !imageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.products.images.patch'], [storeId, productId, imageId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.products.images.delete = function(storeId, productId, imageId, httpOptions) {
	if (!storeId || !productId || !imageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.products.images.delete'], [storeId, productId, imageId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants = {};

endpoint.ecommerce.stores.products.variants.get = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.products.variants.get'], [storeId, productId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.post = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.products.variants.post'], [storeId, productId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.get = function(storeId, productId, variantId, httpOptions) {
	if (!storeId || !productId || !variantId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.products.variants.get'], [storeId, productId, variantId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.put = function(storeId, productId, variantId, httpOptions) {
	if (!storeId || !productId || !variantId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
		return;
	}
	var url = parse(urlsData['put']['ecommerce.stores.products.variants.put'], [storeId, productId, variantId]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.patch = function(storeId, productId, variantId, httpOptions) {
	if (!storeId || !productId || !variantId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.products.variants.patch'], [storeId, productId, variantId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.delete = function(storeId, productId, variantId, httpOptions) {
	if (!storeId || !productId || !variantId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.products.variants.delete'], [storeId, productId, variantId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.products.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.products.get'], [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.products.post'], [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.products.get = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.products.get'], [storeId, productId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.patch = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.products.patch'], [storeId, productId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.products.delete = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.products.delete'], [storeId, productId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules = {};

endpoint.ecommerce.stores.promoRules.promoCodes = {};

endpoint.ecommerce.stores.promoRules.promoCodes.get = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.promoRules.promoCodes.get'], [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.promoCodes.post = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.promoRules.promoCodes.post'], [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.promoCodes.get = function(storeId, promoRuleId, promoCodeId, httpOptions) {
	if (!storeId || !promoRuleId || !promoCodeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId,promoCodeId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.promoRules.promoCodes.get'], [storeId, promoRuleId, promoCodeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.promoCodes.patch = function(storeId, promoRuleId, promoCodeId, httpOptions) {
	if (!storeId || !promoRuleId || !promoCodeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId,promoCodeId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.promoRules.promoCodes.patch'], [storeId, promoRuleId, promoCodeId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.promoCodes.delete = function(storeId, promoRuleId, promoCodeId, httpOptions) {
	if (!storeId || !promoRuleId || !promoCodeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId,promoCodeId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.promoRules.promoCodes.delete'], [storeId, promoRuleId, promoCodeId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.promoRules.get'], [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse(urlsData['post']['ecommerce.stores.promoRules.post'], [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.get = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse(urlsData['get']['ecommerce.stores.promoRules.get'], [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.patch = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse(urlsData['patch']['ecommerce.stores.promoRules.patch'], [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.delete = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse(urlsData['delete']['ecommerce.stores.promoRules.delete'], [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.facebookAds = {};

endpoint.facebookAds.get = function(httpOptions) {
	var url = parse(urlsData['get']['facebookAds.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.facebookAds.get = function(outreachId, httpOptions) {
	if (!outreachId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [outreachId].');
		return;
	}
	var url = parse(urlsData['get']['facebookAds.get'], [outreachId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager = {};

endpoint.fileManager.files = {};

endpoint.fileManager.files.get = function(httpOptions) {
	var url = parse(urlsData['get']['fileManager.files.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager.files.post = function(httpOptions) {
	var url = parse(urlsData['post']['fileManager.files.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.fileManager.files.get = function(fileId, httpOptions) {
	if (!fileId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
		return;
	}
	var url = parse(urlsData['get']['fileManager.files.get'], [fileId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager.files.patch = function(fileId, httpOptions) {
	if (!fileId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
		return;
	}
	var url = parse(urlsData['patch']['fileManager.files.patch'], [fileId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.fileManager.files.delete = function(fileId, httpOptions) {
	if (!fileId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
		return;
	}
	var url = parse(urlsData['delete']['fileManager.files.delete'], [fileId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.fileManager.folders = {};

endpoint.fileManager.folders.get = function(httpOptions) {
	var url = parse(urlsData['get']['fileManager.folders.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager.folders.post = function(httpOptions) {
	var url = parse(urlsData['post']['fileManager.folders.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.fileManager.folders.get = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['get']['fileManager.folders.get'], [folderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager.folders.patch = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['patch']['fileManager.folders.patch'], [folderId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.fileManager.folders.delete = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['delete']['fileManager.folders.delete'], [folderId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.landingPages = {};

endpoint.landingPages.get = function(httpOptions) {
	var url = parse(urlsData['get']['landingPages.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.landingPages.post = function(httpOptions) {
	var url = parse(urlsData['post']['landingPages.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.landingPages.get = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse(urlsData['get']['landingPages.get'], [pageId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.landingPages.patch = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse(urlsData['patch']['landingPages.patch'], [pageId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.landingPages.delete = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse(urlsData['delete']['landingPages.delete'], [pageId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.landingPages.actions = {};

endpoint.landingPages.actions.publish = {};

endpoint.landingPages.actions.publish.post = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse(urlsData['post']['landingPages.actions.publish.post'], [pageId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.landingPages.actions.unpublish = {};

endpoint.landingPages.actions.unpublish.post = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse(urlsData['post']['landingPages.actions.unpublish.post'], [pageId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.landingPages.content = {};

endpoint.landingPages.content.get = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse(urlsData['get']['landingPages.content.get'], [pageId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists = {};

endpoint.lists.get = function(httpOptions) {
	var url = parse(urlsData['get']['lists.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.post = function(httpOptions) {
	var url = parse(urlsData['post']['lists.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.patch = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['patch']['lists.patch'], [listId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.delete = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['delete']['lists.delete'], [listId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['post']['lists.post'], [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.abuseReports = {};

endpoint.lists.abuseReports.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.abuseReports.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.abuseReports.get = function(listId, reportId, httpOptions) {
	if (!listId || !reportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,reportId].');
		return;
	}
	var url = parse(urlsData['get']['lists.abuseReports.get'], [listId, reportId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.activity = {};

endpoint.lists.activity.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.activity.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.clients = {};

endpoint.lists.clients.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.clients.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members = {};

endpoint.lists.members.events = {};

endpoint.lists.members.events.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.events.get'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.events.post = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['post']['lists.members.events.post'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.growthHistory = {};

endpoint.lists.growthHistory.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.growthHistory.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.growthHistory.get = function(listId, month, httpOptions) {
	if (!listId || !month) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,month].');
		return;
	}
	var url = parse(urlsData['get']['lists.growthHistory.get'], [listId, month]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories = {};

endpoint.lists.interestCategories.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.interestCategories.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['post']['lists.interestCategories.post'], [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.interestCategories.get = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse(urlsData['get']['lists.interestCategories.get'], [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories.patch = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse(urlsData['patch']['lists.interestCategories.patch'], [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.interestCategories.delete = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse(urlsData['delete']['lists.interestCategories.delete'], [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.interestCategories.interests = {};

endpoint.lists.interestCategories.interests.get = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse(urlsData['get']['lists.interestCategories.interests.get'], [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories.interests.post = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse(urlsData['post']['lists.interestCategories.interests.post'], [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.interestCategories.interests.get = function(listId, interestCategoryId, interestId, httpOptions) {
	if (!listId || !interestCategoryId || !interestId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
		return;
	}
	var url = parse(urlsData['get']['lists.interestCategories.interests.get'], [listId, interestCategoryId, interestId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories.interests.patch = function(listId, interestCategoryId, interestId, httpOptions) {
	if (!listId || !interestCategoryId || !interestId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
		return;
	}
	var url = parse(urlsData['patch']['lists.interestCategories.interests.patch'], [listId, interestCategoryId, interestId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.interestCategories.interests.delete = function(listId, interestCategoryId, interestId, httpOptions) {
	if (!listId || !interestCategoryId || !interestId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
		return;
	}
	var url = parse(urlsData['delete']['lists.interestCategories.interests.delete'], [listId, interestCategoryId, interestId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.locations = {};

endpoint.lists.locations.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.locations.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.activity = {};

endpoint.lists.members.activity.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.activity.get'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.activityFeed = {};

endpoint.lists.members.activityFeed.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.activityFeed.get'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.goals = {};

endpoint.lists.members.goals.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.goals.get'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.notes = {};

endpoint.lists.members.notes.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.notes.get'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.notes.post = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['post']['lists.members.notes.post'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.members.notes.get = function(listId, subscriberHash, noteId, httpOptions) {
	if (!listId || !subscriberHash || !noteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.notes.get'], [listId, subscriberHash, noteId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.notes.patch = function(listId, subscriberHash, noteId, httpOptions) {
	if (!listId || !subscriberHash || !noteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
		return;
	}
	var url = parse(urlsData['patch']['lists.members.notes.patch'], [listId, subscriberHash, noteId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.members.notes.delete = function(listId, subscriberHash, noteId, httpOptions) {
	if (!listId || !subscriberHash || !noteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
		return;
	}
	var url = parse(urlsData['delete']['lists.members.notes.delete'], [listId, subscriberHash, noteId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.members.tags = {};

endpoint.lists.members.tags.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.tags.get'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.tags.post = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['post']['lists.members.tags.post'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.members.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['post']['lists.members.post'], [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.members.put = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['put']['lists.members.put'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.lists.members.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['lists.members.get'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.put = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['put']['lists.members.put'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.lists.members.patch = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['patch']['lists.members.patch'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.members.delete = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['delete']['lists.members.delete'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.members.actions = {};

endpoint.lists.members.actions.deletePermanent = {};

endpoint.lists.members.actions.deletePermanent.post = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['post']['lists.members.actions.deletePermanent.post'], [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.mergeFields = {};

endpoint.lists.mergeFields.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.mergeFields.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.mergeFields.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['post']['lists.mergeFields.post'], [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.mergeFields.get = function(listId, mergeId, httpOptions) {
	if (!listId || !mergeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
		return;
	}
	var url = parse(urlsData['get']['lists.mergeFields.get'], [listId, mergeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.mergeFields.patch = function(listId, mergeId, httpOptions) {
	if (!listId || !mergeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
		return;
	}
	var url = parse(urlsData['patch']['lists.mergeFields.patch'], [listId, mergeId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.mergeFields.delete = function(listId, mergeId, httpOptions) {
	if (!listId || !mergeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
		return;
	}
	var url = parse(urlsData['delete']['lists.mergeFields.delete'], [listId, mergeId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.segments = {};

endpoint.lists.segments.members = {};

endpoint.lists.segments.members.get = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse(urlsData['get']['lists.segments.members.get'], [listId, segmentId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.segments.members.post = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse(urlsData['post']['lists.segments.members.post'], [listId, segmentId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.segments.members.delete = function(listId, segmentId, subscriberHash, httpOptions) {
	if (!listId || !segmentId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['delete']['lists.segments.members.delete'], [listId, segmentId, subscriberHash]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.segments.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.segments.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.segments.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['post']['lists.segments.post'], [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.segments.get = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse(urlsData['get']['lists.segments.get'], [listId, segmentId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.segments.delete = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse(urlsData['delete']['lists.segments.delete'], [listId, segmentId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.segments.patch = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse(urlsData['patch']['lists.segments.patch'], [listId, segmentId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.segments.post = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse(urlsData['post']['lists.segments.post'], [listId, segmentId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.signupForms = {};

endpoint.lists.signupForms.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.signupForms.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.signupForms.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['post']['lists.signupForms.post'], [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.tagSearch = {};

endpoint.lists.tagSearch.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.tagSearch.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.webhooks = {};

endpoint.lists.webhooks.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['get']['lists.webhooks.get'], [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.webhooks.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse(urlsData['post']['lists.webhooks.post'], [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.webhooks.get = function(listId, webhookId, httpOptions) {
	if (!listId || !webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
		return;
	}
	var url = parse(urlsData['get']['lists.webhooks.get'], [listId, webhookId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.webhooks.delete = function(listId, webhookId, httpOptions) {
	if (!listId || !webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
		return;
	}
	var url = parse(urlsData['delete']['lists.webhooks.delete'], [listId, webhookId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.webhooks.patch = function(listId, webhookId, httpOptions) {
	if (!listId || !webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
		return;
	}
	var url = parse(urlsData['patch']['lists.webhooks.patch'], [listId, webhookId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ping = {};

endpoint.ping.get = function(httpOptions) {
	var url = parse(urlsData['get']['ping.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting = {};

endpoint.reporting.facebookAds = {};

endpoint.reporting.facebookAds.get = function(httpOptions) {
	var url = parse(urlsData['get']['reporting.facebookAds.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting.facebookAds.get = function(outreachId, httpOptions) {
	if (!outreachId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [outreachId].');
		return;
	}
	var url = parse(urlsData['get']['reporting.facebookAds.get'], [outreachId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting.facebookAds.ecommerceProductActivity = {};

endpoint.reporting.facebookAds.ecommerceProductActivity.get = function(outreachId, httpOptions) {
	if (!outreachId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [outreachId].');
		return;
	}
	var url = parse(urlsData['get']['reporting.facebookAds.ecommerceProductActivity.get'], [outreachId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting.landingPages = {};

endpoint.reporting.landingPages.get = function(httpOptions) {
	var url = parse(urlsData['get']['reporting.landingPages.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting.landingPages.get = function(outreachId, httpOptions) {
	if (!outreachId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [outreachId].');
		return;
	}
	var url = parse(urlsData['get']['reporting.landingPages.get'], [outreachId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports = {};

endpoint.reports.get = function(httpOptions) {
	var url = parse(urlsData['get']['reports.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.abuseReports = {};

endpoint.reports.abuseReports.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.abuseReports.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.abuseReports.get = function(campaignId, reportId, httpOptions) {
	if (!campaignId || !reportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,reportId].');
		return;
	}
	var url = parse(urlsData['get']['reports.abuseReports.get'], [campaignId, reportId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.advice = {};

endpoint.reports.advice.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.advice.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.openDetails = {};

endpoint.reports.openDetails.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.openDetails.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.openDetails.get = function(campaignId, subscriberHash, httpOptions) {
	if (!campaignId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['reports.openDetails.get'], [campaignId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.clickDetails = {};

endpoint.reports.clickDetails.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.clickDetails.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.clickDetails.get = function(campaignId, linkId, httpOptions) {
	if (!campaignId || !linkId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,linkId].');
		return;
	}
	var url = parse(urlsData['get']['reports.clickDetails.get'], [campaignId, linkId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.clickDetails.members = {};

endpoint.reports.clickDetails.members.get = function(campaignId, linkId, httpOptions) {
	if (!campaignId || !linkId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,linkId].');
		return;
	}
	var url = parse(urlsData['get']['reports.clickDetails.members.get'], [campaignId, linkId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.clickDetails.members.get = function(campaignId, linkId, subscriberHash, httpOptions) {
	if (!campaignId || !linkId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,linkId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['reports.clickDetails.members.get'], [campaignId, linkId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.domainPerformance = {};

endpoint.reports.domainPerformance.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.domainPerformance.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.ecommerceProductActivity = {};

endpoint.reports.ecommerceProductActivity.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.ecommerceProductActivity.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.eepurl = {};

endpoint.reports.eepurl.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.eepurl.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.emailActivity = {};

endpoint.reports.emailActivity.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.emailActivity.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.emailActivity.get = function(campaignId, subscriberHash, httpOptions) {
	if (!campaignId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['reports.emailActivity.get'], [campaignId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.locations = {};

endpoint.reports.locations.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.locations.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.sentTo = {};

endpoint.reports.sentTo.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.sentTo.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.sentTo.get = function(campaignId, subscriberHash, httpOptions) {
	if (!campaignId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['reports.sentTo.get'], [campaignId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.subReports = {};

endpoint.reports.subReports.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.subReports.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.unsubscribed = {};

endpoint.reports.unsubscribed.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse(urlsData['get']['reports.unsubscribed.get'], [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.unsubscribed.get = function(campaignId, subscriberHash, httpOptions) {
	if (!campaignId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,subscriberHash].');
		return;
	}
	var url = parse(urlsData['get']['reports.unsubscribed.get'], [campaignId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.searchCampaigns = {};

endpoint.searchCampaigns.get = function(httpOptions) {
	var url = parse(urlsData['get']['searchCampaigns.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.searchMembers = {};

endpoint.searchMembers.get = function(httpOptions) {
	var url = parse(urlsData['get']['searchMembers.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templateFolders = {};

endpoint.templateFolders.get = function(httpOptions) {
	var url = parse(urlsData['get']['templateFolders.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templateFolders.post = function(httpOptions) {
	var url = parse(urlsData['post']['templateFolders.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.templateFolders.get = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['get']['templateFolders.get'], [folderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templateFolders.patch = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['patch']['templateFolders.patch'], [folderId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.templateFolders.delete = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse(urlsData['delete']['templateFolders.delete'], [folderId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.templates = {};

endpoint.templates.get = function(httpOptions) {
	var url = parse(urlsData['get']['templates.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templates.post = function(httpOptions) {
	var url = parse(urlsData['post']['templates.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.templates.get = function(templateId, httpOptions) {
	if (!templateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
		return;
	}
	var url = parse(urlsData['get']['templates.get'], [templateId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templates.patch = function(templateId, httpOptions) {
	if (!templateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
		return;
	}
	var url = parse(urlsData['patch']['templates.patch'], [templateId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.templates.delete = function(templateId, httpOptions) {
	if (!templateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
		return;
	}
	var url = parse(urlsData['delete']['templates.delete'], [templateId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.templates.defaultContent = {};

endpoint.templates.defaultContent.get = function(templateId, httpOptions) {
	if (!templateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
		return;
	}
	var url = parse(urlsData['get']['templates.defaultContent.get'], [templateId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.verifiedDomains = {};

endpoint.verifiedDomains.get = function(httpOptions) {
	var url = parse(urlsData['get']['verifiedDomains.get']);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.verifiedDomains.post = function(httpOptions) {
	var url = parse(urlsData['post']['verifiedDomains.post']);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.verifiedDomains.get = function(domainName, httpOptions) {
	if (!domainName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [domainName].');
		return;
	}
	var url = parse(urlsData['get']['verifiedDomains.get'], [domainName]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.verifiedDomains.delete = function(domainName, httpOptions) {
	if (!domainName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [domainName].');
		return;
	}
	var url = parse(urlsData['delete']['verifiedDomains.delete'], [domainName]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.verifiedDomains.actions = {};

endpoint.verifiedDomains.actions.verify = {};

endpoint.verifiedDomains.actions.verify.post = function(domainName, httpOptions) {
	if (!domainName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [domainName].');
		return;
	}
	var url = parse(urlsData['post']['verifiedDomains.actions.verify.post'], [domainName]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
