import React, { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const FavouritesTable = ({
  quotes,
  handleClick,
  clickedCopyId,
  clickedCopy,
}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Quote history</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {quotes.length > 0 &&
            quotes.slice(0, quotes.length - 1).map((q) => (
              <tr key={q.id}>
                <td>{q.quote.slice(0, 30) + "..."}</td>
                <td>
                  <button
                    onClick={() => clickedCopy(q.id)}
                    className="btn btn-secondary"
                  >
                    {clickedCopyId === q.id ? (
                      <>
                        <IoIosCheckmarkCircleOutline /> copied
                      </>
                    ) : (
                      "copy"
                    )}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleClick(q.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default FavouritesTable;
