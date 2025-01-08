import React, { useEffect, useState } from "react";
import styles from "./QuoteBox.module.css";

const QuoteBox = ({ handleSubmit }) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    handleSubmit(quote);
  }, [quote]);

  const fetchData = async () => {
    const apiKey = "bWbwxDdtS9Bzsouymirguw==uZhWEMRD79j4eKVg";
    const apiUrl = "https://api.api-ninjas.com/v1/quotes";
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
      setQuote(data[0].quote);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={["mb-4", styles.quoteBox].join(" ")}>
        {quote && <p>{quote}</p>}
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          fetchData();
        }}
        className="btn btn-primary"
      >
        Get quote
      </button>
    </div>
  );
};

export default QuoteBox;
