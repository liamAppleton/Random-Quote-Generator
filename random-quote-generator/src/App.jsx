import "./App.css";
import QuoteBox from "./components/QuoteBox";
import FavouritesTable from "./components/FavouritesTable/FavouritesTable";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  return (
    <>
      <div className="mb-5">
        <QuoteBox handleSubmit={(quote) => setQuotes([...quotes, quote])} />
      </div>
      <div className="mb-3">
        <FavouritesTable quotes={quotes} />
      </div>
    </>
  );
}

export default App;
