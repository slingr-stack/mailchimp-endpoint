 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var parse = function parse(str) {
    try {
        if (arguments.length > 1) {
            let args = arguments[1], i = 0;
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
};

endpoint.apiRoot = function(httpOptions) {
	var url = parse('/');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.accountExports = {};

endpoint.accountExports.get = function(httpOptions) {
	var url = parse('/account-exports');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.accountExports.post = function(httpOptions) {
	var url = parse('/account-exports');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.accountExports.post = function(exportId, httpOptions) {
	if (!exportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [exportId].');
		return;
	}
	var url = parse('/account-exports/:export_id', [exportId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.authorizedApps = {};

endpoint.authorizedApps.get = function(httpOptions) {
	var url = parse('/authorized-apps');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.authorizedApps.get = function(appId, httpOptions) {
	if (!appId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [appId].');
		return;
	}
	var url = parse('/authorized-apps/:app_id', [appId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations = {};

endpoint.automations.get = function(httpOptions) {
	var url = parse('/automations');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.post = function(httpOptions) {
	var url = parse('/automations');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.get = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse('/automations/:workflow_id', [workflowId]);
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
	var url = parse('/automations/:workflow_id/actions/archive', [workflowId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.actions.pauseAllEmails = {};

endpoint.automations.actions.pauseAllEmails.post = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse('/automations/:workflow_id/actions/pause-all-emails', [workflowId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.actions.startAllEmails = {};

endpoint.automations.actions.startAllEmails.post = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse('/automations/:workflow_id/actions/start-all-emails', [workflowId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.emails = {};

endpoint.automations.emails.get = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse('/automations/:workflow_id/emails', [workflowId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.emails.get = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse('/automations/:workflow_id/emails/:workflow_email_id', [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.emails.patch = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse('/automations/:workflow_id/emails/:workflow_email_id', [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.automations.emails.delete = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse('/automations/:workflow_id/emails/:workflow_email_id', [workflowId, workflowEmailId]);
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
	var url = parse('/automations/:workflow_id/emails/:workflow_email_id/actions/pause', [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.emails.actions.start = {};

endpoint.automations.emails.actions.start.post = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse('/automations/:workflow_id/emails/:workflow_email_id/actions/start', [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.emails.queue = {};

endpoint.automations.emails.queue.get = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue', [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.emails.queue.post = function(workflowId, workflowEmailId, httpOptions) {
	if (!workflowId || !workflowEmailId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
		return;
	}
	var url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue', [workflowId, workflowEmailId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.emails.queue.get = function(workflowId, workflowEmailId, subscriberHash, httpOptions) {
	if (!workflowId || !workflowEmailId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId,subscriberHash].');
		return;
	}
	var url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue/:subscriber_hash', [workflowId, workflowEmailId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.removedSubscribers = {};

endpoint.automations.removedSubscribers.get = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse('/automations/:workflow_id/removed-subscribers', [workflowId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.automations.removedSubscribers.post = function(workflowId, httpOptions) {
	if (!workflowId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
		return;
	}
	var url = parse('/automations/:workflow_id/removed-subscribers', [workflowId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.automations.removedSubscribers.get = function(workflowId, subscriberHash, httpOptions) {
	if (!workflowId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,subscriberHash].');
		return;
	}
	var url = parse('/automations/:workflow_id/removed-subscribers/:subscriber_hash', [workflowId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batches = {};

endpoint.batches.get = function(httpOptions) {
	var url = parse('/batches');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batches.post = function(httpOptions) {
	var url = parse('/batches');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.batches.get = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/batches/:batch_id', [batchId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batches.delete = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/batches/:batch_id', [batchId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.batchWebhooks = {};

endpoint.batchWebhooks.get = function(httpOptions) {
	var url = parse('/batch-webhooks');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batchWebhooks.post = function(httpOptions) {
	var url = parse('/batch-webhooks');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.batchWebhooks.get = function(batchWebhookId, httpOptions) {
	if (!batchWebhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
		return;
	}
	var url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.batchWebhooks.patch = function(batchWebhookId, httpOptions) {
	if (!batchWebhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
		return;
	}
	var url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.batchWebhooks.delete = function(batchWebhookId, httpOptions) {
	if (!batchWebhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
		return;
	}
	var url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.campaignFolders = {};

endpoint.campaignFolders.get = function(httpOptions) {
	var url = parse('/campaign-folders');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaignFolders.post = function(httpOptions) {
	var url = parse('/campaign-folders');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaignFolders.get = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/campaign-folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaignFolders.patch = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/campaign-folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.campaignFolders.delete = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/campaign-folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.campaigns = {};

endpoint.campaigns.get = function(httpOptions) {
	var url = parse('/campaigns');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.post = function(httpOptions) {
	var url = parse('/campaigns');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.patch = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id', [campaignId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.campaigns.delete = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id', [campaignId]);
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
	var url = parse('/campaigns/:campaign_id/actions/cancel-send', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.send = {};

endpoint.campaigns.actions.send.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/actions/send', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.schedule = {};

endpoint.campaigns.actions.schedule.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/actions/schedule', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.unschedule = {};

endpoint.campaigns.actions.unschedule.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/actions/unschedule', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.pause = {};

endpoint.campaigns.actions.pause.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/actions/pause', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.resume = {};

endpoint.campaigns.actions.resume.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/actions/resume', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.replicate = {};

endpoint.campaigns.actions.replicate.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/actions/replicate', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.test = {};

endpoint.campaigns.actions.test.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/actions/test', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.actions.createResend = {};

endpoint.campaigns.actions.createResend.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/actions/create-resend', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.content = {};

endpoint.campaigns.content.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/content', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.content.put = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/content', [campaignId]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.campaigns.feedback = {};

endpoint.campaigns.feedback.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/feedback', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.feedback.post = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/feedback', [campaignId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.campaigns.feedback.get = function(campaignId, feedbackId, httpOptions) {
	if (!campaignId || !feedbackId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.campaigns.feedback.patch = function(campaignId, feedbackId, httpOptions) {
	if (!campaignId || !feedbackId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.campaigns.feedback.delete = function(campaignId, feedbackId, httpOptions) {
	if (!campaignId || !feedbackId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.campaigns.sendChecklist = {};

endpoint.campaigns.sendChecklist.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/campaigns/:campaign_id/send-checklist', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.activityFeed = {};

endpoint.activityFeed.chimpChatter = {};

endpoint.activityFeed.chimpChatter.get = function(httpOptions) {
	var url = parse('/activity-feed/chimp-chatter');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.connectedSites = {};

endpoint.connectedSites.get = function(httpOptions) {
	var url = parse('/connected-sites');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.connectedSites.post = function(httpOptions) {
	var url = parse('/connected-sites');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.connectedSites.get = function(connectedSiteId, httpOptions) {
	if (!connectedSiteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [connectedSiteId].');
		return;
	}
	var url = parse('/connected-sites/:connected_site_id', [connectedSiteId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.connectedSites.delete = function(connectedSiteId, httpOptions) {
	if (!connectedSiteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [connectedSiteId].');
		return;
	}
	var url = parse('/connected-sites/:connected_site_id', [connectedSiteId]);
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
	var url = parse('/connected-sites/:connected_site_id/actions/verify-script-installation', [connectedSiteId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.conversations = {};

endpoint.conversations.get = function(httpOptions) {
	var url = parse('/conversations');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.conversations.get = function(conversationId, httpOptions) {
	if (!conversationId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [conversationId].');
		return;
	}
	var url = parse('/conversations/:conversation_id', [conversationId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.conversations.messages = {};

endpoint.conversations.messages.get = function(conversationId, httpOptions) {
	if (!conversationId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [conversationId].');
		return;
	}
	var url = parse('/conversations/:conversation_id/messages', [conversationId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.conversations.messages.get = function(conversationId, messageId, httpOptions) {
	if (!conversationId || !messageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [conversationId,messageId].');
		return;
	}
	var url = parse('/conversations/:conversation_id/messages/:message_id', [conversationId, messageId]);
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
	var url = parse('/customer-journeys/journeys/:journey_id/steps/:step_id/actions/trigger', [journeyId, stepId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce = {};

endpoint.ecommerce.stores = {};

endpoint.ecommerce.stores.get = function(httpOptions) {
	var url = parse('/ecommerce/stores');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.post = function(httpOptions) {
	var url = parse('/ecommerce/stores');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id', [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.patch = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id', [storeId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.delete = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id', [storeId]);
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
	var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines', [storeId, cartId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.carts.lines.post = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines', [storeId, cartId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.carts.lines.get = function(storeId, cartId, lineId, httpOptions) {
	if (!storeId || !cartId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.carts.lines.patch = function(storeId, cartId, lineId, httpOptions) {
	if (!storeId || !cartId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.carts.lines.delete = function(storeId, cartId, lineId, httpOptions) {
	if (!storeId || !cartId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.carts.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts', [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.carts.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts', [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.carts.get = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.carts.patch = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.carts.delete = function(storeId, cartId, httpOptions) {
	if (!storeId || !cartId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.customers = {};

endpoint.ecommerce.stores.customers.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/customers', [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.customers.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/customers', [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.customers.get = function(storeId, customerId, httpOptions) {
	if (!storeId || !customerId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.customers.put = function(storeId, customerId, httpOptions) {
	if (!storeId || !customerId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.ecommerce.stores.customers.patch = function(storeId, customerId, httpOptions) {
	if (!storeId || !customerId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.customers.delete = function(storeId, customerId, httpOptions) {
	if (!storeId || !customerId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
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
	var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines', [storeId, orderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.lines.post = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines', [storeId, orderId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.orders.lines.get = function(storeId, orderId, lineId, httpOptions) {
	if (!storeId || !orderId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.lines.patch = function(storeId, orderId, lineId, httpOptions) {
	if (!storeId || !orderId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.orders.lines.delete = function(storeId, orderId, lineId, httpOptions) {
	if (!storeId || !orderId || !lineId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.products = {};

endpoint.ecommerce.stores.products.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products', [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.orders = {};

endpoint.ecommerce.orders.get = function(httpOptions) {
	var url = parse('/ecommerce/orders');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders', [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders', [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.orders.get = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.orders.patch = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.orders.delete = function(storeId, orderId, httpOptions) {
	if (!storeId || !orderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.products.images = {};

endpoint.ecommerce.stores.products.images.get = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/images', [storeId, productId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.images.post = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/images', [storeId, productId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.products.images.get = function(storeId, productId, imageId, httpOptions) {
	if (!storeId || !productId || !imageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.images.patch = function(storeId, productId, imageId, httpOptions) {
	if (!storeId || !productId || !imageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.products.images.delete = function(storeId, productId, imageId, httpOptions) {
	if (!storeId || !productId || !imageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants = {};

endpoint.ecommerce.stores.products.variants.get = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants', [storeId, productId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.post = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants', [storeId, productId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.get = function(storeId, productId, variantId, httpOptions) {
	if (!storeId || !productId || !variantId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.put = function(storeId, productId, variantId, httpOptions) {
	if (!storeId || !productId || !variantId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.patch = function(storeId, productId, variantId, httpOptions) {
	if (!storeId || !productId || !variantId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.products.variants.delete = function(storeId, productId, variantId, httpOptions) {
	if (!storeId || !productId || !variantId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.products.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products', [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products', [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.products.get = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.products.patch = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.products.delete = function(storeId, productId, httpOptions) {
	if (!storeId || !productId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
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
	var url = parse('/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes', [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.promoCodes.post = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes', [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.promoCodes.get = function(storeId, promoRuleId, promoCodeId, httpOptions) {
	if (!storeId || !promoRuleId || !promoCodeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId,promoCodeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes/:promo_code_id', [storeId, promoRuleId, promoCodeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.promoCodes.patch = function(storeId, promoRuleId, promoCodeId, httpOptions) {
	if (!storeId || !promoRuleId || !promoCodeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId,promoCodeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes/:promo_code_id', [storeId, promoRuleId, promoCodeId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.promoCodes.delete = function(storeId, promoRuleId, promoCodeId, httpOptions) {
	if (!storeId || !promoRuleId || !promoCodeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId,promoCodeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules/:promo_rule_id/promo-codes/:promo_code_id', [storeId, promoRuleId, promoCodeId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.get = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules', [storeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.post = function(storeId, httpOptions) {
	if (!storeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules', [storeId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.get = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules/:promo_rule_id', [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.patch = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules/:promo_rule_id', [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ecommerce.stores.promoRules.delete = function(storeId, promoRuleId, httpOptions) {
	if (!storeId || !promoRuleId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,promoRuleId].');
		return;
	}
	var url = parse('/ecommerce/stores/:store_id/promo-rules/:promo_rule_id', [storeId, promoRuleId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.facebookAds = {};

endpoint.facebookAds.get = function(httpOptions) {
	var url = parse('/facebook-ads');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.facebookAds.get = function(outreachId, httpOptions) {
	if (!outreachId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [outreachId].');
		return;
	}
	var url = parse('/facebook-ads/:outreach_id', [outreachId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager = {};

endpoint.fileManager.files = {};

endpoint.fileManager.files.get = function(httpOptions) {
	var url = parse('/file-manager/files');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager.files.post = function(httpOptions) {
	var url = parse('/file-manager/files');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.fileManager.files.get = function(fileId, httpOptions) {
	if (!fileId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
		return;
	}
	var url = parse('/file-manager/files/:file_id', [fileId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager.files.patch = function(fileId, httpOptions) {
	if (!fileId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
		return;
	}
	var url = parse('/file-manager/files/:file_id', [fileId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.fileManager.files.delete = function(fileId, httpOptions) {
	if (!fileId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
		return;
	}
	var url = parse('/file-manager/files/:file_id', [fileId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.fileManager.folders = {};

endpoint.fileManager.folders.get = function(httpOptions) {
	var url = parse('/file-manager/folders');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager.folders.post = function(httpOptions) {
	var url = parse('/file-manager/folders');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.fileManager.folders.get = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/file-manager/folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.fileManager.folders.patch = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/file-manager/folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.fileManager.folders.delete = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/file-manager/folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.landingPages = {};

endpoint.landingPages.get = function(httpOptions) {
	var url = parse('/landing-pages');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.landingPages.post = function(httpOptions) {
	var url = parse('/landing-pages');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.landingPages.get = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse('/landing-pages/:page_id', [pageId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.landingPages.patch = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse('/landing-pages/:page_id', [pageId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.landingPages.delete = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse('/landing-pages/:page_id', [pageId]);
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
	var url = parse('/landing-pages/:page_id/actions/publish', [pageId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.landingPages.actions.unpublish = {};

endpoint.landingPages.actions.unpublish.post = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse('/landing-pages/:page_id/actions/unpublish', [pageId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.landingPages.content = {};

endpoint.landingPages.content.get = function(pageId, httpOptions) {
	if (!pageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pageId].');
		return;
	}
	var url = parse('/landing-pages/:page_id/content', [pageId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists = {};

endpoint.lists.get = function(httpOptions) {
	var url = parse('/lists');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.post = function(httpOptions) {
	var url = parse('/lists');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.patch = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id', [listId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.delete = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id', [listId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id', [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.abuseReports = {};

endpoint.lists.abuseReports.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/abuse-reports', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.abuseReports.get = function(listId, reportId, httpOptions) {
	if (!listId || !reportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,reportId].');
		return;
	}
	var url = parse('/lists/:list_id/abuse-reports/:report_id', [listId, reportId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.activity = {};

endpoint.lists.activity.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/activity', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.clients = {};

endpoint.lists.clients.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/clients', [listId]);
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
	var url = parse('/lists/:list_id/members/:subscriber_hash/events', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.events.post = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/events', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.growthHistory = {};

endpoint.lists.growthHistory.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/growth-history', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.growthHistory.get = function(listId, month, httpOptions) {
	if (!listId || !month) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,month].');
		return;
	}
	var url = parse('/lists/:list_id/growth-history/:month', [listId, month]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories = {};

endpoint.lists.interestCategories.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories', [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.interestCategories.get = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories.patch = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.interestCategories.delete = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.interestCategories.interests = {};

endpoint.lists.interestCategories.interests.get = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests', [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories.interests.post = function(listId, interestCategoryId, httpOptions) {
	if (!listId || !interestCategoryId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests', [listId, interestCategoryId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.interestCategories.interests.get = function(listId, interestCategoryId, interestId, httpOptions) {
	if (!listId || !interestCategoryId || !interestId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.interestCategories.interests.patch = function(listId, interestCategoryId, interestId, httpOptions) {
	if (!listId || !interestCategoryId || !interestId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.interestCategories.interests.delete = function(listId, interestCategoryId, interestId, httpOptions) {
	if (!listId || !interestCategoryId || !interestId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
		return;
	}
	var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.locations = {};

endpoint.lists.locations.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/locations', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.activity = {};

endpoint.lists.members.activity.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/activity', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.activityFeed = {};

endpoint.lists.members.activityFeed.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/activity-feed', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.goals = {};

endpoint.lists.members.goals.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/goals', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.notes = {};

endpoint.lists.members.notes.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/notes', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.notes.post = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/notes', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.members.notes.get = function(listId, subscriberHash, noteId, httpOptions) {
	if (!listId || !subscriberHash || !noteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.notes.patch = function(listId, subscriberHash, noteId, httpOptions) {
	if (!listId || !subscriberHash || !noteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.members.notes.delete = function(listId, subscriberHash, noteId, httpOptions) {
	if (!listId || !subscriberHash || !noteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.members.tags = {};

endpoint.lists.members.tags.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/tags', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.tags.post = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash/tags', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.members.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/members', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/members', [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.members.get = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.members.put = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};
endpoint.lists.members.patch = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.members.delete = function(listId, subscriberHash, httpOptions) {
	if (!listId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
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
	var url = parse('/lists/:list_id/members/:subscriber_hash/actions/delete-permanent', [listId, subscriberHash]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.mergeFields = {};

endpoint.lists.mergeFields.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/merge-fields', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.mergeFields.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/merge-fields', [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.mergeFields.get = function(listId, mergeId, httpOptions) {
	if (!listId || !mergeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
		return;
	}
	var url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.mergeFields.patch = function(listId, mergeId, httpOptions) {
	if (!listId || !mergeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
		return;
	}
	var url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.mergeFields.delete = function(listId, mergeId, httpOptions) {
	if (!listId || !mergeId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
		return;
	}
	var url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
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
	var url = parse('/lists/:list_id/segments/:segment_id/members', [listId, segmentId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.segments.members.post = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse('/lists/:list_id/segments/:segment_id/members', [listId, segmentId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.segments.members.delete = function(listId, segmentId, subscriberHash, httpOptions) {
	if (!listId || !segmentId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId,subscriberHash].');
		return;
	}
	var url = parse('/lists/:list_id/segments/:segment_id/members/:subscriber_hash', [listId, segmentId, subscriberHash]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.segments.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/segments', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.segments.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/segments', [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.segments.get = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.segments.delete = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.segments.patch = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.lists.segments.post = function(listId, segmentId, httpOptions) {
	if (!listId || !segmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
		return;
	}
	var url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.signupForms = {};

endpoint.lists.signupForms.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/signup-forms', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.signupForms.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/signup-forms', [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.tagSearch = {};

endpoint.lists.tagSearch.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/tag-search', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.webhooks = {};

endpoint.lists.webhooks.get = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/webhooks', [listId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.webhooks.post = function(listId, httpOptions) {
	if (!listId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
		return;
	}
	var url = parse('/lists/:list_id/webhooks', [listId]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.lists.webhooks.get = function(listId, webhookId, httpOptions) {
	if (!listId || !webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
		return;
	}
	var url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.lists.webhooks.delete = function(listId, webhookId, httpOptions) {
	if (!listId || !webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
		return;
	}
	var url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.lists.webhooks.patch = function(listId, webhookId, httpOptions) {
	if (!listId || !webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
		return;
	}
	var url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.ping = {};

endpoint.ping.get = function(httpOptions) {
	var url = parse('/ping');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting = {};

endpoint.reporting.facebookAds = {};

endpoint.reporting.facebookAds.get = function(httpOptions) {
	var url = parse('/reporting/facebook-ads');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting.facebookAds.get = function(outreachId, httpOptions) {
	if (!outreachId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [outreachId].');
		return;
	}
	var url = parse('/reporting/facebook-ads/:outreach_id', [outreachId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting.facebookAds.ecommerceProductActivity = {};

endpoint.reporting.facebookAds.ecommerceProductActivity.get = function(outreachId, httpOptions) {
	if (!outreachId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [outreachId].');
		return;
	}
	var url = parse('/reporting/facebook-ads/:outreach_id/ecommerce-product-activity', [outreachId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting.landingPages = {};

endpoint.reporting.landingPages.get = function(httpOptions) {
	var url = parse('/reporting/landing-pages');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reporting.landingPages.get = function(outreachId, httpOptions) {
	if (!outreachId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [outreachId].');
		return;
	}
	var url = parse('/reporting/landing-pages/:outreach_id', [outreachId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports = {};

endpoint.reports.get = function(httpOptions) {
	var url = parse('/reports');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.abuseReports = {};

endpoint.reports.abuseReports.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/abuse-reports', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.abuseReports.get = function(campaignId, reportId, httpOptions) {
	if (!campaignId || !reportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,reportId].');
		return;
	}
	var url = parse('/reports/:campaign_id/abuse-reports/:report_id', [campaignId, reportId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.advice = {};

endpoint.reports.advice.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/advice', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.openDetails = {};

endpoint.reports.openDetails.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/open-details', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.openDetails.get = function(campaignId, subscriberHash, httpOptions) {
	if (!campaignId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,subscriberHash].');
		return;
	}
	var url = parse('/reports/:campaign_id/open-details/:subscriber_hash', [campaignId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.clickDetails = {};

endpoint.reports.clickDetails.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/click-details', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.clickDetails.get = function(campaignId, linkId, httpOptions) {
	if (!campaignId || !linkId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,linkId].');
		return;
	}
	var url = parse('/reports/:campaign_id/click-details/:link_id', [campaignId, linkId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.clickDetails.members = {};

endpoint.reports.clickDetails.members.get = function(campaignId, linkId, httpOptions) {
	if (!campaignId || !linkId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,linkId].');
		return;
	}
	var url = parse('/reports/:campaign_id/click-details/:link_id/members', [campaignId, linkId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.clickDetails.members.get = function(campaignId, linkId, subscriberHash, httpOptions) {
	if (!campaignId || !linkId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,linkId,subscriberHash].');
		return;
	}
	var url = parse('/reports/:campaign_id/click-details/:link_id/members/:subscriber_hash', [campaignId, linkId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.domainPerformance = {};

endpoint.reports.domainPerformance.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/domain-performance', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.ecommerceProductActivity = {};

endpoint.reports.ecommerceProductActivity.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/ecommerce-product-activity', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.eepurl = {};

endpoint.reports.eepurl.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/eepurl', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.emailActivity = {};

endpoint.reports.emailActivity.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/email-activity', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.emailActivity.get = function(campaignId, subscriberHash, httpOptions) {
	if (!campaignId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,subscriberHash].');
		return;
	}
	var url = parse('/reports/:campaign_id/email-activity/:subscriber_hash', [campaignId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.locations = {};

endpoint.reports.locations.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/locations', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.sentTo = {};

endpoint.reports.sentTo.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/sent-to', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.sentTo.get = function(campaignId, subscriberHash, httpOptions) {
	if (!campaignId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,subscriberHash].');
		return;
	}
	var url = parse('/reports/:campaign_id/sent-to/:subscriber_hash', [campaignId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.subReports = {};

endpoint.reports.subReports.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/sub-reports', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.unsubscribed = {};

endpoint.reports.unsubscribed.get = function(campaignId, httpOptions) {
	if (!campaignId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
		return;
	}
	var url = parse('/reports/:campaign_id/unsubscribed', [campaignId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.reports.unsubscribed.get = function(campaignId, subscriberHash, httpOptions) {
	if (!campaignId || !subscriberHash) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,subscriberHash].');
		return;
	}
	var url = parse('/reports/:campaign_id/unsubscribed/:subscriber_hash', [campaignId, subscriberHash]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.searchCampaigns = {};

endpoint.searchCampaigns.get = function(httpOptions) {
	var url = parse('/search-campaigns');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.searchMembers = {};

endpoint.searchMembers.get = function(httpOptions) {
	var url = parse('/search-members');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templateFolders = {};

endpoint.templateFolders.get = function(httpOptions) {
	var url = parse('/template-folders');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templateFolders.post = function(httpOptions) {
	var url = parse('/template-folders');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.templateFolders.get = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/template-folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templateFolders.patch = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/template-folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.templateFolders.delete = function(folderId, httpOptions) {
	if (!folderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
		return;
	}
	var url = parse('/template-folders/:folder_id', [folderId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.templates = {};

endpoint.templates.get = function(httpOptions) {
	var url = parse('/templates');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templates.post = function(httpOptions) {
	var url = parse('/templates');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.templates.get = function(templateId, httpOptions) {
	if (!templateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
		return;
	}
	var url = parse('/templates/:template_id', [templateId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.templates.patch = function(templateId, httpOptions) {
	if (!templateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
		return;
	}
	var url = parse('/templates/:template_id', [templateId]);
	sys.logs.debug('[mailchimp] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};
endpoint.templates.delete = function(templateId, httpOptions) {
	if (!templateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
		return;
	}
	var url = parse('/templates/:template_id', [templateId]);
	sys.logs.debug('[mailchimp] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};
endpoint.templates.defaultContent = {};

endpoint.templates.defaultContent.get = function(templateId, httpOptions) {
	if (!templateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
		return;
	}
	var url = parse('/templates/:template_id/default-content', [templateId]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.verifiedDomains = {};

endpoint.verifiedDomains.get = function(httpOptions) {
	var url = parse('/verified-domains');
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.verifiedDomains.post = function(httpOptions) {
	var url = parse('/verified-domains');
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
endpoint.verifiedDomains.get = function(domainName, httpOptions) {
	if (!domainName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [domainName].');
		return;
	}
	var url = parse('/verified-domains/:domain_name', [domainName]);
	sys.logs.debug('[mailchimp] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};
endpoint.verifiedDomains.delete = function(domainName, httpOptions) {
	if (!domainName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [domainName].');
		return;
	}
	var url = parse('/verified-domains/:domain_name', [domainName]);
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
	var url = parse('/verified-domains/:domain_name/actions/verify', [domainName]);
	sys.logs.debug('[mailchimp] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};
