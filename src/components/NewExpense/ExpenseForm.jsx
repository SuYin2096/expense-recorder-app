import React from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  return (
    <form>
      <div className="expense-form">
        <div className="expense-form__title">
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div className="expense-form__price">
          <label>Price</label>
          <input type="number"></input>
        </div>
        <div className="expense-form__date">
          <label>Date</label>
          <input type="date"></input>
        </div>
        <div className="expense-form__button">
          <button type="submit">Add Expensse</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
