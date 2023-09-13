import React from "react";
import classes from "./Amount.module.scss";
const Amount = ({ incomeValue, expenseValue }) => {
  return (
    <div className={classes.root}>
      <div className={classes.heading}>Your Balance</div>
      <div className={classes.amount}>₹{incomeValue - expenseValue}</div>
    </div>
  );
};
export default Amount;
