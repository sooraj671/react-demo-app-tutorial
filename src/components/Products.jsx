import React, { useState, useEffect } from "react";

const Products = () => {
  const [filter, setFilter] = useState("");

  const productList = [
    { name: "Shirt", price: "500" },
    { name: "Paint", price: "1000" },
    { name: "Cap", price: "300" },
    { name: "Socks", price: "200" },
  ];

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
        {productList
          .filter((f) => f.name.includes(filter) || filter === "")
          .map((f) => (
            <li key={f.name}>{f.name} {f.price} </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
