// app/week-6/item-list.js
"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name"); // default sort by name

  // sort copy of items
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      // sortBy === "category"
      return a.category.localeCompare(b.category);
    }
  });

  const baseButton =
    "px-3 py-1 rounded-md border text-sm font-medium transition-colors";
  const activeButton = "bg-slate-200 text-slate-900 border-slate-200";
  const inactiveButton =
    "bg-slate-800 text-slate-100 border-slate-600 hover:bg-slate-700";

  return (
    <section className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-lg w-full">
      {/* sort buttons */}
      <div className="flex justify-center gap-3 mb-4">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`${baseButton} ${
            sortBy === "name" ? activeButton : inactiveButton
          }`}
        >
          Sort by Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`${baseButton} ${
            sortBy === "category" ? activeButton : inactiveButton
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* items list */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}