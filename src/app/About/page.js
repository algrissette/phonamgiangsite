"use client";

import Footer from "@/components/Home/footer";
import Navbar from "@/components/Home/navbar";
import SocialMedia from "@/components/Home/socialMedia";

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
      <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, rgba(200,140,60,0.5))" }} />
      <span style={{ color: "rgba(200,140,60,0.6)", fontSize: "14px" }}>✦</span>
      <div style={{ width: "60px", height: "1px", background: "linear-gradient(to left, transparent, rgba(200,140,60,0.5))" }} />
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(200,140,60,0.2)",
      borderRadius: "14px",
      padding: "28px 32px",
      boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
      position: "relative",
      overflow: "hidden",
      ...style,
    }}>
      <div style={{
        position: "absolute", top: 0, left: "20px", right: "20px",
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(200,140,60,0.3), transparent)",
      }} />
      {children}
    </div>
  );
}

const AboutPage = () => {
  const locations = [
    {
      name: "Franklin Mills Circle",
      address: "Franklin Mills Circle, Philadelphia, PA",
      mapsLink: "https://maps.google.com/?q=Pho+Nam+Giang+Franklin+Mills",
      phone: "tel:+12153331777",
      display: "(215) 333-1777",
    },
    {
      name: "St. Vincent Street",
      address: "St. Vincent Street, Philadelphia, PA",
      mapsLink: "https://maps.google.com/?q=Pho+Nam+Giang+St+Vincent",
      phone: "tel:+12153331234",
      display: "(215) 333-1234",
    },
  ];

  const stats = [
    { value: "4.7 Stars", label: "Google Rating", icon: "⭐" },
    { value: "10+ Years", label: "of Experience", icon: "🍜" },
    { value: "600+", label: "Reviews Across Locations", icon: "✦" },
  ];

  const hours = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&family=Be+Vietnam+Pro:wght@300;400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#0e0a06",
        backgroundImage: `
          radial-gradient(ellipse at 10% 10%, rgba(180,80,20,0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 90% 80%, rgba(120,40,10,0.09) 0%, transparent 50%)
        `,
        fontFamily: "'Be Vietnam Pro', sans-serif",
        color: "#f0e6d3",
      }}>
        <Navbar />

        {/* ── Hero ── */}
        <div style={{
          textAlign: "center",
          padding: "64px 24px 48px",
          borderBottom: "1px solid rgba(200,140,60,0.12)",
          position: "relative",
          overflow: "hidden",
          animation: "fadeUp 0.7s ease both",
        }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `repeating-linear-gradient(90deg, rgba(200,140,60,0.025) 0px, rgba(200,140,60,0.025) 1px, transparent 1px, transparent 60px)`,
          }} />
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontStyle: "italic",
            fontSize: "14px",
            letterSpacing: "0.35em",
            color: "rgba(200,140,60)",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}>
            Our Story
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700,
            color: "#f5e6c8",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}>
            About Us
          </h1>
          <Divider />
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

          {/* ── Intro + Locations ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
            padding: "60px 0 48px",
          }}>

            {/* Visit Us card */}
            <Card style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
              <div style={{
                width: 80, height: 80,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(200,140,60,0.5)",
                boxShadow: "0 0 20px rgba(180,80,10,0.3)",
                flexShrink: 0,
              }}>
                <img
                  src="/Images/Home/OutsidePhoto1.png"
                  alt="Pho Nam Giang"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#f5e6c8",
                  marginBottom: "4px",
                }}>
                  Visit Us
                </h2>
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: "rgba(200,140,60)",
                  letterSpacing: "0.08em",
                }}>
                  Two Philadelphia Locations
                </p>
              </div>

              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
                {locations.map((loc, i) => (
                  <div key={i} style={{
                    padding: "16px",
                    background: "rgba(200,140,60,0.05)",
                    border: "1px solid rgba(200,140,60,0.15)",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                  }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#f5e6c8",
                      margin: 0,
                    }}>
                      {loc.name}
                    </h3>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                      {[
                        { href: loc.mapsLink, label: "Directions", target: "_blank" },
                        { href: loc.phone, label: "Call Us" },
                      ].map(({ href, label, target }) => (
                        <a
                          key={label}
                          href={href}
                          target={target}
                          rel={target ? "noopener noreferrer" : undefined}
                          style={{
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#f5c878",
                            background: "rgba(200,140,60,0.1)",
                            border: "1px solid rgba(200,140,60,0.35)",
                            padding: "7px 16px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            letterSpacing: "0.03em",
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(200,140,60,0.22)"}
                          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(200,140,60,0.1)"}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* About text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 700,
                color: "#f5e6c8",
                letterSpacing: "-0.01em",
                margin: 0,
              }}>
                Our Story
              </h2>

              <Card>
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: "17px",
                  color: "rgba(240,220,190)",
                  lineHeight: 1.85,
                  margin: 0,
                }}>
                  At Pho Nam Giang, we bring the heart and soul of Vietnamese cuisine to Philadelphia.
                  Our family-owned restaurant is passionate about authentic flavors, fresh ingredients,
                  and creating a welcoming atmosphere.
                  <br /><br />
                  From our signature phở to crispy bánh mì and fresh spring rolls, every dish is
                  crafted with tradition and love. We're proud to be part of the Philadelphia community
                  with two convenient locations.
                </p>
              </Card>

              <Card>
                <div style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: "16px",
                  color: "rgba(240,220,190)",
                  lineHeight: 2,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}>
                  {[
                    ["📍", "Franklin Mills Circle · St. Vincent Street"],
                    ["⏰", "Open Daily: 11:30 AM – 9:30 PM"],
                    ["🌐", "phonamgiang.com"],
                    ["📲", "Follow us on Instagram & Facebook"],
                  ].map(([icon, text], i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "15px", lineHeight: "1.85" }}>{icon}</span>
                      <span style={{ fontStyle: "italic" }}>{text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* ── Stats + Photo ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            paddingBottom: "60px",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {stats.map(({ value, label, icon }, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(200,140,60,0.2)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
                  animation: `fadeUp 0.5s ease both ${i * 0.1}s`,
                }}>
                  <span style={{ fontSize: "24px", flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#f5c878",
                      lineHeight: 1.1,
                    }}>
                      {value}
                    </div>
                    <div style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontStyle: "italic",
                      fontSize: "14px",
                      color: "rgba(200,140,60)",
                      marginTop: "2px",
                    }}>
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid rgba(200,140,60,0.2)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
            }}>
              <img
                src="/Images/Home/OutsidePhoto.jpg"
                alt="Pho Nam Giang"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "220px" }}
              />
            </div>
          </div>

          {/* ── Hours ── */}
          <div style={{ paddingBottom: "60px" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px, 4vw, 36px)",
                fontWeight: 700,
                color: "#f5e6c8",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}>
                Hours of Operation
              </h2>
              <Divider />
            </div>

            <Card style={{ maxWidth: "480px", margin: "0 auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {hours.map((day, i) => (
                    <tr key={day} style={{
                      borderBottom: i < hours.length - 1 ? "1px solid rgba(200,140,60,0.08)" : "none",
                    }}>
                      <td style={{
                        padding: "11px 0",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#f5e6c8",
                        letterSpacing: "0.02em",
                      }}>
                        {day}
                      </td>
                      <td style={{
                        padding: "11px 0",
                        textAlign: "right",
                        fontFamily: "'Crimson Pro', serif",
                        fontStyle: "italic",
                        fontSize: "15px",
                        color: "rgba(200,140,60)",
                      }}>
                        11:30 AM – 9:30 PM
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>

          {/* ── Maps ── */}
          <div style={{ paddingBottom: "60px" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px, 4vw, 36px)",
                fontWeight: 700,
                color: "#f5e6c8",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}>
                Find Us
              </h2>
              <Divider />
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}>
              {locations.map((loc, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(200,140,60,0.2)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                }}>
                  <div style={{ padding: "18px 22px 14px" }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#f5e6c8",
                      margin: 0,
                    }}>
                      {loc.name}
                    </h3>
                    <p style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontStyle: "italic",
                      fontSize: "13px",
                      color: "rgba(200,140,60)",
                      margin: "4px 0 0",
                    }}>
                      Philadelphia, PA
                    </p>
                  </div>
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                    width="100%"
                    height="240"
                    style={{ display: "block", border: "none", filter: "brightness(0.85) saturate(0.7)" }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Social ── */}
          <div style={{ paddingBottom: "80px" }}>
            <SocialMedia />
          </div>

        </div>

        {/* Footer ornament */}
        <div style={{
          borderTop: "1px solid rgba(200,140,60,0.1)",
          padding: "28px 24px",
          textAlign: "center",
        }}>
          <Divider />
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontStyle: "italic",
            fontSize: "13px",
            color: "rgba(200,140,60,0.28)",
            marginTop: "14px",
            letterSpacing: "0.05em",
          }}>
            Family-owned · Philadelphia, PA · Since 2014
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;