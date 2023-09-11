import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses-items">
      <ExpenseItem item={props.item[0]}></ExpenseItem>
      <ExpenseItem item={props.item[1]}></ExpenseItem>
      <ExpenseItem item={props.item[2]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
