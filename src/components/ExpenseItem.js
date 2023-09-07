import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem() {
  const expenseName = "Car Insurance";
  const expensePrice = 27.9;
  const expenseDate = new Date(2023, 9, 7);

  return (
    <div className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2 className="expense-item__name">{expenseName}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
