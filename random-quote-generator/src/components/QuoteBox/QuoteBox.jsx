import React, { useEffect, useState } from "react";
import styles from "./QuoteBox.module.css";

const QuoteBox = ({ handleSubmit, deleteClicked }) => {
  const [quote, setQuote] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    handleSubmit(quote);
  }, [quote]);

  const fetchData = async () => {
    const apiKey = "bWbwxDdtS9Bzsouymirguw==uZhWEMRD79j4eKVg";
    const apiUrl = "https://api.api-ninjas.com/v1/quotes";

    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
        },
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setLoading(false);
      setQuote(data[0].quote);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={["mb-4", styles.quoteBox].join(" ")}>
        {isLoading && (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        {quote && !deleteClicked && <p>{quote}</p>}
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
