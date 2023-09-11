import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__name">{props.item.title}</h2>
        <div className="expense-item__price">${props.item.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
