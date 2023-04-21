# Javascript API

The Javascript API of the mailchimp endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `PATCH`,`POST`,`GET`,`DELETE`,`PUT` requests to the [mailchimp API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.mailchimp.patch('/lists/{list_id}/interest-categories/{interest_category_id}', body)
var response = app.endpoints.mailchimp.patch('/lists/{list_id}/interest-categories/{interest_category_id}')
var response = app.endpoints.mailchimp.post('/file-manager/folders', body)
var response = app.endpoints.mailchimp.post('/file-manager/folders')
var response = app.endpoints.mailchimp.get('/ecommerce/stores/{store_id}/products/{product_id}')
var response = app.endpoints.mailchimp.delete('/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}')
var response = app.endpoints.mailchimp.put('/lists/{list_id}/members/{subscriber_hash}', body)
var response = app.endpoints.mailchimp.put('/lists/{list_id}/members/{subscriber_hash}')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/batch-webhooks/{batch_webhook_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.batchWebhooks.{batchWebhookId}.patch(body)
```
---
* API URL: '/campaign-folders/{folder_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.campaignFolders.{folderId}.patch(body)
```
---
* API URL: '/campaigns/{campaign_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.patch(body)
```
---
* API URL: '/campaigns/{campaign_id}/feedback/{feedback_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.feedback.{feedbackId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/carts/{cart_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.{cartId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.{cartId}.lines.{lineId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/customers/{customer_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.customers.{customerId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/orders/{order_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.{orderId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.{orderId}.lines.{lineId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.images.{imageId}.patch(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.variants.{variantId}.patch(body)
```
---
* API URL: '/file-manager/files/{file_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.fileManager.files.{fileId}.patch(body)
```
---
* API URL: '/file-manager/folders/{folder_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.fileManager.folders.{folderId}.patch(body)
```
---
* API URL: '/lists/{list_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.{listId}.patch(body)
```
---
* API URL: '/lists/{list_id}/interest-categories/{interest_category_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.{interestCategoryId}.patch(body)
```
---
* API URL: '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.{interestCategoryId}.interests.{interestId}.patch(body)
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.patch(body)
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.notes.{noteId}.patch(body)
```
---
* API URL: '/lists/{list_id}/merge-fields/{merge_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.{listId}.mergeFields.{mergeId}.patch(body)
```
---
* API URL: '/lists/{list_id}/segments/{segment_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.{segmentId}.patch(body)
```
---
* API URL: '/lists/{list_id}/webhooks/{webhook_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.lists.{listId}.webhooks.{webhookId}.patch(body)
```
---
* API URL: '/template-folders/{folder_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.templateFolders.{folderId}.patch(body)
```
---
* API URL: '/templates/{template_id}'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.mailchimp.templates.{templateId}.patch(body)
```
---
* API URL: '/authorized-apps'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.authorizedApps.post(body)
```
---
* API URL: '/automations/{workflow_id}/actions/pause-all-emails'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.actions.pauseAllEmails.post(body)
```
---
* API URL: '/automations/{workflow_id}/actions/start-all-emails'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.actions.startAllEmails.post(body)
```
---
* API URL: '/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.emails.{workflowEmailId}.actions.pause.post(body)
```
---
* API URL: '/automations/{workflow_id}/emails/{workflow_email_id}/actions/start'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.emails.{workflowEmailId}.actions.start.post(body)
```
---
* API URL: '/automations/{workflow_id}/emails/{workflow_email_id}/queue'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.emails.{workflowEmailId}.queue.post(body)
```
---
* API URL: '/automations/{workflow_id}/removed-subscribers'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.removedSubscribers.post(body)
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
* API URL: '/campaigns/{campaign_id}/actions/cancel-send'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.actions.cancelSend.post(body)
```
---
* API URL: '/campaigns/{campaign_id}/actions/pause'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.actions.pause.post(body)
```
---
* API URL: '/campaigns/{campaign_id}/actions/replicate'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.actions.replicate.post(body)
```
---
* API URL: '/campaigns/{campaign_id}/actions/resume'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.actions.resume.post(body)
```
---
* API URL: '/campaigns/{campaign_id}/actions/schedule'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.actions.schedule.post(body)
```
---
* API URL: '/campaigns/{campaign_id}/actions/send'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.actions.send.post(body)
```
---
* API URL: '/campaigns/{campaign_id}/actions/test'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.actions.test.post(body)
```
---
* API URL: '/campaigns/{campaign_id}/actions/unschedule'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.actions.unschedule.post(body)
```
---
* API URL: '/campaigns/{campaign_id}/feedback'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.feedback.post(body)
```
---
* API URL: '/conversations/{conversation_id}/messages'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.conversations.{conversationId}.messages.post(body)
```
---
* API URL: '/ecommerce/stores'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.post(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/carts'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.post(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/carts/{cart_id}'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.{cartId}.post(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.{cartId}.lines.post(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/customers'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.customers.post(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/orders'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.post(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/products'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.post(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/images'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.images.post(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/variants'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.variants.post(body)
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
* API URL: '/lists/{list_id}'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.post(body)
```
---
* API URL: '/lists/{list_id}/interest-categories'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.post(body)
```
---
* API URL: '/lists/{list_id}/interest-categories/{interest_category_id}'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.{interestCategoryId}.post(body)
```
---
* API URL: '/lists/{list_id}/interest-categories/{interest_category_id}/interests'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.{interestCategoryId}.interests.post(body)
```
---
* API URL: '/lists/{list_id}/members'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.post(body)
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}/notes'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.notes.post(body)
```
---
* API URL: '/lists/{list_id}/merge-fields'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.mergeFields.post(body)
```
---
* API URL: '/lists/{list_id}/segments'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.post(body)
```
---
* API URL: '/lists/{list_id}/segments/{segment_id}'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.{segmentId}.post(body)
```
---
* API URL: '/lists/{list_id}/segments/{segment_id}/members'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.{segmentId}.members.post(body)
```
---
* API URL: '/lists/{list_id}/signup-forms'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.signupForms.post(body)
```
---
* API URL: '/lists/{list_id}/webhooks'
* HTTP Method: 'POST'
```javascript
app.endpoints.mailchimp.lists.{listId}.webhooks.post(body)
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
* API URL: '/authorized-apps/{app_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.authorizedApps.{appId}.get()
```
---
* API URL: '/automations'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.get()
```
---
* API URL: '/automations/{workflow_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.get()
```
---
* API URL: '/automations/{workflow_id}/emails'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.emails.get()
```
---
* API URL: '/automations/{workflow_id}/emails/{workflow_email_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.emails.{workflowEmailId}.get()
```
---
* API URL: '/automations/{workflow_id}/emails/{workflow_email_id}/queue'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.emails.{workflowEmailId}.queue.get()
```
---
* API URL: '/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.emails.{workflowEmailId}.queue.{subscriberHash}.get()
```
---
* API URL: '/automations/{workflow_id}/removed-subscribers'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.removedSubscribers.get()
```
---
* API URL: '/batches'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.batches.get()
```
---
* API URL: '/batches/{batch_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.batches.{batchId}.get()
```
---
* API URL: '/batch-webhooks'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.batchWebhooks.get()
```
---
* API URL: '/batch-webhooks/{batch_webhook_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.batchWebhooks.{batchWebhookId}.get()
```
---
* API URL: '/campaign-folders'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaignFolders.get()
```
---
* API URL: '/campaign-folders/{folder_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaignFolders.{folderId}.get()
```
---
* API URL: '/campaigns'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.get()
```
---
* API URL: '/campaigns/{campaign_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.get()
```
---
* API URL: '/campaigns/{campaign_id}/content'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.content.get()
```
---
* API URL: '/campaigns/{campaign_id}/feedback'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.feedback.get()
```
---
* API URL: '/campaigns/{campaign_id}/feedback/{feedback_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.feedback.{feedbackId}.get()
```
---
* API URL: '/campaigns/{campaign_id}/send-checklist'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.sendChecklist.get()
```
---
* API URL: '/conversations'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.conversations.get()
```
---
* API URL: '/conversations/{conversation_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.conversations.{conversationId}.get()
```
---
* API URL: '/conversations/{conversation_id}/messages'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.conversations.{conversationId}.messages.get()
```
---
* API URL: '/conversations/{conversation_id}/messages/{message_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.conversations.{conversationId}.messages.{messageId}.get()
```
---
* API URL: '/ecommerce/stores'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.get()
```
---
* API URL: '/ecommerce/stores/{store_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.{cartId}.lines.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.{cartId}.lines.{lineId}.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/customers'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.customers.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/customers/{customer_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.customers.{customerId}.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/orders'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/orders/{order_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.{orderId}.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/orders/{order_id}/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.{orderId}.lines.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.{orderId}.lines.{lineId}.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/products'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/images'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.images.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.images.{imageId}.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/variants'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.variants.get()
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.variants.{variantId}.get()
```
---
* API URL: '/file-manager/files'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.fileManager.files.get()
```
---
* API URL: '/file-manager/files/{file_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.fileManager.files.{fileId}.get()
```
---
* API URL: '/file-manager/folders'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.fileManager.folders.get()
```
---
* API URL: '/file-manager/folders/{folder_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.fileManager.folders.{folderId}.get()
```
---
* API URL: '/lists'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.get()
```
---
* API URL: '/lists/{list_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.get()
```
---
* API URL: '/lists/{list_id}/abuse-reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.abuseReports.get()
```
---
* API URL: '/lists/{list_id}/abuse-reports/{report_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.abuseReports.{reportId}.get()
```
---
* API URL: '/lists/{list_id}/activity'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.activity.get()
```
---
* API URL: '/lists/{list_id}/clients'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.clients.get()
```
---
* API URL: '/lists/{list_id}/growth-history'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.growthHistory.get()
```
---
* API URL: '/lists/{list_id}/growth-history/{month}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.growthHistory.{month}.get()
```
---
* API URL: '/lists/{list_id}/interest-categories/{interest_category_id}/interests'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.{interestCategoryId}.interests.get()
```
---
* API URL: '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.{interestCategoryId}.interests.{interestId}.get()
```
---
* API URL: '/lists/{list_id}/locations'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.locations.get()
```
---
* API URL: '/lists/{list_id}/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.get()
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.get()
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}/activity'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.activity.get()
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}/goals'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.goals.get()
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}/notes'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.notes.get()
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.notes.{noteId}.get()
```
---
* API URL: '/lists/{list_id}/merge-fields'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.mergeFields.get()
```
---
* API URL: '/lists/{list_id}/merge-fields/{merge_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.mergeFields.{mergeId}.get()
```
---
* API URL: '/lists/{list_id}/segments'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.get()
```
---
* API URL: '/lists/{list_id}/segments/{segment_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.{segmentId}.get()
```
---
* API URL: '/lists/{list_id}/segments/{segment_id}/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.{segmentId}.members.get()
```
---
* API URL: '/lists/{list_id}/signup-forms'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.signupForms.get()
```
---
* API URL: '/lists/{list_id}/webhooks'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.webhooks.get()
```
---
* API URL: '/lists/{list_id}/webhooks/{webhook_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.lists.{listId}.webhooks.{webhookId}.get()
```
---
* API URL: '/reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.get()
```
---
* API URL: '/reports/{campaign_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.get()
```
---
* API URL: '/reports/{campaign_id}/abuse-reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.abuseReports.get()
```
---
* API URL: '/reports/{campaign_id}/abuse-reports/{report_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.abuseReports.{reportId}.get()
```
---
* API URL: '/reports/{campaign_id}/advice'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.advice.get()
```
---
* API URL: '/reports/{campaign_id}/click-details'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.clickDetails.get()
```
---
* API URL: '/reports/{campaign_id}/click-details/{link_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.clickDetails.{linkId}.get()
```
---
* API URL: '/reports/{campaign_id}/click-details/{link_id}/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.clickDetails.{linkId}.members.get()
```
---
* API URL: '/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.clickDetails.{linkId}.members.{subscriberHash}.get()
```
---
* API URL: '/reports/{campaign_id}/domain-performance'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.domainPerformance.get()
```
---
* API URL: '/reports/{campaign_id}/eepurl'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.eepurl.get()
```
---
* API URL: '/reports/{campaign_id}/email-activity'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.emailActivity.get()
```
---
* API URL: '/reports/{campaign_id}/email-activity/{subscriber_hash}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.emailActivity.{subscriberHash}.get()
```
---
* API URL: '/reports/{campaign_id}/locations'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.locations.get()
```
---
* API URL: '/reports/{campaign_id}/sent-to'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.sentTo.get()
```
---
* API URL: '/reports/{campaign_id}/sent-to/{subscriber_hash}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.sentTo.{subscriberHash}.get()
```
---
* API URL: '/reports/{campaign_id}/sub-reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.subReports.get()
```
---
* API URL: '/reports/{campaign_id}/unsubscribed'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.unsubscribed.get()
```
---
* API URL: '/reports/{campaign_id}/unsubscribed/{subscriber_hash}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.reports.{campaignId}.unsubscribed.{subscriberHash}.get()
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
* API URL: '/template-folders/{folder_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templateFolders.{folderId}.get()
```
---
* API URL: '/templates'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templates.get()
```
---
* API URL: '/templates/{template_id}'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templates.{templateId}.get()
```
---
* API URL: '/templates/{template_id}/default-content'
* HTTP Method: 'GET'
```javascript
app.endpoints.mailchimp.templates.{templateId}.defaultContent.get()
```
---
* API URL: '/automations/{workflow_id}/emails/{workflow_email_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.automations.{workflowId}.emails.{workflowEmailId}.delete()
```
---
* API URL: '/batches/{batch_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.batches.{batchId}.delete()
```
---
* API URL: '/batch-webhooks/{batch_webhook_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.batchWebhooks.{batchWebhookId}.delete()
```
---
* API URL: '/campaign-folders/{folder_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.campaignFolders.{folderId}.delete()
```
---
* API URL: '/campaigns/{campaign_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.delete()
```
---
* API URL: '/campaigns/{campaign_id}/feedback/{feedback_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.feedback.{feedbackId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}/carts/{cart_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.{cartId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.carts.{cartId}.lines.{lineId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}/customers/{customer_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.customers.{customerId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}/orders/{order_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.{orderId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.orders.{orderId}.lines.{lineId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.images.{imageId}.delete()
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.variants.{variantId}.delete()
```
---
* API URL: '/file-manager/files/{file_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.fileManager.files.{fileId}.delete()
```
---
* API URL: '/file-manager/folders/{folder_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.fileManager.folders.{folderId}.delete()
```
---
* API URL: '/lists/{list_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.delete()
```
---
* API URL: '/lists/{list_id}/interest-categories/{interest_category_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.{interestCategoryId}.delete()
```
---
* API URL: '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.interestCategories.{interestCategoryId}.interests.{interestId}.delete()
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.delete()
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.notes.{noteId}.delete()
```
---
* API URL: '/lists/{list_id}/merge-fields/{merge_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.mergeFields.{mergeId}.delete()
```
---
* API URL: '/lists/{list_id}/segments/{segment_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.{segmentId}.delete()
```
---
* API URL: '/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.segments.{segmentId}.members.{subscriberHash}.delete()
```
---
* API URL: '/lists/{list_id}/webhooks/{webhook_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.lists.{listId}.webhooks.{webhookId}.delete()
```
---
* API URL: '/template-folders/{folder_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.templateFolders.{folderId}.delete()
```
---
* API URL: '/templates/{template_id}'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.mailchimp.templates.{templateId}.delete()
```
---
* API URL: '/campaigns/{campaign_id}/content'
* HTTP Method: 'PUT'
```javascript
app.endpoints.mailchimp.campaigns.{campaignId}.content.put(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/customers/{customer_id}'
* HTTP Method: 'PUT'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.customers.{customerId}.put(body)
```
---
* API URL: '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}'
* HTTP Method: 'PUT'
```javascript
app.endpoints.mailchimp.ecommerce.stores.{storeId}.products.{productId}.variants.{variantId}.put(body)
```
---
* API URL: '/lists/{list_id}/members/{subscriber_hash}'
* HTTP Method: 'PUT'
```javascript
app.endpoints.mailchimp.lists.{listId}.members.{subscriberHash}.put(body)
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

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*