import React from "react";

const FavouritesTable = ({ quotes }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Quote</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {quotes.length > 0 &&
            quotes.slice(1).map((q) => (
              <tr key={q.id}>
                <td>{q.quote.slice(0, 30) + "..."}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default FavouritesTable;
