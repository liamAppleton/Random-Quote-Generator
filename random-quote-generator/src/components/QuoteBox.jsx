import React from "react";
import styles from "./QuoteBox.module.css";

const QuoteBox = () => {
  return (
    <div>
      <form action="" className={styles.container}>
        <div className="mb-3">
          <input type="text" className="form-control" readOnly="true" />
        </div>
        <button className="btn btn-primary">Generate quote</button>
      </form>
    </div>
  );
};

export default QuoteBox;
