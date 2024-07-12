"use strict";
// Keep track of new Rows
let currentIndex = 0;

let date = new Date().toLocaleDateString();

// Target form
const budgetForm = document.forms["budget-form"];

// Target All Balance Buttons
let balanceButtons = document.querySelectorAll(".btn-header");

let dashDate = document.querySelector(".dash-date");
dashDate.innerHTML = date;

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

  // Calculate Total
  sumTotal("balance");
});

// Add EventListener to all buttons
balanceButtons.forEach((btn) => {
  // Select the tbody
  let expenseTable = document.querySelector("#expense-table");
  let rows = expenseTable.children;

  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn-balance")) {
      // Display all table rows
      Array.from(rows).forEach((row) => {
        row.style.display = "table-row";
      });
      // Calculate Total
      sumTotal("balance");
    } else if (btn.classList.contains("btn-income")) {
      // Display table rows for income only
      Array.from(rows).forEach((row) => {
        if (!row.classList.contains("income")) {
          row.style.display = "none";
        } else {
          row.style.display = "table-row";
        }
      });
      // Calculate Total Income
      sumTotal("income");
    } else if (btn.classList.contains("btn-expenses")) {
      // Display table rows for expenses only
      Array.from(rows).forEach((row) => {
        if (!row.classList.contains("expense")) {
          row.style.display = "none";
        } else {
          row.style.display = "table-row";
        }
      });
      // Calculate Total Expenses
      sumTotal("expense");
    } else {
      return;
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
  cellAmt.innerHTML = parseFloat(amount).toFixed(2);
  cellDate.innerHTML = date;

  //   Add class amount to cellAmt
  cellAmt.classList.add("amount");

  // Add class of income or expense to new table row
  amount > 0 ? row.classList.add("income") : row.classList.add("expense");

  currentIndex++;
};

// Total amounts from the rows based on the type of total
let sumTotal = (totalType) => {
  // Set up US currency formatter
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let sum = 0.0;
  let total = document.querySelector("#total");
  // Select row amounts for total
  let amounts = document.querySelectorAll(".amount");

  Array.from(amounts).forEach((amount) => {
    amount = parseFloat(amount.innerHTML);

    switch (totalType) {
      case "balance":
        sum += amount;
        break;

      case "income":
        if (amount > 0) {
          sum += amount;
        }
        break;
      case "expense":
        if (amount < 0) {
          sum += amount;
        }
        break;
    }
  });

  // Set the total with sum in currency format
  total.innerHTML = USDollar.format(sum);
};
