"use client";

import { useState, useMemo } from "react";

const steamKeyframes = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&family=Be+Vietnam+Pro:wght@300;400;500&display=swap');

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes steam1 {
  0% { transform: translateY(0) scaleX(1) translateX(0); opacity: 0.6; }
  50% { transform: translateY(-18px) scaleX(1.3) translateX(4px); opacity: 0.3; }
  100% { transform: translateY(-36px) scaleX(0.8) translateX(-2px); opacity: 0; }
}
@keyframes steam2 {
  0% { transform: translateY(0) scaleX(1) translateX(0); opacity: 0.5; }
  50% { transform: translateY(-14px) scaleX(1.2) translateX(-3px); opacity: 0.25; }
  100% { transform: translateY(-30px) scaleX(0.9) translateX(2px); opacity: 0; }
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes borderGlow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
`;

const SAMPLE_ITEMS = [
  { item: "Phở Bò Tái", category: "Phở", price: 16.5, description: "Rare sliced beef, rice noodles, slow-simmered bone broth" },
  { item: "Phở Gà", category: "Phở", price: 15.0, description: "Poached chicken, delicate broth, fresh herbs" },
  { item: "Phở Đặc Biệt", category: "Phở", price: 18.5, description: "House special: rare beef, brisket, tendon, tripe" },
  { item: "Phở Chay", category: "Phở", price: 14.0, description: "Vegetarian pho, mushroom broth, tofu, seasonal vegetables" },
  { item: "Bún Bò Huế", category: "Noodle Soups", price: 17.0, description: "Spicy lemongrass pork broth, thick round noodles" },
  { item: "Bún Riêu", category: "Noodle Soups", price: 16.0, description: "Tomato-based crab broth, tofu, shrimp paste" },
  { item: "Mì Quảng", category: "Noodle Soups", price: 15.5, description: "Turmeric noodles, pork, shrimp, peanuts, rice crackers" },
  { item: "Gỏi Cuốn", category: "Appetizers", price: 8.5, description: "Fresh spring rolls, shrimp, pork, herbs, hoisin peanut sauce" },
  { item: "Chả Giò", category: "Appetizers", price: 9.0, description: "Crispy imperial rolls, pork, glass noodles, wood ear mushroom" },
  { item: "Bánh Mì", category: "Appetizers", price: 10.5, description: "Toasted baguette, pâté, pickled daikon, jalapeño, cilantro" },
  { item: "Cà Phê Sữa Đá", category: "Drinks", price: 5.5, description: "Vietnamese iced coffee, sweetened condensed milk" },
  { item: "Trà Đào", category: "Drinks", price: 5.0, description: "Peach jasmine iced tea, fresh mint" },
  { item: "Soda Chanh Muối", category: "Drinks", price: 4.5, description: "Salted lemon soda, a Vietnamese classic" },
];

function SteamEffect() {
  return (
    <div style={{ position: "relative", display: "inline-flex", gap: "6px", height: "40px", alignItems: "flex-end" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: "6px",
            height: "20px",
            borderRadius: "50px",
            background: "rgba(255,200,120,0.5)",
            animation: `${i % 2 === 0 ? "steam1" : "steam2"} ${1.8 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

const categoryIcons = {
  "Phở": "🍜",
  "Noodle Soups": "🥣",
  "Appetizers": "🥢",
  "Drinks": "🧋",
};

export default function MenuTable({ menuItems }) {
  const items = menuItems && Array.isArray(menuItems) && menuItems.length > 0 ? menuItems : SAMPLE_ITEMS;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("item");
  const [sortDirection, setSortDirection] = useState("asc");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = [...new Set(items.map((i) => i.category))];
    return ["All", ...cats];
  }, [items]);

  const groupedItems = useMemo(() => {
    const filtered = items.filter((item) => {
      const matchSearch = item.item?.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      return matchSearch && matchCat;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "price") {
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      }
      return sortDirection === "asc"
        ? a.item.localeCompare(b.item)
        : b.item.localeCompare(a.item);
    });

    return sorted.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [items, search, sortBy, sortDirection, activeCategory]);

  return (
    <>
      <style>{steamKeyframes}</style>
      <div style={{
        minHeight: "100vh",
        background: "#0e0a06",
        backgroundImage: `
          radial-gradient(ellipse at 20% 10%, rgba(180, 80, 20, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 90%, rgba(120, 40, 10, 0.1) 0%, transparent 50%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")
        `,
        fontFamily: "'Be Vietnam Pro', sans-serif",
        color: "#f0e6d3",
        padding: "0 0 80px",
      }}>

        {/* Hero Header */}
        <div style={{
          borderBottom: "1px solid rgba(200,140,60,0.2)",
          padding: "60px 40px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative background lines */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `repeating-linear-gradient(90deg, rgba(200,140,60,0.03) 0px, rgba(200,140,60,0.03) 1px, transparent 1px, transparent 60px)`,
            pointerEvents: "none",
          }} />

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
            <SteamEffect />
          </div>

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontStyle: "italic",
            fontSize: "15px",
            letterSpacing: "0.35em",
            color: "rgba(200,140,60)",
            textTransform: "uppercase",
            marginBottom: "16px",
            animation: "fadeUp 0.6s ease both",
          }}>
            Authentic Vietnamese Cuisine
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 700,
            color: "#f5e6c8",
            lineHeight: 1,
            marginBottom: "8px",
            animation: "fadeUp 0.7s ease both 0.1s",
            letterSpacing: "-0.02em",
          }}>
            Pho Nam Giang
          </h1>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "rgba(200,140,60)",
            fontWeight: 400,
            animation: "fadeUp 0.7s ease both 0.2s",
            letterSpacing: "0.05em",
          }}>
            Our Menu
          </h2>

          {/* Ornamental divider */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "16px", marginTop: "28px",
            animation: "fadeUp 0.7s ease both 0.3s",
          }}>
            <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, rgba(200,140,60,0.6))" }} />
            <div style={{ fontSize: "18px", color: "rgba(200,140,60)" }}>✦</div>
            <div style={{ width: "80px", height: "1px", background: "linear-gradient(to left, transparent, rgba(200,140,60,0.6))" }} />
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          {/* Controls */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            padding: "32px 0 28px",
            alignItems: "center",
            justifyContent: "space-between",
            animation: "fadeUp 0.7s ease both 0.4s",
          }}>
            {/* Search */}
            <div style={{ position: "relative", flex: "1 1 260px", maxWidth: "360px" }}>
              <span style={{
                position: "absolute", left: "14px", top: "50%",
                transform: "translateY(-50%)", color: "rgba(200,140,60)",
                fontSize: "15px", pointerEvents: "none",
              }}>🔍</span>
              <input
                type="text"
                placeholder="Search dishes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(200,140,60,0.25)",
                  borderRadius: "8px",
                  padding: "10px 14px 10px 38px",
                  color: "#f0e6d3",
                  fontSize: "14px",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => e.target.style.borderColor = "rgba(200,140,60,0.7)"}
                onBlur={(e) => e.target.style.borderColor = "rgba(200,140,60,0.25)"}
              />
            </div>

            {/* Sort controls */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(200,140,60,0.25)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  color: "#f0e6d3",
                  fontSize: "13px",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="item" style={{ background: "#1a1008" }}>Name</option>
                <option value="price" style={{ background: "#1a1008" }}>Price</option>
              </select>

              <button
                onClick={() => setSortDirection((d) => d === "asc" ? "desc" : "asc")}
                style={{
                  background: "rgba(200,140,60,0.12)",
                  border: "1px solid rgba(200,140,60,0.35)",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  color: "rgba(200,140,60)",
                  fontSize: "13px",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => e.target.style.background = "rgba(200,140,60,0.22)"}
                onMouseLeave={(e) => e.target.style.background = "rgba(200,140,60,0.12)"}
              >
                {sortDirection === "asc" ? "↑ Asc" : "↓ Desc"}
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div style={{
            display: "flex", gap: "8px", flexWrap: "wrap",
            marginBottom: "40px",
            animation: "fadeUp 0.7s ease both 0.5s",
          }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: isActive ? "rgba(200,140,60,0.18)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${isActive ? "rgba(200,140,60,0.7)" : "rgba(200,140,60,0.2)"}`,
                    borderRadius: "100px",
                    padding: "7px 18px",
                    color: isActive ? "#f5c878" : "rgba(200,160,100,0.7)",
                    fontSize: "13px",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontWeight: isActive ? 500 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    letterSpacing: "0.03em",
                  }}
                >
                  {categoryIcons[cat] ? `${categoryIcons[cat]} ` : ""}{cat}
                </button>
              );
            })}
          </div>

          {/* Menu Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {Object.keys(groupedItems).length === 0 ? (
              <div style={{
                textAlign: "center", padding: "80px 0",
                color: "rgba(200,140,60)",
                fontFamily: "'Crimson Pro', serif",
                fontStyle: "italic",
                fontSize: "20px",
              }}>
                No dishes found...
              </div>
            ) : (
              Object.entries(groupedItems).map(([category, catItems], catIdx) => (
                <div key={category} style={{ animation: `fadeUp 0.5s ease both ${catIdx * 0.08}s` }}>

                  {/* Category Header */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "20px",
                    marginBottom: "28px",
                  }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                        <span style={{ fontSize: "22px" }}>{categoryIcons[category] || "🍽️"}</span>
                        <h2 style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "28px",
                          fontWeight: 700,
                          color: "#f5e6c8",
                          margin: 0,
                          letterSpacing: "-0.01em",
                        }}>
                          {category}
                        </h2>
                        <span style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontStyle: "italic",
                          fontSize: "14px",
                          color: "rgba(200,140,60)",
                          marginLeft: "4px",
                        }}>
                          {catItems.length} {catItems.length === 1 ? "item" : "items"}
                        </span>
                      </div>
                      <div style={{
                        marginTop: "10px",
                        height: "1px",
                        background: "linear-gradient(to right, rgba(200,140,60,0.5), rgba(200,140,60,0.1), transparent)",
                        width: "320px",
                        maxWidth: "100%",
                      }} />
                    </div>
                  </div>

                  {/* Cards Grid */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "16px",
                  }}>
                    {catItems.map((item, i) => (
                      <MenuCard key={i} item={item} index={i} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div style={{
            marginTop: "72px",
            textAlign: "center",
            borderTop: "1px solid rgba(200,140,60,0.12)",
            paddingTop: "36px",
          }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ width: "40px", height: "1px", background: "rgba(200,140,60,0.3)" }} />
              <span style={{ color: "rgba(200,140,60)", fontSize: "16px" }}>✦</span>
              <div style={{ width: "40px", height: "1px", background: "rgba(200,140,60,0.3)" }} />
            </div>
            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontStyle: "italic",
              fontSize: "14px",
              color: "rgba(200,140,60)",
              letterSpacing: "0.05em",
            }}>
              Please inform your server of any allergies · Prices may change
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? "rgba(200,140,60,0.08)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? "rgba(200,140,60,0.45)" : "rgba(200,140,60,0.12)"}`,
        borderRadius: "12px",
        padding: "24px",
        cursor: "default",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 40px rgba(180,80,10,0.2), 0 0 0 1px rgba(200,140,60,0.1)"
          : "0 2px 12px rgba(0,0,0,0.3)",
        animation: `fadeUp 0.4s ease both ${index * 0.05 + 0.1}s`,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minHeight: "140px",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: "20px", right: "20px",
        height: "1px",
        background: hovered
          ? "linear-gradient(to right, transparent, rgba(200,140,60,0.6), transparent)"
          : "transparent",
        transition: "all 0.3s ease",
        borderRadius: "1px",
      }} />

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "17px",
        fontWeight: 700,
        color: hovered ? "#f5c878" : "#f0e0c0",
        margin: 0,
        lineHeight: 1.3,
        transition: "color 0.2s",
      }}>
        {item.item || "Unnamed Item"}
      </h3>

      {item.description && (
        <p style={{
          fontFamily: "'Crimson Pro', serif",
          fontSize: "14px",
          color: "rgba(200,170,130)",
          margin: 0,
          lineHeight: 1.6,
          flexGrow: 1,
          fontStyle: "italic",
        }}>
          {item.description}
        </p>
      )}

      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginTop: "4px",
      }}>
        <span style={{
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          color: hovered ? "#f5c878" : "rgba(200,140,60,0.85)",
          letterSpacing: "0.02em",
          transition: "color 0.2s",
        }}>
          ${item.price?.toFixed(2) || "0.00"}
        </span>

        <div style={{
          width: "28px", height: "28px",
          borderRadius: "50%",
          border: "1px solid rgba(200,140,60,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "rgba(200,140,60,0.5)",
          fontSize: "12px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.8)",
          transition: "all 0.2s ease",
        }}>

        </div>
      </div>
    </div>
  );
}