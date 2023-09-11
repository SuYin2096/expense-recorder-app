import React from "react";

function ExpenseDate(props) {
  const expenseDate = props.date;
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const year = expenseDate.getFullYear();
  const date = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{date}</div>
    </div>
  );
}

export default ExpenseDate;
