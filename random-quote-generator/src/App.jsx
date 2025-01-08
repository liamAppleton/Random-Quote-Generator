import "./App.css";
import QuoteBox from "./components/QuoteBox";
import FavouritesTable from "./components/FavouritesTable/FavouritesTable";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  console.log(quotes);
  return (
    <>
      <div className="mb-5">
        <QuoteBox
          handleSubmit={(quote) => {
            setQuotes([...quotes, { id: quotes.length + 1, quote: quote }]);
          }}
        />
      </div>
      <div className="mb-3">
        <FavouritesTable quotes={quotes} />
      </div>
    </>
  );
}

export default App;
