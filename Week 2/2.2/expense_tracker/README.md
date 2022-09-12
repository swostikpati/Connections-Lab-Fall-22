# Project Documentation - Expense Tracker Application
 
//add video

**Please view the application in mobile-view.**

Working Link: https://swostikpati.github.io/Connections-Lab-Fall-22/Week%202/2.2/expense_tracker/

This is a expense tracking application designed for small-screen devices. It is a very utilitarian application especially catered for the financially inclined audience. Keeping a track of daily expenses is very important in today's world in order to lead a peaceful life. The application gives the user several options to choose from while tracking each expense or income. It also displays the net amount on the screen.

## Wireframing

This is the wireframe of the project. The design is very minimilastic in order to help the user get the info they need pretty easily. While I have mostly stuck to the initial wireframe, there are some changes here and there that have been made.

## Summary Table

![image](https://user-images.githubusercontent.com/67205637/189606471-be0fa567-30a3-4d29-85ad-6127d941578c.png)

The interface begins with a summary table of the total expenses and the total income. It also gives the net total amount left with the user. The values are color-coded in order to make the process simpler for the user to extract the key details every time they open the app.

## Input Form

![image](https://user-images.githubusercontent.com/67205637/189606630-c5cba38d-1075-44b5-8e6a-7dde358f9598.png)

This is perhaps the most important part of the application. It was designed very systematically to allow the user to enter expenses and income under different categories. The box accepts floating numbers upto two decimal places. All the fields of the form are made required. The second step for the user is to either select credit or debit to indicate whether they spent money or earned money. Based on this selection a dropdown menu would appear allowing them to select a specific category. These dropdown menus differ based on the whether the amount is credit or debit. After finishing entering information, the user would then be able to submit the form

## Income/Expenditure Log

![image](https://user-images.githubusercontent.com/67205637/189606837-456bee92-d542-43c7-808a-82f46ae5afdf.png)

The next section of the application is a table which keep all the records of income and expenditure. Each record of the table keeps the amount spent/earned and the category. The user also has the option of deleting any of the records, which automatically updates the amount in the summary table.

## Challenges and Further Improvements

One of the biggest challenges I faced was to take input using a form. There were so many complicated things involved in the working of a form. I read lots of forum posts and seeked help from several sites whenever I faced a problem. "event.preventDefault()" was my greatest learning that stopped the website from refreshing. 

Making the app extensively user-interactive was also a challenge which allowed me to understand the working of JS events even better. Updating values allowed me to understand the different layers of the DOM. All through this, the chrome developer tools were of immense help.

The major improvement that I can suggest is associated with styling. I tried out a lot of color themes, but nothing seemed to work. I definitely need to completely overhaul the styling of the app. The state currently is very basic and will requrie massive improvement. Since this assignment was more about understanding JS interactions and the DOM, I didn't focus much on the design aspect. 

Including a donut chart around the total amount in the summary table would also be very helpful and would make the app much more professional. This was present in the initial wireframe, but I was unable to employ it in the project due to its complexity.
