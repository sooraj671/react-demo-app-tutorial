import React from "react";
import { useEffect, useState } from "react";

const SortList = () => {
  let products = ["car", "computer", "bike", "book", "doctor"];

  const handleChane = () => {
    products = ["empty"];
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {});

  return (
    <div>
      <p>
        Type to filter the list:
        <input
          id="filter"
          name="filter"
          type="text"
          onChange={(event) => setFilter(event.target.value)}
        />
      </p>
      <ul>
        {products
          .filter((f) => f.includes(filter) || filter === "")
          .map((f) => (
            <li key={f}>{f}</li>
          ))}
      </ul>
    </div>
  );
};

export default SortList;
