"use client";

import { useState, useMemo } from "react";

export default function MenuTable({ menuItems }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("item"); // "item" or "price"
  const [sortDirection, setSortDirection] = useState("asc"); // "asc" or "desc"

  const groupedItems = useMemo(() => {
    if (!menuItems || !Array.isArray(menuItems)) return {};

    // Filter items based on search
    const filtered = menuItems.filter((item) =>
      item.item?.toLowerCase().includes(search.toLowerCase())
    );

    // Sort items
    const sorted = filtered.sort((a, b) => {
      if (sortBy === "price") {
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return sortDirection === "asc"
          ? a.item.localeCompare(b.item)
          : b.item.localeCompare(a.item);
      }
    });

    // Group by category
    return sorted.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [menuItems, search, sortBy, sortDirection]);

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-5xl dm-serif-text-regular text-black mb-12 text-center animate-fadeInUp">
        Our Menu
      </h1>

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <input
          type="text"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition"
        />

        <div className="flex gap-4 items-center">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="item">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>

          <button
            onClick={toggleSortDirection}
            className="bg-secondary text-primary px-5 py-3 rounded-lg font-medium hover:bg-opacity-80 transition"
          >
            {sortDirection === "asc" ? "↑ Asc" : "↓ Desc"}
          </button>
        </div>
      </div>

      {/* Grouped Menu Items */}
      <div className="flex flex-col gap-12">
        {Object.keys(groupedItems).map((category) => (
          <div key={category}>
            <h2 className="text-3xl dm-serif-text-regular text-black mb-6 border-b pb-2">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {groupedItems[category].map((item, index) => (
                <div
                  key={index}
                  className="bg-tertiary p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl dm-serif-text-regular text-secondary leading-snug">
                      {item.item || "Unnamed Item"}
                    </h3>

                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-base font-semibold text-secondary">
                      ${item.price?.toFixed(2) || "0.00"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
