// 1. The data: a list of expenses.
//    Each expense is an object with named pieces of information.
const expenses = [
  { description: "Hotel", amount: 4000, paidBy: "You" },
  { description: "Petrol", amount: 2000, paidBy: "Aman" },
  { description: "Dinner", amount: 1200, paidBy: "Riya" },
];

// 2. Find the places on the page where things go
const expenseList = document.getElementById("expense-list");
const totalSpent = document.getElementById("total-spent");

// 3. Go through the expenses one by one, and add each to the page
let total = 0;

for (const expense of expenses) {
  const row = document.createElement("li");

  const left = document.createElement("span");
  left.textContent = expense.description + " (paid by " + expense.paidBy + ")";

  const right = document.createElement("span");
  right.textContent = "₹" + expense.amount;

  row.appendChild(left);
  row.appendChild(right);
  expenseList.appendChild(row);

  // 4. Keep a running total
  total = total + expense.amount;
}

// 5. Show the total at the top
totalSpent.textContent = "Total spent: ₹" + total;
