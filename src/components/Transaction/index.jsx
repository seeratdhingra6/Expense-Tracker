import React from "react";
import { useState } from "react";
import classes from "./Transaction.module.scss";
const Transaction = ({ transactions, setTransactions }) => {
  const [transactionType, setTransactionType] = useState("income");
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const WORD_LIMIT = 25;
  const expenditureTracker = (event) => {
    setShowErrors(false);
    if (event.target.value.length < WORD_LIMIT) {
      setTitle(event.target.value);
    }
  };
  const inputTracker = (event) => {
    setShowErrors(false);
    setAmount(event.target.value);
  };
  const handleChange = (trnxType) => {
    setTransactionType(trnxType);
  };
  const addTransaction = () => {
    setShowErrors(true);
    if (amount !== 0 && title !== "") {
      setTransactions((prev) => {
        return [
          ...prev,
          {
            /**
             * todo:will remove hardcoding
             */
            id: 0,
            amount: amount,
            transactionType: transactionType,
            title: title,
          },
        ];
      });
      setAmount(0);
      setTitle("");
      setShowErrors(false);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <label className={classes.label}>Enter your Amount</label>
        <input
          type="number"
          className={classes.textArea}
          placeholder="enter your amount"
          onChange={(event) => inputTracker(event)}
          value={amount}
        />
        {Number(amount) === 0 && showErrors && (
          <div className={classes.alertMessage}>*Enter a valid amount</div>
        )}
        <div className={classes.flexBox}>
          <div>
            <label className={classes.label}>Transaction Type: </label>
          </div>
          <div className={classes.valuesWrapper}>
            <label>
              <input
                type="radio"
                value="income"
                name="transactionType"
                onChange={() => handleChange("income")}
                checked={transactionType === "income"}
              />
              Income
            </label>
            <label>
              <input
                type="radio"
                value="expense"
                name="transactionType"
                onChange={() => handleChange("expense")}
                checked={transactionType === "expense"}
              />
              Expense
            </label>
          </div>
        </div>
        <label className={classes.label}>Enter your Text</label>
        <input
          type="text"
          className={classes.expenditure}
          placeholder="Enter Your Text!"
          onChange={(event) => expenditureTracker(event)}
          value={title}
        />
        {title === "" && showErrors && (
          <div className={classes.alertMessage}>*Enter a valid text</div>
        )}
      </div>
      <button className={classes.button} onClick={addTransaction}>
        Add Transaction
      </button>
    </div>
  );
};
export default Transaction;
