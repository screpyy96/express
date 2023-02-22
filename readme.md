Open Postman and create a new request.
Set the request method to GET.
Set the request URL to http://localhost:8080/api.
Click the Send button to send the GET request to the API and retrieve the list of web project items.

To add a new web project item, set the request method to POST.
Set the request URL to http://localhost:8080/api.
Click the Body tab and select the raw radio button.
Set the body type to JSON.
In the request body, enter the new web project item as a JSON object with the following properties: title, description, and URL.
Click the Send button to send the POST request to the API and add the new web project item to the list.

To delete a web project item with a specific ID, set the request method to DELETE.
Set the request URL to http://localhost:8080/api/:id, where :id is the ID of the web project item you want to delete.
Click the Send button to send the DELETE request to the API and delete the web project item with the specified ID from the list.
To update the title or description of a web project item with a specific ID, set the request method to PUT.

Set the request URL to http://localhost:8080/api/:id, where :id is the ID of the web project item you want to update.
Click the Body tab and select the raw radio button.
Set the body type to JSON.
In the request body, enter the updated title or description property for the web project item as a JSON object.
Click the Send button to send the PUT request to the API and update the web project item with the specified ID in the list.
