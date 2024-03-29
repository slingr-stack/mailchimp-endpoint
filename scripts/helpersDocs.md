# Javascript API

The Javascript API of the mailchimp endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `PATCH`,`POST`,`GET`,`DELETE`,`PUT` requests to the [mailchimp API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.mailchimp.patch('/lists/:list_id/members/:subscriber_hash', body)
var response = app.endpoints.mailchimp.patch('/lists/:list_id/members/:subscriber_hash')
var response = app.endpoints.mailchimp.post('/file-manager/files', body)
var response = app.endpoints.mailchimp.post('/file-manager/files')
var response = app.endpoints.mailchimp.get('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id')
var response = app.endpoints.mailchimp.delete('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id')
var response = app.endpoints.mailchimp.put('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', body)
var response = app.endpoints.mailchimp.put('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/batch-webhooks/:batch_webhook_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.batchWebhooks.patch(batchWebhookId, body)
```
---
* API URL: '/campaign-folders/:folder_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.campaignFolders.patch(folderId, body)
```
---
* API URL: '/campaigns/:campaign_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.campaigns.patch(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/feedback/:feedback_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.campaigns.feedback.patch(campaignId, feedbackId, body)
```
---
* API URL: '/ecommerce/stores/:store_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.patch(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.patch(storeId, cartId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.lines.patch(storeId, cartId, lineId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/customers/:customer_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.customers.patch(storeId, customerId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.patch(storeId, orderId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.lines.patch(storeId, orderId, lineId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.patch(storeId, productId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images/:image_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.images.patch(storeId, productId, imageId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.variants.patch(storeId, productId, variantId, body)
```
---
* API URL: '/file-manager/files/:file_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.fileManager.files.patch(fileId, body)
```
---
* API URL: '/file-manager/folders/:folder_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.fileManager.folders.patch(folderId, body)
```
---
* API URL: '/lists/:list_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.patch(listId, body)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.interestCategories.patch(listId, interestCategoryId, body)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.interestCategories.interests.patch(listId, interestCategoryId, interestId, body)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.members.patch(listId, subscriberHash, body)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes/:note_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.members.notes.patch(listId, subscriberHash, noteId, body)
```
---
* API URL: '/lists/:list_id/merge-fields/:merge_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.mergeFields.patch(listId, mergeId, body)
```
---
* API URL: '/lists/:list_id/segments/:segment_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.segments.patch(listId, segmentId, body)
```
---
* API URL: '/lists/:list_id/webhooks/:webhook_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.webhooks.patch(listId, webhookId, body)
```
---
* API URL: '/template-folders/:folder_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.templateFolders.patch(folderId, body)
```
---
* API URL: '/templates/:template_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.templates.patch(templateId, body)
```
---
* API URL: '/authorized-apps'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.authorizedApps.post(body)
```
---
* API URL: '/automations/:workflow_id/actions/pause-all-emails'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.actions.pauseAllEmails.post(workflowId, body)
```
---
* API URL: '/automations/:workflow_id/actions/start-all-emails'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.actions.startAllEmails.post(workflowId, body)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/actions/pause'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.emails.actions.pause.post(workflowId, workflowEmailId, body)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/actions/start'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.emails.actions.start.post(workflowId, workflowEmailId, body)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/queue'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.emails.queue.post(workflowId, workflowEmailId, body)
```
---
* API URL: '/automations/:workflow_id/removed-subscribers'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.removedSubscribers.post(workflowId, body)
```
---
* API URL: '/batches'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.batches.post(body)
```
---
* API URL: '/batch-webhooks'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.batchWebhooks.post(body)
```
---
* API URL: '/campaign-folders'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaignFolders.post(body)
```
---
* API URL: '/campaigns'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.post(body)
```
---
* API URL: '/campaigns/:campaign_id/actions/cancel-send'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.actions.cancelSend.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/pause'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.actions.pause.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/replicate'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.actions.replicate.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/resume'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.actions.resume.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/schedule'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.actions.schedule.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/send'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.actions.send.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/test'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.actions.test.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/unschedule'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.actions.unschedule.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/feedback'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.feedback.post(campaignId, body)
```
---
* API URL: '/conversations/:conversation_id/messages'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.conversations.messages.post(conversationId, body)
```
---
* API URL: '/ecommerce/stores'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.post(body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.post(body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.post(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.lines.post(storeId, cartId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/customers'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.customers.post(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/orders'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.post(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.post(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.images.post(storeId, productId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.variants.post(storeId, productId, body)
```
---
* API URL: '/file-manager/files'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.fileManager.files.post(body)
```
---
* API URL: '/file-manager/folders'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.fileManager.folders.post(body)
```
---
* API URL: '/lists'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.post(body)
```
---
* API URL: '/lists/:list_id'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.post(body)
```
---
* API URL: '/lists/:list_id/interest-categories'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.interestCategories.post(body)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.interestCategories.post(listId, body)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.interestCategories.interests.post(listId, interestCategoryId, body)
```
---
* API URL: '/lists/:list_id/members'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.members.post(listId, body)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.members.notes.post(listId, subscriberHash, body)
```
---
* API URL: '/lists/:list_id/merge-fields'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.mergeFields.post(listId, body)
```
---
* API URL: '/lists/:list_id/segments'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.segments.post(body)
```
---
* API URL: '/lists/:list_id/segments/:segment_id'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.segments.post(listId, body)
```
---
* API URL: '/lists/:list_id/segments/:segment_id/members'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.segments.members.post(listId, segmentId, body)
```
---
* API URL: '/lists/:list_id/signup-forms'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.signupForms.post(listId, body)
```
---
* API URL: '/lists/:list_id/webhooks'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.webhooks.post(listId, body)
```
---
* API URL: '/template-folders'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.templateFolders.post(body)
```
---
* API URL: '/templates'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.templates.post(body)
```
---
* API URL: '/authorized-apps'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.authorizedApps.get()
```
---
* API URL: '/authorized-apps/:app_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.authorizedApps.get()
```
---
* API URL: '/automations'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.get()
```
---
* API URL: '/automations/:workflow_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.get()
```
---
* API URL: '/automations/:workflow_id/emails'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.emails.get()
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.emails.get(workflowId)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/queue'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.emails.queue.get(workflowId)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/queue/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.emails.queue.get(workflowId, workflowEmailId)
```
---
* API URL: '/automations/:workflow_id/removed-subscribers'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.removedSubscribers.get(workflowId)
```
---
* API URL: '/batches'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.batches.get()
```
---
* API URL: '/batches/:batch_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.batches.get()
```
---
* API URL: '/batch-webhooks'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.batchWebhooks.get()
```
---
* API URL: '/batch-webhooks/:batch_webhook_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.batchWebhooks.get()
```
---
* API URL: '/campaign-folders'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaignFolders.get()
```
---
* API URL: '/campaign-folders/:folder_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaignFolders.get()
```
---
* API URL: '/campaigns'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.get()
```
---
* API URL: '/campaigns/:campaign_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.get()
```
---
* API URL: '/campaigns/:campaign_id/content'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.content.get(campaignId)
```
---
* API URL: '/campaigns/:campaign_id/feedback'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.feedback.get()
```
---
* API URL: '/campaigns/:campaign_id/feedback/:feedback_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.feedback.get(campaignId)
```
---
* API URL: '/campaigns/:campaign_id/send-checklist'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.sendChecklist.get(campaignId)
```
---
* API URL: '/conversations'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.conversations.get()
```
---
* API URL: '/conversations/:conversation_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.conversations.get()
```
---
* API URL: '/conversations/:conversation_id/messages'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.conversations.messages.get()
```
---
* API URL: '/conversations/:conversation_id/messages/:message_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.conversations.messages.get(conversationId)
```
---
* API URL: '/ecommerce/stores'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.get()
```
---
* API URL: '/ecommerce/stores/:store_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.get()
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.lines.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.lines.get(storeId, cartId)
```
---
* API URL: '/ecommerce/stores/:store_id/customers'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.customers.get()
```
---
* API URL: '/ecommerce/stores/:store_id/customers/:customer_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.customers.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.get()
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.lines.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.lines.get(storeId, orderId)
```
---
* API URL: '/ecommerce/stores/:store_id/products'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.get()
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.images.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images/:image_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.images.get(storeId, productId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.variants.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.variants.get(storeId, productId)
```
---
* API URL: '/file-manager/files'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.fileManager.files.get()
```
---
* API URL: '/file-manager/files/:file_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.fileManager.files.get()
```
---
* API URL: '/file-manager/folders'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.fileManager.folders.get()
```
---
* API URL: '/file-manager/folders/:folder_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.fileManager.folders.get()
```
---
* API URL: '/lists'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.get()
```
---
* API URL: '/lists/:list_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.get()
```
---
* API URL: '/lists/:list_id/abuse-reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.abuseReports.get()
```
---
* API URL: '/lists/:list_id/abuse-reports/:report_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.abuseReports.get(listId)
```
---
* API URL: '/lists/:list_id/activity'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.activity.get(listId)
```
---
* API URL: '/lists/:list_id/clients'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.clients.get(listId)
```
---
* API URL: '/lists/:list_id/growth-history'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.growthHistory.get()
```
---
* API URL: '/lists/:list_id/growth-history/:month'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.growthHistory.get(listId)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.interestCategories.interests.get(listId)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.interestCategories.interests.get(listId, interestCategoryId)
```
---
* API URL: '/lists/:list_id/locations'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.locations.get(listId)
```
---
* API URL: '/lists/:list_id/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.members.get()
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.members.get(listId)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/activity'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.members.activity.get(listId, subscriberHash)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/goals'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.members.goals.get(listId, subscriberHash)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.members.notes.get(listId)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes/:note_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.members.notes.get(listId, subscriberHash)
```
---
* API URL: '/lists/:list_id/merge-fields'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.mergeFields.get()
```
---
* API URL: '/lists/:list_id/merge-fields/:merge_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.mergeFields.get(listId)
```
---
* API URL: '/lists/:list_id/segments'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.segments.get()
```
---
* API URL: '/lists/:list_id/segments/:segment_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.segments.get(listId)
```
---
* API URL: '/lists/:list_id/segments/:segment_id/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.segments.members.get(listId, segmentId)
```
---
* API URL: '/lists/:list_id/signup-forms'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.signupForms.get(listId)
```
---
* API URL: '/lists/:list_id/webhooks'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.webhooks.get()
```
---
* API URL: '/lists/:list_id/webhooks/:webhook_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.webhooks.get(listId)
```
---
* API URL: '/reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.get()
```
---
* API URL: '/reports/:campaign_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.get()
```
---
* API URL: '/reports/:campaign_id/abuse-reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.abuseReports.get()
```
---
* API URL: '/reports/:campaign_id/abuse-reports/:report_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.abuseReports.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/advice'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.advice.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/click-details'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.clickDetails.get()
```
---
* API URL: '/reports/:campaign_id/click-details/:link_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.clickDetails.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/click-details/:link_id/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.clickDetails.members.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/click-details/:link_id/members/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.clickDetails.members.get(campaignId, linkId)
```
---
* API URL: '/reports/:campaign_id/domain-performance'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.domainPerformance.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/eepurl'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.eepurl.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/email-activity'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.emailActivity.get()
```
---
* API URL: '/reports/:campaign_id/email-activity/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.emailActivity.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/locations'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.locations.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/sent-to'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.sentTo.get()
```
---
* API URL: '/reports/:campaign_id/sent-to/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.sentTo.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/sub-reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.subReports.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/unsubscribed'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.unsubscribed.get()
```
---
* API URL: '/reports/:campaign_id/unsubscribed/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.unsubscribed.get(campaignId)
```
---
* API URL: '/search-campaigns'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.searchCampaigns.get()
```
---
* API URL: '/search-members'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.searchMembers.get()
```
---
* API URL: '/template-folders'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templateFolders.get()
```
---
* API URL: '/template-folders/:folder_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templateFolders.get()
```
---
* API URL: '/templates'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templates.get()
```
---
* API URL: '/templates/:template_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templates.get()
```
---
* API URL: '/templates/:template_id/default-content'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templates.defaultContent.get(templateId)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.automations.emails.delete(workflowId, workflowEmailId)
```
---
* API URL: '/batches/:batch_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.batches.delete(batchId)
```
---
* API URL: '/batch-webhooks/:batch_webhook_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.batchWebhooks.delete(batchWebhookId)
```
---
* API URL: '/campaign-folders/:folder_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.campaignFolders.delete(folderId)
```
---
* API URL: '/campaigns/:campaign_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.campaigns.delete(campaignId)
```
---
* API URL: '/campaigns/:campaign_id/feedback/:feedback_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.campaigns.feedback.delete(campaignId, feedbackId)
```
---
* API URL: '/ecommerce/stores/:store_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.delete(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.delete(storeId, cartId)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.carts.lines.delete(storeId, cartId, lineId)
```
---
* API URL: '/ecommerce/stores/:store_id/customers/:customer_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.customers.delete(storeId, customerId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.delete(storeId, orderId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.orders.lines.delete(storeId, orderId, lineId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.delete(storeId, productId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images/:image_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.images.delete(storeId, productId, imageId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.variants.delete(storeId, productId, variantId)
```
---
* API URL: '/file-manager/files/:file_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.fileManager.files.delete(fileId)
```
---
* API URL: '/file-manager/folders/:folder_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.fileManager.folders.delete(folderId)
```
---
* API URL: '/lists/:list_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.delete(listId)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.interestCategories.delete(listId, interestCategoryId)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.interestCategories.interests.delete(listId, interestCategoryId, interestId)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.members.delete(listId, subscriberHash)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes/:note_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.members.notes.delete(listId, subscriberHash, noteId)
```
---
* API URL: '/lists/:list_id/merge-fields/:merge_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.mergeFields.delete(listId, mergeId)
```
---
* API URL: '/lists/:list_id/segments/:segment_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.segments.delete(listId, segmentId)
```
---
* API URL: '/lists/:list_id/segments/:segment_id/members/:subscriber_hash'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.segments.members.delete(listId, segmentId, subscriberHash)
```
---
* API URL: '/lists/:list_id/webhooks/:webhook_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.webhooks.delete(listId, webhookId)
```
---
* API URL: '/template-folders/:folder_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.templateFolders.delete(folderId)
```
---
* API URL: '/templates/:template_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.templates.delete(templateId)
```
---
* API URL: '/campaigns/:campaign_id/content'
* HTTP Method: 'PUT'
```javascript
app.endpoints.mailchimp.campaigns.content.put(campaignId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/customers/:customer_id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.mailchimp.ecommerce.stores.customers.put(storeId, customerId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.mailchimp.ecommerce.stores.products.variants.put(storeId, productId, variantId, body)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash'
* HTTP Method: 'PUT'
```javascript
app.endpoints.mailchimp.lists.members.put(listId, subscriberHash, body)
```
---

</details>
    
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>PATCH,POST,GET,DELETE,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/batch-webhooks/{batch_webhook_id}<br>/campaign-folders/{folder_id}<br>/campaigns/{campaign_id}<br>/campaigns/{campaign_id}/feedback/{feedback_id}<br>/ecommerce/stores/{store_id}<br>/ecommerce/stores/{store_id}/carts/{cart_id}<br>/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}<br>/ecommerce/stores/{store_id}/customers/{customer_id}<br>/ecommerce/stores/{store_id}/orders/{order_id}<br>/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}<br>/ecommerce/stores/{store_id}/products/{product_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}<br>/file-manager/files/{file_id}<br>/file-manager/folders/{folder_id}<br>/lists/{list_id}<br>/lists/{list_id}/interest-categories/{interest_category_id}<br>/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}<br>/lists/{list_id}/members/{subscriber_hash}<br>/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}<br>/lists/{list_id}/merge-fields/{merge_id}<br>/lists/{list_id}/segments/{segment_id}<br>/lists/{list_id}/webhooks/{webhook_id}<br>/template-folders/{folder_id}<br>/templates/{template_id}<br>/authorized-apps<br>/automations/{workflow_id}/actions/pause-all-emails<br>/automations/{workflow_id}/actions/start-all-emails<br>/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause<br>/automations/{workflow_id}/emails/{workflow_email_id}/actions/start<br>/automations/{workflow_id}/emails/{workflow_email_id}/queue<br>/automations/{workflow_id}/removed-subscribers<br>/batches<br>/batch-webhooks<br>/campaign-folders<br>/campaigns<br>/campaigns/{campaign_id}/actions/cancel-send<br>/campaigns/{campaign_id}/actions/pause<br>/campaigns/{campaign_id}/actions/replicate<br>/campaigns/{campaign_id}/actions/resume<br>/campaigns/{campaign_id}/actions/schedule<br>/campaigns/{campaign_id}/actions/send<br>/campaigns/{campaign_id}/actions/test<br>/campaigns/{campaign_id}/actions/unschedule<br>/campaigns/{campaign_id}/feedback<br>/conversations/{conversation_id}/messages<br>/ecommerce/stores<br>/ecommerce/stores/{store_id}/carts<br>/ecommerce/stores/{store_id}/carts/{cart_id}<br>/ecommerce/stores/{store_id}/carts/{cart_id}/lines<br>/ecommerce/stores/{store_id}/customers<br>/ecommerce/stores/{store_id}/orders<br>/ecommerce/stores/{store_id}/products<br>/ecommerce/stores/{store_id}/products/{product_id}/images<br>/ecommerce/stores/{store_id}/products/{product_id}/variants<br>/file-manager/files<br>/file-manager/folders<br>/lists<br>/lists/{list_id}<br>/lists/{list_id}/interest-categories<br>/lists/{list_id}/interest-categories/{interest_category_id}<br>/lists/{list_id}/interest-categories/{interest_category_id}/interests<br>/lists/{list_id}/members<br>/lists/{list_id}/members/{subscriber_hash}/notes<br>/lists/{list_id}/merge-fields<br>/lists/{list_id}/segments<br>/lists/{list_id}/segments/{segment_id}<br>/lists/{list_id}/segments/{segment_id}/members<br>/lists/{list_id}/signup-forms<br>/lists/{list_id}/webhooks<br>/template-folders<br>/templates<br>/authorized-apps<br>/authorized-apps/{app_id}<br>/automations<br>/automations/{workflow_id}<br>/automations/{workflow_id}/emails<br>/automations/{workflow_id}/emails/{workflow_email_id}<br>/automations/{workflow_id}/emails/{workflow_email_id}/queue<br>/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}<br>/automations/{workflow_id}/removed-subscribers<br>/batches<br>/batches/{batch_id}<br>/batch-webhooks<br>/batch-webhooks/{batch_webhook_id}<br>/campaign-folders<br>/campaign-folders/{folder_id}<br>/campaigns<br>/campaigns/{campaign_id}<br>/campaigns/{campaign_id}/content<br>/campaigns/{campaign_id}/feedback<br>/campaigns/{campaign_id}/feedback/{feedback_id}<br>/campaigns/{campaign_id}/send-checklist<br>/conversations<br>/conversations/{conversation_id}<br>/conversations/{conversation_id}/messages<br>/conversations/{conversation_id}/messages/{message_id}<br>/ecommerce/stores<br>/ecommerce/stores/{store_id}<br>/ecommerce/stores/{store_id}/carts/{cart_id}/lines<br>/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}<br>/ecommerce/stores/{store_id}/customers<br>/ecommerce/stores/{store_id}/customers/{customer_id}<br>/ecommerce/stores/{store_id}/orders<br>/ecommerce/stores/{store_id}/orders/{order_id}<br>/ecommerce/stores/{store_id}/orders/{order_id}/lines<br>/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}<br>/ecommerce/stores/{store_id}/products<br>/ecommerce/stores/{store_id}/products/{product_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/images<br>/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/variants<br>/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}<br>/file-manager/files<br>/file-manager/files/{file_id}<br>/file-manager/folders<br>/file-manager/folders/{folder_id}<br>/lists<br>/lists/{list_id}<br>/lists/{list_id}/abuse-reports<br>/lists/{list_id}/abuse-reports/{report_id}<br>/lists/{list_id}/activity<br>/lists/{list_id}/clients<br>/lists/{list_id}/growth-history<br>/lists/{list_id}/growth-history/{month}<br>/lists/{list_id}/interest-categories/{interest_category_id}/interests<br>/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}<br>/lists/{list_id}/locations<br>/lists/{list_id}/members<br>/lists/{list_id}/members/{subscriber_hash}<br>/lists/{list_id}/members/{subscriber_hash}/activity<br>/lists/{list_id}/members/{subscriber_hash}/goals<br>/lists/{list_id}/members/{subscriber_hash}/notes<br>/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}<br>/lists/{list_id}/merge-fields<br>/lists/{list_id}/merge-fields/{merge_id}<br>/lists/{list_id}/segments<br>/lists/{list_id}/segments/{segment_id}<br>/lists/{list_id}/segments/{segment_id}/members<br>/lists/{list_id}/signup-forms<br>/lists/{list_id}/webhooks<br>/lists/{list_id}/webhooks/{webhook_id}<br>/reports<br>/reports/{campaign_id}<br>/reports/{campaign_id}/abuse-reports<br>/reports/{campaign_id}/abuse-reports/{report_id}<br>/reports/{campaign_id}/advice<br>/reports/{campaign_id}/click-details<br>/reports/{campaign_id}/click-details/{link_id}<br>/reports/{campaign_id}/click-details/{link_id}/members<br>/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}<br>/reports/{campaign_id}/domain-performance<br>/reports/{campaign_id}/eepurl<br>/reports/{campaign_id}/email-activity<br>/reports/{campaign_id}/email-activity/{subscriber_hash}<br>/reports/{campaign_id}/locations<br>/reports/{campaign_id}/sent-to<br>/reports/{campaign_id}/sent-to/{subscriber_hash}<br>/reports/{campaign_id}/sub-reports<br>/reports/{campaign_id}/unsubscribed<br>/reports/{campaign_id}/unsubscribed/{subscriber_hash}<br>/search-campaigns<br>/search-members<br>/template-folders<br>/template-folders/{folder_id}<br>/templates<br>/templates/{template_id}<br>/templates/{template_id}/default-content<br>/automations/{workflow_id}/emails/{workflow_email_id}<br>/batches/{batch_id}<br>/batch-webhooks/{batch_webhook_id}<br>/campaign-folders/{folder_id}<br>/campaigns/{campaign_id}<br>/campaigns/{campaign_id}/feedback/{feedback_id}<br>/ecommerce/stores/{store_id}<br>/ecommerce/stores/{store_id}/carts/{cart_id}<br>/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}<br>/ecommerce/stores/{store_id}/customers/{customer_id}<br>/ecommerce/stores/{store_id}/orders/{order_id}<br>/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}<br>/ecommerce/stores/{store_id}/products/{product_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}<br>/file-manager/files/{file_id}<br>/file-manager/folders/{folder_id}<br>/lists/{list_id}<br>/lists/{list_id}/interest-categories/{interest_category_id}<br>/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}<br>/lists/{list_id}/members/{subscriber_hash}<br>/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}<br>/lists/{list_id}/merge-fields/{merge_id}<br>/lists/{list_id}/segments/{segment_id}<br>/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}<br>/lists/{list_id}/webhooks/{webhook_id}<br>/template-folders/{folder_id}<br>/templates/{template_id}<br>/campaigns/{campaign_id}/content<br>/ecommerce/stores/{store_id}/customers/{customer_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}<br>/lists/{list_id}/members/{subscriber_hash}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>

### Custom Flow Steps Name

Description of Custom Flow Steps

### Add campaign

This flow step will create a new Mailchimp campaign.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Type</td>
        <td>dropDown</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            There are four types of campaigns you can create in Mailchimp.
        </td>
    </tr>
    <tr>
        <td>List Id</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The unique list id.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

### Add member to list

Add member of a specific Mailchimp list.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>List Id</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The unique list id.
        </td>
    </tr>
    <tr>
        <td>Email Address</td>
        <td>email</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Email address for a subscriber.
        </td>
    </tr>
    <tr>
        <td>Status</td>
        <td>dropDown</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Subscriber's current status.
        </td>
    </tr>
    <tr>
        <td>First Name</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            First Name
        </td>
    </tr>
    <tr>
        <td>Last Name</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Last Name
        </td>
    </tr>
  </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### Get campaign info

Get information about a specific campaign.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Campaign Id</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The unique id for the campaign.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

### List campaigns

Get all campaigns in an account.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### Get lists info

Get information about all lists in the account.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Campaign Id</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The unique id for the campaign.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

### List members info

This flow step will get information about members in a specific Mailchimp list.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>List Id</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The unique ID for the list.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*