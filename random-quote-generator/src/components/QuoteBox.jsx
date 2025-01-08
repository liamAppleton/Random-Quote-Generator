import React from "react";

const QuoteBox = () => {
  return (
    <form action="">
      <div className="mb-3">
        <input type="text" className="form-control" readOnly="true" />
      </div>
      <button className="btn btn-primary">Generate quote</button>
    </form>
  );
};

export default QuoteBox;
