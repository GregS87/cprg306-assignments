"use client";

import { useState } from "react";

export default function NewItem() {
  // state variables
  const [name, setName] = useState("");        // name field
  const [quantity, setQuantity] = useState(1); // quantity field
  const [category, setCategory] = useState("produce"); //default category

  // quantity handlers
  const increment = () => {
    setQuantity((prevQuantity) =>
      prevQuantity >= 20 ? prevQuantity : prevQuantity + 1
    );
  };

  const decrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity <= 1 ? prevQuantity : prevQuantity - 1
    );
  };

  // form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(
      "New Item:\n" +
        `Name: ${name}\n` +
        `Quantity: ${quantity}\n` +
        `Category: ${category}`
    );

    // reset to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 text-slate-100 rounded-xl p-6 flex flex-col items-center gap-6 shadow-lg"
    >
      <h2 className="text-xl font-bold">Add New Item</h2>

      {/* Name field */}
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="stuff"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
      </div>

      {/* Quantity controls */}
      <div className="w-full flex flex-col items-center gap-3">
        <span className="text-sm font-medium">Item quantity Add/Subtract!</span>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="w-10 h-10 rounded-lg border border-slate-500 text-2xl leading-none
                       flex items-center justify-center 
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-slate-800 transition"
          >
            -
          </button>

          <span className="text-3xl font-bold tabular-nums w-10 text-center">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="w-10 h-10 rounded-lg border border-slate-500 text-2xl leading-none
                       flex items-center justify-center
                       disabled:opacity-40 disabled:cursor-not-allowed
                       hover:bg-slate-800 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Category field */}
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full rounded-md border border-slate-600
                     bg-slate-100 text-slate-900
                     px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="mt-2 w-full bg-slate-700 hover:bg-slate-600
                   text-slate-100 font-medium py-2 px-4 rounded-md
                   transition"
      >
        Add Item
      </button>
    </form>
  );
}
