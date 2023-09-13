import React from "react";
import classes from "./BalanceSheet.module.scss";
const BalanceSheet = ({ incomeValue, expenseValue }) => {
  return (
    <div className={classes.root}>
      <div className={classes.incomeWrapper}>
        <div className={classes.income}>Income</div>
        <div className={classes.incomeValue}>₹{incomeValue}</div>
      </div>
      <div className={classes.expenseWrapper}>
        <div className={classes.expense}>expense</div>
        <div className={classes.expenseValue}>₹{expenseValue}</div>
      </div>
    </div>
  );
};
export default BalanceSheet;
