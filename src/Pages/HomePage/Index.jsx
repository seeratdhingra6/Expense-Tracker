import React from "react";
import Headers from "../../components/Headers";
import classes from "./HomePage.module.scss";
import Amount from "../../components/Amount";
import BalanceSheet from "../../components/BalanceSheet";
import History from "../../components/History";
import Transaction from "../../components/Transaction";
const HomePage = ({ transactions, setTransactions }) => {
  let incomeValue = 0;
  const incomeTransactions = transactions.filter(
    ({ transactionType }) => transactionType === "income"
  );
  incomeTransactions.forEach((incomeTransaction) => {
    incomeValue += Number(incomeTransaction.amount);
  });
  let expenseValue = 0;
  const expenseTransactions = transactions.filter(
    ({ transactionType }) => transactionType === "expense"
  );
  expenseTransactions.forEach((expenseTransaction) => {
    expenseValue += Number(expenseTransaction.amount);
  });
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.root}>
          <Headers />
          <Amount incomeValue={incomeValue} expenseValue={expenseValue} />
          <BalanceSheet incomeValue={incomeValue} expenseValue={expenseValue} />
          <History transactions={transactions} />
          <Transaction
            setTransactions={setTransactions}
            transactions={transactions}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
