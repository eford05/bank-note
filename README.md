# BankNote

The BankNote App is a personal finance tracker.

## How BankNote Works

The application works by entering values for description, date, and amount. The description takes text input, which should describe the income or expense. The date field takes the date of the income or expense. The amount field accepts positve or negative numbers for the amount of the income or expense. When the user submits their input the data is inserted into a table. The user can select the budget button, the income button, and the expense button to view each category.

## The Code

The form inputs listen for the submit event, when the form is submitted a new table row with cells for description, date, and amount are created. Each of the buttons at the top of page have a click event which calls the same function used to create a new table row, only it uses it to filter based on budget, income, or expense.
