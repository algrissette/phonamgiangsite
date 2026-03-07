"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Menu", label: "Menu" },
  { href: "/Reviews", label: "Reviews" },
  { href: "/Contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        fontFamily: "'Be Vietnam Pro', sans-serif",
        background: "#0e0a06",
        borderBottom: "1px solid rgba(200,140,60,0.18)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
      }}>

        {/* ── Top Info Bar ── */}
        <div style={{
          background: "rgba(0,0,0,0.35)",
          borderBottom: "1px solid rgba(200,140,60,0.1)",
          padding: "7px 28px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "6px",
        }}>
          {[
            {
              map: "https://maps.google.com/?q=40.08624994769334,-74.96491061733288",
              address: "427 Franklin Mills Cir",
              tel: "tel:+12673885929",
              phone: "(267) 388-5929",
            },
            {
              map: "https://maps.google.com/?q=40.041390806040525,-75.05423244432086",
              address: "2842 St Vincent St",
              tel: "tel:+12679905286",
              phone: "(267) 990-5286",
            },
          ].map((loc, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              color: "rgba(200,160,100)",
              letterSpacing: "0.03em",
            }}>
              <span style={{ fontSize: "10px", opacity: 0.6 }}>📍</span>
              <a
                href={loc.map}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#f5c878"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(200,160,100)"}
              >
                {loc.address}
              </a>
              <span style={{ color: "rgba(200,140,60,0.2)" }}>|</span>
              <a
                href={loc.tel}
                style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#f5c878"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(200,160,100)"}
              >
                {loc.phone}
              </a>
            </div>
          ))}
        </div>

        {/* ── Main Nav ── */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 28px",
          position: "relative",
        }}>
          {/* Subtle grid lines */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `repeating-linear-gradient(90deg, rgba(200,140,60,0.02) 0px, rgba(200,140,60,0.02) 1px, transparent 1px, transparent 80px)`,
          }} />

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              borderRadius: "50%",
              border: "1.5px solid rgba(200,140,60,0.45)",
              boxShadow: "0 0 14px rgba(180,80,10,0.3)",
              overflow: "hidden",
              width: 40, height: 40, flexShrink: 0,
            }}>
              <Image
                src="/Images/Home/pho-nam-giang-logo.avif"
                alt="Pho Nam Giang Logo"
                width={40}
                height={40}
                style={{ display: "block" }}
              />
            </div>
            <div>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#f5e6c8",
                letterSpacing: "-0.01em",
                display: "block",
                lineHeight: 1.1,
              }}>
                Pho Nam Giang
              </span>
              <span style={{
                fontFamily: "'Crimson Pro', serif",
                fontStyle: "italic",
                fontSize: "11px",
                color: "rgba(200,140,60)",
                letterSpacing: "0.1em",
              }}>
                Authentic Vietnamese
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul style={{
            display: "flex", gap: "4px", listStyle: "none",
            margin: 0, padding: 0, alignItems: "center",
          }} className="png-nav-links">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      display: "block",
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontSize: "13.5px",
                      fontWeight: active ? 500 : 400,
                      color: active ? "#f5c878" : "rgba(200,160,100)",
                      textDecoration: "none",
                      padding: "7px 14px",
                      borderRadius: "8px",
                      background: active ? "rgba(200,140,60,0.1)" : "transparent",
                      border: `1px solid ${active ? "rgba(200,140,60,0.35)" : "transparent"}`,
                      letterSpacing: "0.03em",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = "#f5e6c8";
                        e.currentTarget.style.background = "rgba(200,140,60,0.06)";
                        e.currentTarget.style.borderColor = "rgba(200,140,60,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = "rgba(200,160,100)";
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor = "transparent";
                      }
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="png-hamburger"
            style={{
              display: "none",
              background: "rgba(200,140,60,0.08)",
              border: "1px solid rgba(200,140,60,0.25)",
              borderRadius: "8px",
              padding: "8px 11px",
              cursor: "pointer",
              color: "rgba(200,140,60,0.8)",
              fontSize: "17px",
              lineHeight: 1,
              fontFamily: "sans-serif",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid rgba(200,140,60,0.12)",
            background: "rgba(8,5,2,0.98)",
            padding: "12px 20px 20px",
          }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "3px" }}>
              {NAV_LINKS.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontSize: "15px",
                        fontWeight: active ? 500 : 400,
                        color: active ? "#f5c878" : "rgba(200,160,100,0.75)",
                        textDecoration: "none",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        background: active ? "rgba(200,140,60,0.1)" : "transparent",
                        borderLeft: `2px solid ${active ? "rgba(200,140,60,0.6)" : "transparent"}`,
                        letterSpacing: "0.03em",
                        transition: "all 0.15s",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div style={{
              marginTop: "14px", paddingTop: "12px",
              borderTop: "1px solid rgba(200,140,60,0.1)",
              display: "flex", flexDirection: "column", gap: "5px",
            }}>
              {[
                { address: "427 Franklin Mills Cir", phone: "(267) 388-5929", tel: "tel:+12673885929" },
                { address: "2842 St Vincent St", phone: "(267) 990-5286", tel: "tel:+12679905286" },
              ].map((loc, i) => (
                <div key={i} style={{
                  fontSize: "12px", color: "rgba(200,140,60)",
                  fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: "0.03em",
                }}>
                  📍 {loc.address}&nbsp;·&nbsp;
                  <a href={loc.tel} style={{ color: "inherit", textDecoration: "none" }}>{loc.phone}</a>
                </div>
              ))}
            </div>
          </div>
        )}

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Crimson+Pro:ital,wght@1,300&family=Be+Vietnam+Pro:wght@300;400;500&display=swap');
          @media (max-width: 640px) {
            .png-nav-links { display: none !important; }
            .png-hamburger { display: block !important; }
          }
          @media (min-width: 641px) {
            .png-nav-links { display: flex !important; }
            .png-hamburger { display: none !important; }
          }
        `}</style>
      </header>
    </>
  );
};

export default Navbar;