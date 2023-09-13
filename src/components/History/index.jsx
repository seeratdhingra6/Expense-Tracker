import React from "react";
import classes from "./History.module.scss";
import { Link } from "react-router-dom";
const History = ({ transactions }) => {
  const [first, second, ...rest] = transactions;
  const displayTransactions =
    transactions.length > 2 ? [first, second] : transactions;
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.history}>History</div>
      </div>
      <div>
        <ul className={classes.renderedDataWrapper}>
          {displayTransactions.map((transaction) => {
            return (
              <li
                key={transaction.id}
                className={
                  transaction.transactionType === "income"
                    ? classes.incomeType
                    : classes.expenseType
                }
              >
                <div className={classes.title}>{transaction.title}</div>
                <div className={classes.amount}>
                  {transaction.transactionType === "income" ? "+" : "-"} ₹
                  {transaction.amount}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {transactions.length === 0 && (
        <div className={classes.historyTitle}>No Transaction History</div>
      )}
      {transactions.length > 2 && (
        <Link to="/transactions" className={classes.linkHistory}>
          Full history
        </Link>
      )}
    </div>
  );
};

export default History;
