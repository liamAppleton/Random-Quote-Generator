import React from "react";
import styles from "./QuoteBox.module.css";

const QuoteBox = () => {
  const apiKey = "bWbwxDdtS9Bzsouymirguw==uZhWEMRD79j4eKVg";
  const apiUrl = "https://api.api-ninjas.com/v1/quotes";

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
      >
        <div className="mb-3">
          <input type="text" className="form-control" readOnly={true} />
        </div>
        <button type="submit" className="btn btn-primary">
          Generate quote
        </button>
      </form>
    </div>
  );
};

export default QuoteBox;
