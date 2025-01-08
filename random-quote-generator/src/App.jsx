import "./App.css";
import QuoteBox from "./components/QuoteBox";
import FavouritesTable from "./components/FavouritesTable/FavouritesTable";

function App() {
  return (
    <>
      <div className="mb-3">
        <QuoteBox handleSubmit={(quote) => console.log(quote)} />
      </div>
      <div className="mb-3">
        <FavouritesTable />
      </div>
    </>
  );
}

export default App;
