//////////////////////////////////////////////////////////////////////////
//                                                                      //
//  This file is generated with mailchimp/gen/gen-mailchimp-helpers.js  //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


var urlsData = {
	"get": {
		"authorizedApps": {
			"0": "/authorized-apps",
			"1": "/authorized-apps/:app_id"
		},
		"automations": {
			"0": "/automations",
			"1": "/automations/:workflow_id"
		},
		"automations.emails": {
			"1": "/automations/:workflow_id/emails",
			"2": "/automations/:workflow_id/emails/:workflow_email_id"
		},
		"automations.emails.queue": {
			"2": "/automations/:workflow_id/emails/:workflow_email_id/queue",
			"3": "/automations/:workflow_id/emails/:workflow_email_id/queue/:subscriber_hash"
		},
		"automations.removedSubscribers": {
			"1": "/automations/:workflow_id/removed-subscribers"
		},
		"batches": {
			"0": "/batches",
			"1": "/batches/:batch_id"
		},
		"batchWebhooks": {
			"0": "/batch-webhooks",
			"1": "/batch-webhooks/:batch_webhook_id"
		},
		"campaignFolders": {
			"0": "/campaign-folders",
			"1": "/campaign-folders/:folder_id"
		},
		"campaigns": {
			"0": "/campaigns",
			"1": "/campaigns/:campaign_id"
		},
		"campaigns.content": {
			"1": "/campaigns/:campaign_id/content"
		},
		"campaigns.feedback": {
			"1": "/campaigns/:campaign_id/feedback",
			"2": "/campaigns/:campaign_id/feedback/:feedback_id"
		},
		"campaigns.sendChecklist": {
			"1": "/campaigns/:campaign_id/send-checklist"
		},
		"conversations": {
			"0": "/conversations",
			"1": "/conversations/:conversation_id"
		},
		"conversations.messages": {
			"1": "/conversations/:conversation_id/messages",
			"2": "/conversations/:conversation_id/messages/:message_id"
		},
		"ecommerce.stores": {
			"0": "/ecommerce/stores",
			"1": "/ecommerce/stores/:store_id"
		},
		"ecommerce.stores.carts.lines": {
			"2": "/ecommerce/stores/:store_id/carts/:cart_id/lines",
			"3": "/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id"
		},
		"ecommerce.stores.customers": {
			"1": "/ecommerce/stores/:store_id/customers",
			"2": "/ecommerce/stores/:store_id/customers/:customer_id"
		},
		"ecommerce.stores.orders": {
			"1": "/ecommerce/stores/:store_id/orders",
			"2": "/ecommerce/stores/:store_id/orders/:order_id"
		},
		"ecommerce.stores.orders.lines": {
			"2": "/ecommerce/stores/:store_id/orders/:order_id/lines",
			"3": "/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id"
		},
		"ecommerce.stores.products": {
			"1": "/ecommerce/stores/:store_id/products",
			"2": "/ecommerce/stores/:store_id/products/:product_id"
		},
		"ecommerce.stores.products.images": {
			"2": "/ecommerce/stores/:store_id/products/:product_id/images",
			"3": "/ecommerce/stores/:store_id/products/:product_id/images/:image_id"
		},
		"ecommerce.stores.products.variants": {
			"2": "/ecommerce/stores/:store_id/products/:product_id/variants",
			"3": "/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id"
		},
		"fileManager.files": {
			"0": "/file-manager/files",
			"1": "/file-manager/files/:file_id"
		},
		"fileManager.folders": {
			"0": "/file-manager/folders",
			"1": "/file-manager/folders/:folder_id"
		},
		"lists": {
			"0": "/lists",
			"1": "/lists/:list_id"
		},
		"lists.abuseReports": {
			"1": "/lists/:list_id/abuse-reports",
			"2": "/lists/:list_id/abuse-reports/:report_id"
		},
		"lists.activity": {
			"1": "/lists/:list_id/activity"
		},
		"lists.clients": {
			"1": "/lists/:list_id/clients"
		},
		"lists.growthHistory": {
			"1": "/lists/:list_id/growth-history",
			"2": "/lists/:list_id/growth-history/:month"
		},
		"lists.interestCategories.interests": {
			"2": "/lists/:list_id/interest-categories/:interest_category_id/interests",
			"3": "/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id"
		},
		"lists.locations": {
			"1": "/lists/:list_id/locations"
		},
		"lists.members": {
			"1": "/lists/:list_id/members",
			"2": "/lists/:list_id/members/:subscriber_hash"
		},
		"lists.members.activity": {
			"2": "/lists/:list_id/members/:subscriber_hash/activity"
		},
		"lists.members.goals": {
			"2": "/lists/:list_id/members/:subscriber_hash/goals"
		},
		"lists.members.notes": {
			"2": "/lists/:list_id/members/:subscriber_hash/notes",
			"3": "/lists/:list_id/members/:subscriber_hash/notes/:note_id"
		},
		"lists.mergeFields": {
			"1": "/lists/:list_id/merge-fields",
			"2": "/lists/:list_id/merge-fields/:merge_id"
		},
		"lists.segments": {
			"1": "/lists/:list_id/segments",
			"2": "/lists/:list_id/segments/:segment_id"
		},
		"lists.segments.members": {
			"2": "/lists/:list_id/segments/:segment_id/members"
		},
		"lists.signupForms": {
			"1": "/lists/:list_id/signup-forms"
		},
		"lists.webhooks": {
			"1": "/lists/:list_id/webhooks",
			"2": "/lists/:list_id/webhooks/:webhook_id"
		},
		"reports": {
			"0": "/reports",
			"1": "/reports/:campaign_id"
		},
		"reports.abuseReports": {
			"1": "/reports/:campaign_id/abuse-reports",
			"2": "/reports/:campaign_id/abuse-reports/:report_id"
		},
		"reports.advice": {
			"1": "/reports/:campaign_id/advice"
		},
		"reports.clickDetails": {
			"1": "/reports/:campaign_id/click-details",
			"2": "/reports/:campaign_id/click-details/:link_id"
		},
		"reports.clickDetails.members": {
			"2": "/reports/:campaign_id/click-details/:link_id/members",
			"3": "/reports/:campaign_id/click-details/:link_id/members/:subscriber_hash"
		},
		"reports.domainPerformance": {
			"1": "/reports/:campaign_id/domain-performance"
		},
		"reports.eepurl": {
			"1": "/reports/:campaign_id/eepurl"
		},
		"reports.emailActivity": {
			"1": "/reports/:campaign_id/email-activity",
			"2": "/reports/:campaign_id/email-activity/:subscriber_hash"
		},
		"reports.locations": {
			"1": "/reports/:campaign_id/locations"
		},
		"reports.sentTo": {
			"1": "/reports/:campaign_id/sent-to",
			"2": "/reports/:campaign_id/sent-to/:subscriber_hash"
		},
		"reports.subReports": {
			"1": "/reports/:campaign_id/sub-reports"
		},
		"reports.unsubscribed": {
			"1": "/reports/:campaign_id/unsubscribed",
			"2": "/reports/:campaign_id/unsubscribed/:subscriber_hash"
		},
		"searchCampaigns": {
			"0": "/search-campaigns"
		},
		"searchMembers": {
			"0": "/search-members"
		},
		"templateFolders": {
			"0": "/template-folders",
			"1": "/template-folders/:folder_id"
		},
		"templates": {
			"0": "/templates",
			"1": "/templates/:template_id"
		},
		"templates.defaultContent": {
			"1": "/templates/:template_id/default-content"
		}
	},
	"post": {
		"authorizedApps": {
			"0": "/authorized-apps"
		},
		"automations.actions.pauseAllEmails": {
			"1": "/automations/:workflow_id/actions/pause-all-emails"
		},
		"automations.actions.startAllEmails": {
			"1": "/automations/:workflow_id/actions/start-all-emails"
		},
		"automations.emails.actions.pause": {
			"2": "/automations/:workflow_id/emails/:workflow_email_id/actions/pause"
		},
		"automations.emails.actions.start": {
			"2": "/automations/:workflow_id/emails/:workflow_email_id/actions/start"
		},
		"automations.emails.queue": {
			"2": "/automations/:workflow_id/emails/:workflow_email_id/queue"
		},
		"automations.removedSubscribers": {
			"1": "/automations/:workflow_id/removed-subscribers"
		},
		"batches": {
			"0": "/batches"
		},
		"batchWebhooks": {
			"0": "/batch-webhooks"
		},
		"campaignFolders": {
			"0": "/campaign-folders"
		},
		"campaigns": {
			"0": "/campaigns"
		},
		"campaigns.actions.cancelSend": {
			"1": "/campaigns/:campaign_id/actions/cancel-send"
		},
		"campaigns.actions.pause": {
			"1": "/campaigns/:campaign_id/actions/pause"
		},
		"campaigns.actions.replicate": {
			"1": "/campaigns/:campaign_id/actions/replicate"
		},
		"campaigns.actions.resume": {
			"1": "/campaigns/:campaign_id/actions/resume"
		},
		"campaigns.actions.schedule": {
			"1": "/campaigns/:campaign_id/actions/schedule"
		},
		"campaigns.actions.send": {
			"1": "/campaigns/:campaign_id/actions/send"
		},
		"campaigns.actions.test": {
			"1": "/campaigns/:campaign_id/actions/test"
		},
		"campaigns.actions.unschedule": {
			"1": "/campaigns/:campaign_id/actions/unschedule"
		},
		"campaigns.feedback": {
			"1": "/campaigns/:campaign_id/feedback"
		},
		"conversations.messages": {
			"1": "/conversations/:conversation_id/messages"
		},
		"ecommerce.stores": {
			"0": "/ecommerce/stores"
		},
		"ecommerce.stores.carts": {
			"1": "/ecommerce/stores/:store_id/carts",
			"2": "/ecommerce/stores/:store_id/carts/:cart_id"
		},
		"ecommerce.stores.carts.lines": {
			"2": "/ecommerce/stores/:store_id/carts/:cart_id/lines"
		},
		"ecommerce.stores.customers": {
			"1": "/ecommerce/stores/:store_id/customers"
		},
		"ecommerce.stores.orders": {
			"1": "/ecommerce/stores/:store_id/orders"
		},
		"ecommerce.stores.products": {
			"1": "/ecommerce/stores/:store_id/products"
		},
		"ecommerce.stores.products.images": {
			"2": "/ecommerce/stores/:store_id/products/:product_id/images"
		},
		"ecommerce.stores.products.variants": {
			"2": "/ecommerce/stores/:store_id/products/:product_id/variants"
		},
		"fileManager.files": {
			"0": "/file-manager/files"
		},
		"fileManager.folders": {
			"0": "/file-manager/folders"
		},
		"lists": {
			"0": "/lists",
			"1": "/lists/:list_id"
		},
		"lists.interestCategories": {
			"1": "/lists/:list_id/interest-categories",
			"2": "/lists/:list_id/interest-categories/:interest_category_id"
		},
		"lists.interestCategories.interests": {
			"2": "/lists/:list_id/interest-categories/:interest_category_id/interests"
		},
		"lists.members": {
			"1": "/lists/:list_id/members"
		},
		"lists.members.notes": {
			"2": "/lists/:list_id/members/:subscriber_hash/notes"
		},
		"lists.mergeFields": {
			"1": "/lists/:list_id/merge-fields"
		},
		"lists.segments": {
			"1": "/lists/:list_id/segments",
			"2": "/lists/:list_id/segments/:segment_id"
		},
		"lists.segments.members": {
			"2": "/lists/:list_id/segments/:segment_id/members"
		},
		"lists.signupForms": {
			"1": "/lists/:list_id/signup-forms"
		},
		"lists.webhooks": {
			"1": "/lists/:list_id/webhooks"
		},
		"templateFolders": {
			"0": "/template-folders"
		},
		"templates": {
			"0": "/templates"
		}
	},
	"put": {
		"campaigns.content": {
			"1": "/campaigns/:campaign_id/content"
		},
		"ecommerce.stores.customers": {
			"2": "/ecommerce/stores/:store_id/customers/:customer_id"
		},
		"ecommerce.stores.products.variants": {
			"3": "/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id"
		},
		"lists.members": {
			"2": "/lists/:list_id/members/:subscriber_hash"
		}
	},
	"patch": {
		"batchWebhooks": {
			"1": "/batch-webhooks/:batch_webhook_id"
		},
		"campaignFolders": {
			"1": "/campaign-folders/:folder_id"
		},
		"campaigns": {
			"1": "/campaigns/:campaign_id"
		},
		"campaigns.feedback": {
			"2": "/campaigns/:campaign_id/feedback/:feedback_id"
		},
		"ecommerce.stores": {
			"1": "/ecommerce/stores/:store_id"
		},
		"ecommerce.stores.carts": {
			"2": "/ecommerce/stores/:store_id/carts/:cart_id"
		},
		"ecommerce.stores.carts.lines": {
			"3": "/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id"
		},
		"ecommerce.stores.customers": {
			"2": "/ecommerce/stores/:store_id/customers/:customer_id"
		},
		"ecommerce.stores.orders": {
			"2": "/ecommerce/stores/:store_id/orders/:order_id"
		},
		"ecommerce.stores.orders.lines": {
			"3": "/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id"
		},
		"ecommerce.stores.products": {
			"2": "/ecommerce/stores/:store_id/products/:product_id"
		},
		"ecommerce.stores.products.images": {
			"3": "/ecommerce/stores/:store_id/products/:product_id/images/:image_id"
		},
		"ecommerce.stores.products.variants": {
			"3": "/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id"
		},
		"fileManager.files": {
			"1": "/file-manager/files/:file_id"
		},
		"fileManager.folders": {
			"1": "/file-manager/folders/:folder_id"
		},
		"lists": {
			"1": "/lists/:list_id"
		},
		"lists.interestCategories": {
			"2": "/lists/:list_id/interest-categories/:interest_category_id"
		},
		"lists.interestCategories.interests": {
			"3": "/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id"
		},
		"lists.members": {
			"2": "/lists/:list_id/members/:subscriber_hash"
		},
		"lists.members.notes": {
			"3": "/lists/:list_id/members/:subscriber_hash/notes/:note_id"
		},
		"lists.mergeFields": {
			"2": "/lists/:list_id/merge-fields/:merge_id"
		},
		"lists.segments": {
			"2": "/lists/:list_id/segments/:segment_id"
		},
		"lists.webhooks": {
			"2": "/lists/:list_id/webhooks/:webhook_id"
		},
		"templateFolders": {
			"1": "/template-folders/:folder_id"
		},
		"templates": {
			"1": "/templates/:template_id"
		}
	},
	"delete": {
		"automations.emails": {
			"2": "/automations/:workflow_id/emails/:workflow_email_id"
		},
		"batches": {
			"1": "/batches/:batch_id"
		},
		"batchWebhooks": {
			"1": "/batch-webhooks/:batch_webhook_id"
		},
		"campaignFolders": {
			"1": "/campaign-folders/:folder_id"
		},
		"campaigns": {
			"1": "/campaigns/:campaign_id"
		},
		"campaigns.feedback": {
			"2": "/campaigns/:campaign_id/feedback/:feedback_id"
		},
		"ecommerce.stores": {
			"1": "/ecommerce/stores/:store_id"
		},
		"ecommerce.stores.carts": {
			"2": "/ecommerce/stores/:store_id/carts/:cart_id"
		},
		"ecommerce.stores.carts.lines": {
			"3": "/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id"
		},
		"ecommerce.stores.customers": {
			"2": "/ecommerce/stores/:store_id/customers/:customer_id"
		},
		"ecommerce.stores.orders": {
			"2": "/ecommerce/stores/:store_id/orders/:order_id"
		},
		"ecommerce.stores.orders.lines": {
			"3": "/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id"
		},
		"ecommerce.stores.products": {
			"2": "/ecommerce/stores/:store_id/products/:product_id"
		},
		"ecommerce.stores.products.images": {
			"3": "/ecommerce/stores/:store_id/products/:product_id/images/:image_id"
		},
		"ecommerce.stores.products.variants": {
			"3": "/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id"
		},
		"fileManager.files": {
			"1": "/file-manager/files/:file_id"
		},
		"fileManager.folders": {
			"1": "/file-manager/folders/:folder_id"
		},
		"lists": {
			"1": "/lists/:list_id"
		},
		"lists.interestCategories": {
			"2": "/lists/:list_id/interest-categories/:interest_category_id"
		},
		"lists.interestCategories.interests": {
			"3": "/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id"
		},
		"lists.members": {
			"2": "/lists/:list_id/members/:subscriber_hash"
		},
		"lists.members.notes": {
			"3": "/lists/:list_id/members/:subscriber_hash/notes/:note_id"
		},
		"lists.mergeFields": {
			"2": "/lists/:list_id/merge-fields/:merge_id"
		},
		"lists.segments": {
			"2": "/lists/:list_id/segments/:segment_id"
		},
		"lists.segments.members": {
			"3": "/lists/:list_id/segments/:segment_id/members/:subscriber_hash"
		},
		"lists.webhooks": {
			"2": "/lists/:list_id/webhooks/:webhook_id"
		},
		"templateFolders": {
			"1": "/template-folders/:folder_id"
		},
		"templates": {
			"1": "/templates/:template_id"
		}
	}
};

