import React from "react";

const FavouritesTable = ({ quotes }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Quote</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {quotes.length !== 0 &&
          quotes.map((q) => (
            <tr>
              <td key={quotes.length + 1}>{q.slice(0, 30)}...</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default FavouritesTable;
