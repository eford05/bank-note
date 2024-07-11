"use strict";

// Target form
const budgetForm = document.forms["budget-form"];

budgetForm.addEventListener("submit", function (e) {
  //prevent form from being sent
  e.preventDefault();

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const description = budgetForm.querySelector('input[type="text"]').value;

  const amount = parseFloat(
    budgetForm.querySelector('input[type="number"').value
  );

  const date = budgetForm.querySelector('input[type="date"]').value;

  console.log(`Description: ${description}`);
  console.log(`Amount: ${USDollar.format(amount)}`);
  console.log(`Date: ${date}`);
});