endpoint.authorizedApps = {};
endpoint.authorizedApps.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['authorizedApps'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.automations = {};
endpoint.automations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['automations'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.automations.emails = {};
endpoint.automations.emails.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['automations.emails'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.automations.emails.queue = {};
endpoint.automations.emails.queue.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['automations.emails.queue'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.automations.removedSubscribers = {};
endpoint.automations.removedSubscribers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['automations.removedSubscribers'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.batches = {};
endpoint.batches.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['batches'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.batchWebhooks = {};
endpoint.batchWebhooks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['batchWebhooks'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.campaignFolders = {};
endpoint.campaignFolders.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['campaignFolders'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.campaigns = {};
endpoint.campaigns.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['campaigns'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.campaigns.content = {};
endpoint.campaigns.content.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['campaigns.content'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.campaigns.feedback = {};
endpoint.campaigns.feedback.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['campaigns.feedback'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.campaigns.sendChecklist = {};
endpoint.campaigns.sendChecklist.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['campaigns.sendChecklist'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.conversations = {};
endpoint.conversations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['conversations'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.conversations.messages = {};
endpoint.conversations.messages.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['conversations.messages'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ecommerce = {};
endpoint.ecommerce.stores = {};
endpoint.ecommerce.stores.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ecommerce.stores'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ecommerce.stores.carts = {};
endpoint.ecommerce.stores.carts.lines = {};
endpoint.ecommerce.stores.carts.lines.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ecommerce.stores.carts.lines'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ecommerce.stores.customers = {};
endpoint.ecommerce.stores.customers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ecommerce.stores.customers'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ecommerce.stores.orders = {};
endpoint.ecommerce.stores.orders.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ecommerce.stores.orders'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ecommerce.stores.orders.lines = {};
endpoint.ecommerce.stores.orders.lines.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ecommerce.stores.orders.lines'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ecommerce.stores.products = {};
endpoint.ecommerce.stores.products.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ecommerce.stores.products'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ecommerce.stores.products.images = {};
endpoint.ecommerce.stores.products.images.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ecommerce.stores.products.images'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.ecommerce.stores.products.variants = {};
endpoint.ecommerce.stores.products.variants.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['ecommerce.stores.products.variants'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.fileManager = {};
endpoint.fileManager.files = {};
endpoint.fileManager.files.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['fileManager.files'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.fileManager.folders = {};
endpoint.fileManager.folders.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['fileManager.folders'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists = {};
endpoint.lists.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.abuseReports = {};
endpoint.lists.abuseReports.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.abuseReports'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.activity = {};
endpoint.lists.activity.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.activity'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.clients = {};
endpoint.lists.clients.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.clients'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.growthHistory = {};
endpoint.lists.growthHistory.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.growthHistory'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.interestCategories = {};
endpoint.lists.interestCategories.interests = {};
endpoint.lists.interestCategories.interests.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.interestCategories.interests'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.locations = {};
endpoint.lists.locations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.locations'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.members = {};
endpoint.lists.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.members'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.members.activity = {};
endpoint.lists.members.activity.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.members.activity'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.members.goals = {};
endpoint.lists.members.goals.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.members.goals'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.members.notes = {};
endpoint.lists.members.notes.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.members.notes'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.mergeFields = {};
endpoint.lists.mergeFields.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.mergeFields'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.segments = {};
endpoint.lists.segments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.segments'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.segments.members = {};
endpoint.lists.segments.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.segments.members'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.signupForms = {};
endpoint.lists.signupForms.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.signupForms'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.lists.webhooks = {};
endpoint.lists.webhooks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['lists.webhooks'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports = {};
endpoint.reports.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.abuseReports = {};
endpoint.reports.abuseReports.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.abuseReports'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.advice = {};
endpoint.reports.advice.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.advice'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.clickDetails = {};
endpoint.reports.clickDetails.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.clickDetails'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.clickDetails.members = {};
endpoint.reports.clickDetails.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.clickDetails.members'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.domainPerformance = {};
endpoint.reports.domainPerformance.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.domainPerformance'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.eepurl = {};
endpoint.reports.eepurl.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.eepurl'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.emailActivity = {};
endpoint.reports.emailActivity.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.emailActivity'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.locations = {};
endpoint.reports.locations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.locations'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.sentTo = {};
endpoint.reports.sentTo.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.sentTo'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.subReports = {};
endpoint.reports.subReports.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.subReports'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports.unsubscribed = {};
endpoint.reports.unsubscribed.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['reports.unsubscribed'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.searchCampaigns = {};
endpoint.searchCampaigns.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['searchCampaigns'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.searchMembers = {};
endpoint.searchMembers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['searchMembers'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.templateFolders = {};
endpoint.templateFolders.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['templateFolders'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.templates = {};
endpoint.templates.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['templates'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.templates.defaultContent = {};
endpoint.templates.defaultContent.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['templates.defaultContent'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.authorizedApps.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for authorizedApps.post');
	}
	var url = parse(urlsData['post']['authorizedApps'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.automations.actions = {};
endpoint.automations.actions.pauseAllEmails = {};
endpoint.automations.actions.pauseAllEmails.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for automations.actions.pauseAllEmails.post');
	}
	var url = parse(urlsData['post']['automations.actions.pauseAllEmails'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.automations.actions.startAllEmails = {};
endpoint.automations.actions.startAllEmails.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for automations.actions.startAllEmails.post');
	}
	var url = parse(urlsData['post']['automations.actions.startAllEmails'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.automations.emails.actions = {};
endpoint.automations.emails.actions.pause = {};
endpoint.automations.emails.actions.pause.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for automations.emails.actions.pause.post');
	}
	var url = parse(urlsData['post']['automations.emails.actions.pause'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.automations.emails.actions.start = {};
endpoint.automations.emails.actions.start.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for automations.emails.actions.start.post');
	}
	var url = parse(urlsData['post']['automations.emails.actions.start'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.automations.emails.queue.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for automations.emails.queue.post');
	}
	var url = parse(urlsData['post']['automations.emails.queue'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.automations.removedSubscribers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for automations.removedSubscribers.post');
	}
	var url = parse(urlsData['post']['automations.removedSubscribers'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.batches.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for batches.post');
	}
	var url = parse(urlsData['post']['batches'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.batchWebhooks.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for batchWebhooks.post');
	}
	var url = parse(urlsData['post']['batchWebhooks'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaignFolders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaignFolders.post');
	}
	var url = parse(urlsData['post']['campaignFolders'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.post');
	}
	var url = parse(urlsData['post']['campaigns'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.actions = {};
endpoint.campaigns.actions.cancelSend = {};
endpoint.campaigns.actions.cancelSend.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.actions.cancelSend.post');
	}
	var url = parse(urlsData['post']['campaigns.actions.cancelSend'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.actions.pause = {};
endpoint.campaigns.actions.pause.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.actions.pause.post');
	}
	var url = parse(urlsData['post']['campaigns.actions.pause'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.actions.replicate = {};
endpoint.campaigns.actions.replicate.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.actions.replicate.post');
	}
	var url = parse(urlsData['post']['campaigns.actions.replicate'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.actions.resume = {};
endpoint.campaigns.actions.resume.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.actions.resume.post');
	}
	var url = parse(urlsData['post']['campaigns.actions.resume'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.actions.schedule = {};
endpoint.campaigns.actions.schedule.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.actions.schedule.post');
	}
	var url = parse(urlsData['post']['campaigns.actions.schedule'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.actions.send = {};
endpoint.campaigns.actions.send.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.actions.send.post');
	}
	var url = parse(urlsData['post']['campaigns.actions.send'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.actions.test = {};
endpoint.campaigns.actions.test.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.actions.test.post');
	}
	var url = parse(urlsData['post']['campaigns.actions.test'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.actions.unschedule = {};
endpoint.campaigns.actions.unschedule.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.actions.unschedule.post');
	}
	var url = parse(urlsData['post']['campaigns.actions.unschedule'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.feedback.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.feedback.post');
	}
	var url = parse(urlsData['post']['campaigns.feedback'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.conversations.messages.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for conversations.messages.post');
	}
	var url = parse(urlsData['post']['conversations.messages'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.post');
	}
	var url = parse(urlsData['post']['ecommerce.stores'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.carts.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.carts.post');
	}
	var url = parse(urlsData['post']['ecommerce.stores.carts'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.carts.lines.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.carts.lines.post');
	}
	var url = parse(urlsData['post']['ecommerce.stores.carts.lines'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.customers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.customers.post');
	}
	var url = parse(urlsData['post']['ecommerce.stores.customers'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.orders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.orders.post');
	}
	var url = parse(urlsData['post']['ecommerce.stores.orders'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.products.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.products.post');
	}
	var url = parse(urlsData['post']['ecommerce.stores.products'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.products.images.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.products.images.post');
	}
	var url = parse(urlsData['post']['ecommerce.stores.products.images'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.products.variants.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.products.variants.post');
	}
	var url = parse(urlsData['post']['ecommerce.stores.products.variants'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.fileManager.files.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for fileManager.files.post');
	}
	var url = parse(urlsData['post']['fileManager.files'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.fileManager.folders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for fileManager.folders.post');
	}
	var url = parse(urlsData['post']['fileManager.folders'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.post');
	}
	var url = parse(urlsData['post']['lists'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.interestCategories.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.interestCategories.post');
	}
	var url = parse(urlsData['post']['lists.interestCategories'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.interestCategories.interests.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.interestCategories.interests.post');
	}
	var url = parse(urlsData['post']['lists.interestCategories.interests'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.members.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.members.post');
	}
	var url = parse(urlsData['post']['lists.members'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.members.notes.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.members.notes.post');
	}
	var url = parse(urlsData['post']['lists.members.notes'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.mergeFields.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.mergeFields.post');
	}
	var url = parse(urlsData['post']['lists.mergeFields'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.segments.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.segments.post');
	}
	var url = parse(urlsData['post']['lists.segments'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.segments.members.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.segments.members.post');
	}
	var url = parse(urlsData['post']['lists.segments.members'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.signupForms.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.signupForms.post');
	}
	var url = parse(urlsData['post']['lists.signupForms'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.lists.webhooks.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.webhooks.post');
	}
	var url = parse(urlsData['post']['lists.webhooks'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.templateFolders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for templateFolders.post');
	}
	var url = parse(urlsData['post']['templateFolders'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.templates.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for templates.post');
	}
	var url = parse(urlsData['post']['templates'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.content.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.content.put');
	}
	var url = parse(urlsData['put']['campaigns.content'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.customers.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.customers.put');
	}
	var url = parse(urlsData['put']['ecommerce.stores.customers'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.products.variants.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.products.variants.put');
	}
	var url = parse(urlsData['put']['ecommerce.stores.products.variants'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.lists.members.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.members.put');
	}
	var url = parse(urlsData['put']['lists.members'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PUT from: ' + url);
	return endpoint.put(url, arguments[arguments.length - 1]);
};

endpoint.batchWebhooks.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for batchWebhooks.patch');
	}
	var url = parse(urlsData['patch']['batchWebhooks'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.campaignFolders.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaignFolders.patch');
	}
	var url = parse(urlsData['patch']['campaignFolders'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.patch');
	}
	var url = parse(urlsData['patch']['campaigns'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.campaigns.feedback.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for campaigns.feedback.patch');
	}
	var url = parse(urlsData['patch']['campaigns.feedback'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.carts.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.carts.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores.carts'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.carts.lines.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.carts.lines.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores.carts.lines'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.customers.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.customers.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores.customers'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.orders.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.orders.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores.orders'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.orders.lines.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.orders.lines.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores.orders.lines'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.products.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.products.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores.products'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.products.images.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.products.images.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores.products.images'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.ecommerce.stores.products.variants.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for ecommerce.stores.products.variants.patch');
	}
	var url = parse(urlsData['patch']['ecommerce.stores.products.variants'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.fileManager.files.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for fileManager.files.patch');
	}
	var url = parse(urlsData['patch']['fileManager.files'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.fileManager.folders.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for fileManager.folders.patch');
	}
	var url = parse(urlsData['patch']['fileManager.folders'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.lists.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.patch');
	}
	var url = parse(urlsData['patch']['lists'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.lists.interestCategories.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.interestCategories.patch');
	}
	var url = parse(urlsData['patch']['lists.interestCategories'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.lists.interestCategories.interests.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.interestCategories.interests.patch');
	}
	var url = parse(urlsData['patch']['lists.interestCategories.interests'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.lists.members.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.members.patch');
	}
	var url = parse(urlsData['patch']['lists.members'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.lists.members.notes.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.members.notes.patch');
	}
	var url = parse(urlsData['patch']['lists.members.notes'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.lists.mergeFields.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.mergeFields.patch');
	}
	var url = parse(urlsData['patch']['lists.mergeFields'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.lists.segments.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.segments.patch');
	}
	var url = parse(urlsData['patch']['lists.segments'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.lists.webhooks.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for lists.webhooks.patch');
	}
	var url = parse(urlsData['patch']['lists.webhooks'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.templateFolders.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for templateFolders.patch');
	}
	var url = parse(urlsData['patch']['templateFolders'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.templates.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for templates.patch');
	}
	var url = parse(urlsData['patch']['templates'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, arguments[arguments.length - 1]);
};

endpoint.automations.emails.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['automations.emails'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.batches.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['batches'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.batchWebhooks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['batchWebhooks'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.campaignFolders.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['campaignFolders'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.campaigns.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['campaigns'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.campaigns.feedback.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['campaigns.feedback'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.carts.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores.carts'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.carts.lines.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores.carts.lines'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.customers.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores.customers'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.orders.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores.orders'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.orders.lines.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores.orders.lines'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.products.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores.products'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.products.images.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores.products.images'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.ecommerce.stores.products.variants.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['ecommerce.stores.products.variants'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.fileManager.files.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['fileManager.files'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.fileManager.folders.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['fileManager.folders'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.interestCategories.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists.interestCategories'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.interestCategories.interests.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists.interestCategories.interests'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.members.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists.members'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.members.notes.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists.members.notes'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.mergeFields.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists.mergeFields'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.segments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists.segments'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.segments.members.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists.segments.members'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.lists.webhooks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['lists.webhooks'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.templateFolders.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['templateFolders'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.templates.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['delete']['templates'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Mailchimp] DELETE from: ' + url);
	return endpoint.delete(url);
};

endpoint.fileManager.files.post = function (params) {
    if (!params) {
        throw 'wrong numbers of arguments for fileManager.files.post';
    }
    var fileId = params.file_id;
    var url = '/file-manager/files';
    sys.logs.debug('[Mailchimp] POST from: ' + url);
    if(fileId){
        var res = endpoint._getResourceById(params);
        params.file_data = res.fileData;
        if (!res.fileData) {
            throw 'File with the given ID can not be fetch from the app';
        }
    }

    var options = checkHttpOptions(url, params);
    return endpoint._post(options);

};


/////////////////////////////
//  Private helpers
/////////////////////////////

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

