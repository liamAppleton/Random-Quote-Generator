import "./App.css";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import FavouritesTable from "./components/FavouritesTable/FavouritesTable";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [deleteClicked, setDelete] = useState(false);

  const deleteQuote = (id) => {
    setQuotes(quotes.filter((q) => q.id !== id));
    setDelete(true);
  };

  return (
    <>
      <div className="mb-5">
        <QuoteBox
          handleSubmit={(quote) => {
            setQuotes([{ id: quotes.length + 1, quote: quote }, ...quotes]);
            if (deleteClicked) {
              setDelete(false);
            }
          }}
          deleteClicked={deleteClicked}
        />
      </div>
      <div className="mb-3">
        <FavouritesTable
          quotes={quotes}
          handleClick={(id) => {
            deleteQuote(id);
          }}
        />
      </div>
    </>
  );
}

export default App;
