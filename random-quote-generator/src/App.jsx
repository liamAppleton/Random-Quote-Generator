import "./App.css";
import QuoteBox from "./components/QuoteBox";

function App() {
  return (
    <>
      <div className="mb-3">
        <QuoteBox handleSubmit={(quote) => console.log(quote)} />
      </div>
    </>
  );
}

export default App;
