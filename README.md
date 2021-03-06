# IDasg2
- Idea: 
Build a front-end website that allows budget tracking
- External user’s goal:
Be able to track spending information and retrieve information
- Site owner's goal:
Get users to store their daily expenses and track their spending
                                            
Overall description of app:
An app designed to track your income and expenses in a simple way. You can track, view, sort, delete, update and compare your income/expenses over a period of time.
This app will make use of the local storage api to store and retrieve record details , the ip api to display location and currency of record and the chart.js api to display the details over a period of time in the form of a chart.

Design Process:
The main design of this app is a bee-themed design. This is to provide a visual appeal to users regardless of age or gender. There is a main menu at the main page for users to nagivate the features of the app. The overall design of the app is simple so that users can find each feature easily and will not be overwhelmed with too much content in the website. Each feature has an icon to visually represent it for easy navigation.

Existing Features
1.	Create record
To get started, enter a new record by clicking the “create new record” button. 

Fill in the following input fields:
•   Record Title (required so that user can identify each record)
-	At least 3 characters required, cannot be left blank

•	 Category of expense(required for organising expenses for easy viewing and tracking)
-	 Food
-	 Transport
-	 Groceries
-	 Leisure
-	 Others

•  Note(optional as not all records need a note)

•  Date of Record (required so that user can track and compare records by date)

•	Payment Mode (required for organising expense records by payment mode)
-	Cash
-	Credit Card
-	NETs
-	Others

•	amount (required to track amount spent or received)
-	input greater than 0 required

•	Category of record(required to sort records into income or expense)
-	Either Income/expense
When you are done, click the “save” button. The data will be stored in the local storage.
Click the “back” button to go back to the home page.
The ip api is used to display location of record as well as the currency used.
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
- validate user input in record form:
- validation of tile, date,payment mode and amount input

1. Usage of APIs:
- IP API:
This API was used to display the location of record and the currency used.
- Chart.JS API:
This API was used to provide comparison for the income and expense records over the months. It allows visual comparsion of the data so that users can see the trend in the spendings and income such as the highest expenditure etc. The chart displayed will be based on the user inputs 
- local storage API:
This API was used to store and access the data of the records.

Potential features to include:
- Yearly comparison of records

Technologies used:
- HTML to create the webpages
- CSS to style the webpages
- CSS framework used: Bootstrap
- Javascript to add user interactivity to the webpages
- Jquery to simplify DOM manipulation

Testing
- W3C markup validator: 
  https://validator.w3.org/
- CSS validator
  https://jigsaw.w3.org/css-validator/.
- Javascript validator:
  https://codebeautify.org/jsvalidate
- Form validation testing:
  1. Click on create record
  2. type in title, message "title must be at least 3 characters shown"
  3. left title blank, message "please enter a valid title shown"
  4. left date blank, message "please input date" shown
  5. entered amount as 0, message "enter an amount greater than 0" shown
  6. not all fields of the form entered, alert message "pls enter the fields accordingly" shown
  
Github link:https://hl2703.github.io/IDasg2/

Credits:
- ip api:https://repl.it/@malcolmyam/wk0x-ipapi-json from week9 materials
- bootstrap reference: wk08-simple-bootstrap from wk 8 learning materials
- Usage of localstorage: https://www.w3schools.com/js/js_api_web_storage.asp
- sorting of records: https://www.w3schools.com/howto/howto_js_sort_table.asp
- All images taken from: https://www.flaticon.com/
- chart.js reference: https://www.chartjs.org/docs/latest/
- creating and deleting records, writing to local storage referenced from: https://www.codeproject.com/Articles/753724/JavaScript-Front-End-Web-App-Tutorial-Part
- local storage api referenced from: wk07 learning materials
- form validation referenced from: wk07 learning materials

Done by:
Hannah Loh(P01)
S10186258