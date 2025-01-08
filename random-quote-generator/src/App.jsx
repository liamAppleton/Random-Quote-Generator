import "./App.css";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import FavouritesTable from "./components/FavouritesTable/FavouritesTable";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [deleteClicked, setDelete] = useState(false);
  const [copyId, setId] = useState(-1);

  const deleteQuote = (id) => {
    setQuotes(quotes.filter((q) => q.id !== id));
    setDelete(true);
  };

  const clickedCopy = (id) => {
    setId(id);
    setTimeout(() => setId(-1), 1000);
    const quote = quotes.filter((q) => q.id === id);
    console.log(quote);
    navigator.clipboard.writeText(quote[0].quote);
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
      <div className="mb-3 container">
        <FavouritesTable
          quotes={quotes}
          handleClick={(id) => {
            deleteQuote(id);
          }}
          clickedCopy={clickedCopy}
          clickedCopyId={copyId}
        />
      </div>
    </>
  );
}

export default App;
