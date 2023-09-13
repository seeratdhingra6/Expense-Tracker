import React from "react";
import { Link } from "react-router-dom";
import HouseIcon from "../../../../icons/HouseIcon";
import classes from "./FullHistory.module.scss";
const FullHistory = ({ transactions }) => {
  return (
    <div className={classes.body}>
      <div className={classes.rootHistory}>
        <div className={classes.wrapperHistory}>
          <div className={classes.historyHistory}>History</div>
          <Link to="/">
            {" "}
            <HouseIcon height={24} width={24} />
          </Link>
        </div>
        <div className={classes.flexBody}>
          <ul className={classes.renderedDataWrapperHistory}>
            {transactions.map((transaction) => {
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
      </div>
    </div>
  );
};

export default FullHistory;
