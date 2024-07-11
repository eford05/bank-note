"use strict";
// Keep track of new Rows
let currentIndex = 0;
// Set up US currency formatter
let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// Target form
const budgetForm = document.forms["budget-form"];

// Target Balance Buttons
const btnBalance = document.querySelector("#btn-balance");
const btnIncome = document.querySelector("#btn-income");
const btnExpense = document.querySelector("#btn-expense");

budgetForm.addEventListener("submit", function (e) {
  // Prevent form from being sent
  e.preventDefault();

  // Select input values
  const description = budgetForm.querySelector('input[type="text"]').value;
  const amount = parseFloat(
    budgetForm.querySelector('input[type="number"').value
  ).toFixed(2);
  const date = budgetForm.querySelector('input[type="date"]').value;

  // Add table row and cells
  addTableRow(description, amount, date);
});

// Add Click Events to Balance, Income, and Expense buttons
btnBalance.addEventListener("click", () => {
  // Select the tbody
  let expenseTable = document.querySelector("#expense-table");
  let rows = expenseTable.children;

  Array.from(rows).forEach((row) => {
    row.style.display = "table-row";
  });
});

btnIncome.addEventListener("click", () => {
  // Select the tbody
  let expenseTable = document.querySelector("#expense-table");
  let rows = expenseTable.children;

  Array.from(rows).forEach((row) => {
    if (!row.classList.contains("income")) {
      row.style.display = "none";
    } else {
      row.style.display = "table-row";
    }
  });
});

btnExpense.addEventListener("click", () => {
  // Select the tbody
  let expenseTable = document.querySelector("#expense-table");
  let rows = expenseTable.children;

  Array.from(rows).forEach((row) => {
    if (!row.classList.contains("expense")) {
      row.style.display = "none";
    } else {
      row.style.display = "table-row";
    }
  });
});

// Add row when budget form is submitted
let addTableRow = (value, amount, date) => {
  let expenseTable = document.getElementById("expense-table");
  let row = expenseTable.insertRow(currentIndex);
  let cellDesc = row.insertCell(0);
  let cellDate = row.insertCell(1);
  let cellAmt = row.insertCell(2);

  cellDesc.innerHTML = value;
  cellAmt.innerHTML = amount;
  cellDate.innerHTML = date;

  // Add class of income or expense to new table row
  amount > 0 ? row.classList.add("income") : row.classList.add("expense");

  currentIndex++;
};
