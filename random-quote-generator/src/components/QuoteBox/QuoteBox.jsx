import React, { useEffect, useState } from "react";
import styles from "./QuoteBox.module.css";

const QuoteBox = ({ handleSubmit, deleteClicked }) => {
  const [quote, setQuote] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        headers: { "X-Api-Key": apiKey },
      });
      console.log(response);
      if (!response.ok) {
        setLoading(false);
        setError(response.statusText);
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setLoading(false);
      setQuote(data[0].quote);
    } catch (error) {
      setLoading(false);
      setError(response.statusText);
    }

    setError("");
  };

  return (
    <div className={styles.container}>
      <div className={["mb-4", styles.quoteBox].join(" ")}>
        {isLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {quote && !deleteClicked && <p>{quote}</p>}
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          fetchData();
        }}
      >
        Get quote
      </button>
    </div>
  );
};

export default QuoteBox;
