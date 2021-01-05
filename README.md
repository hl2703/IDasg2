# IDasg2
Build a front-end website that allows budget tracking
External user’s goal:
Be able to track spending information and retrieve information
Site owner's goal:
Get users to store their daily expenses and track their spending
                                                
Potential features to include:
•	track, view, sort, delete, update and compare your income/expenses over a period of time.
•	Use localstorage to store spending information
•	Using charts to display information and provide comparison

Overall description of app:
An app designed to track your income and expenses in a simple way. You can track, view, sort, delete, update and compare your income/expenses over a period of time.
This app will make use of the local storage api to store and retrieve record details , the ip api to display location and currency of record and the chart.js api to display the details over a period of time in the form of a chart.

Deisgn Process:
The main design of this app is a bee-themed design. This is to provide a visual appeal to users regardless of age or gender. There is a main menu at the main page for users to nagivate the features of the app. The overall design of the app is simple so that users can find each feature easily and will not be overwhelmed with too much content in the website. Each feature has an icon to visually represent it for easy navigation.

Existing Features
1.	Create record
To get started, enter a new record by clicking the “create new record” button. 
The ip api is used to display location of record as well as the currency used.

Fill in the following input fields:
•   Record Title (required so that user can identify each record)
-	At least 3 characters required, cannot be left blank

•	 Category of expense(required for organising expenses for easy viewing and tracking)
-	 Food
-	 Transport
-	 Groceries
-	 Leisure
-	 Others

•	Note(optional as not all records need a note)

•	 Date of Record (required so that user can track and compare records by date)

•	Payment Mode (required for organising expense records by payment mode)
-	Cash
-	 Credit Card
-	 NETs
-	 Others

•	amount (required to track amount spent or received )
-	input greater than 0 required

•	Category of record(required to sort records into income or expense)
-	Either Income/expense
When you are done, click the “save” button. The data will be stored in the local storage.
Click the “back” button to go back to the home page.

2.	View records:
To view the records created, click the “view records” button.
The records will be displayed in a table.
1. Update records
-	Select the record title from dropdown list
-	Details of the record will be displayed in the form options
-	Update the details accordingly and click save
-	You can view the updated record in the “view records” section.

4. delete records
-   Select a record to delete from the dropdown list
-	The details of the record will be displayed
-	Check if record is the right one being selected before deleting 
-	Click “delete record” to delete the selected record.
-	Click “delete all records” to clear all data of records.

5. summary of records
-	View monthly income and expense of all records
-	View savings for each month
-	Line chart displayed to compare income and expense of all the months

5. main menu
- list main features of the app

6. validation of user input for records

7. Usage of APIs:
- IP API:
This api was used to display the location of record and the currency used.
- Chart.JS API:
This API was used to provide comparison for the income and expense records over the months. It allows visual comparsion of the data so that users can see the trend in the spendings and income such as the highest expenditure etc. The chart displayed will be based on the user inputs 
- local storage api
This api was used to store and access the data of the records.

Potential features to include:
- yearly comparison of records

Technologies used:
- HTML to create the webpages
- CSS to style the webpages
- Javascript to add user interactivity to the webpages
- -Jquery to simplify DOM manipulation

Testing
- W3C markup validator: 
  https://validator.w3.org/
- CSS validator
  https://jigsaw.w3.org/css-validator/.
- Javascript validator:
  https://codebeautify.org/jsvalidate
- form validation
  
Github link:https://hl2703.github.io/IDasg2/

credits:
https://repl.it/@malcolmyam/wk0x-ipapi-json from week9 materials
wk08-simple-bootstrap from wk 8 learning materials
Usage of localstorage: https://www.w3schools.com/js/js_api_web_storage.asp

