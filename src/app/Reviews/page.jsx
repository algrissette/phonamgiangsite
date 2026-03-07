"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Navbar from "@/components/Home/navbar";
import Footer from "@/components/Home/footer";

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&family=Be+Vietnam+Pro:wght@300;400;500&display=swap');

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

const platformReviews = [
  {
    platform: "Yelp",
    reviews: [
      {
        name: "Alice L.",
        photo: "/Images/Reviews/Alice.jpg",
        text: "I got the house special pho (pho dac biet) and it did not disappoint. The broth was super flavorful and the bowl was packed with meat. Service was fast, and everyone was super friendly!",
        stars: 5,
      },
    ],
  },
  {
    platform: "Google",
    reviews: [
      {
        name: "Caroline L.",
        photo: "/Images/Reviews/Caroline.png",
        text: "Super yummy rice vermicelli bun marinated grill stuff, pho and shrimp tempura. Will definitely be coming back again.",
        stars: 5,
      },
    ],
  },
  {
    platform: "Yelp",
    reviews: [
      {
        name: "Danielle A.",
        photo: "/Images/Reviews/Danielle.jpg",
        text: "As for my dish, it was a thing of dreams. Flavorful, salted properly. The rice was fresh. All in all this was a great restaurant & well worth the trip.",
        stars: 5,
      },
    ],
  },
];

const featuredBubbles = [
  {
    photo: "/Images/Reviews/Michelle.jpg",
    name: "Michelle",
    text: "Fried pork dumplings were also good. Really crispy and juicy.",
  },
  {
    photo: "/Images/Reviews/Tamara.jpg",
    name: "Tamara",
    text: "The restaurant just opened up in our area — we have been waiting! They did not disappoint!!! The dining area is beautiful and the food was amazing, fresh and delicious.",
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? "#f5c878" : "none"}
          stroke="#f5c878"
          strokeWidth={2}
        />
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", margin: "0 auto" }}>

      <div style={{ width: "60px", height: "1px", background: " rgba(200,140,60,0.5))" }} />
    </div>
  );
}

const Reviews = () => {
  return (
    <>
      <style>{globalStyles}</style>
      <div style={{
        minHeight: "100vh",
        background: "#0e0a06",
        backgroundImage: `
          radial-gradient(ellipse at 15% 10%, rgba(180,80,20,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 85%, rgba(120,40,10,0.1) 0%, transparent 50%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")
        `,
        fontFamily: "'Be Vietnam Pro', sans-serif",
        color: "#f0e6d3",
      }}>
        <Navbar />

        {/* ── Hero Header ── */}
        <div style={{
          borderBottom: "1px solid rgba(200,140,60,0.15)",
          padding: "72px 24px 52px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          animation: "fadeUp 0.7s ease both",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `repeating-linear-gradient(90deg, rgba(200,140,60,0.025) 0px, rgba(200,140,60,0.025) 1px, transparent 1px, transparent 60px)`,
            pointerEvents: "none",
          }} />

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontStyle: "italic",
            fontSize: "14px",
            letterSpacing: "0.35em",
            color: "rgba(200,140,60)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Pho Nam Giang · Philadelphia
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 700,
            color: "#f5e6c8",
            lineHeight: 1.05,
            marginBottom: "12px",
            letterSpacing: "-0.02em",
          }}>
            What People Are Saying
          </h1>

          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontStyle: "italic",
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(200,160,100)",
            maxWidth: "600px",
            margin: "0 auto 28px",
            lineHeight: 1.7,
          }}>
            From authentic phở to warm, friendly service — read real reviews from our loyal guests and see why we're a local favorite in Philadelphia.
          </p>

          <Divider />
        </div>

        {/* ── Featured Bubbles ── */}
        <section style={{ padding: "72px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}>
            {featuredBubbles.map((bubble, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                animation: `fadeUp 0.6s ease both ${i * 0.12}s`,
              }}>
                <div style={{ flexShrink: 0 }}>
                  <Image
                    src={bubble.photo}
                    alt={bubble.name}
                    width={64}
                    height={64}
                    style={{
                      borderRadius: "50%",
                      border: "2px solid rgba(200,140,60,0.5)",
                      boxShadow: "0 0 20px rgba(180,80,10,0.25)",
                    }}
                  />
                </div>

                <div style={{ position: "relative" }}>
                  {/* Tail */}
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    left: "-8px",
                    width: 0, height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderRight: "8px solid rgba(200,140,60,0.35)",
                  }} />
                  <div style={{
                    position: "absolute",
                    top: "21px",
                    left: "-6px",
                    width: 0, height: 0,
                    borderTop: "7px solid transparent",
                    borderBottom: "7px solid transparent",
                    borderRight: "7px solid rgba(255,255,255,0.04)",
                  }} />

                  <div style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(200,140,60,0.3)",
                    borderRadius: "12px",
                    padding: "18px 20px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}>
                    <p style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontStyle: "italic",
                      fontSize: "16px",
                      color: "rgba(240,220,190)",
                      lineHeight: 1.7,
                      margin: "0 0 10px",
                    }}>
                      "{bubble.text}"
                    </p>
                    <span style={{
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgba(200,140,60)",
                    }}>
                      — {bubble.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Reviews Across The Web ── */}
        <section style={{
          padding: "0 24px 80px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "#f5e6c8",
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}>
              Reviews Across The Web
            </h2>
            <Divider />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}>
            {platformReviews.map((group, gi) =>
              group.reviews.map((review, ri) => (
                <div key={`${gi}-${ri}`} style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  animation: `fadeUp 0.6s ease both ${gi * 0.1}s`,
                }}>
                  {/* Speech bubble pointing down */}
                  <div style={{
                    position: "relative",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(200,140,60,0.25)",
                    borderRadius: "14px",
                    padding: "24px",
                    width: "100%",
                    boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
                    marginBottom: "20px",
                  }}>
                    {/* Down-pointing tail */}
                    <div style={{
                      position: "absolute",
                      bottom: "-9px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0, height: 0,
                      borderLeft: "9px solid transparent",
                      borderRight: "9px solid transparent",
                      borderTop: "9px solid rgba(200,140,60,0.25)",
                    }} />
                    <div style={{
                      position: "absolute",
                      bottom: "-7px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0, height: 0,
                      borderLeft: "7px solid transparent",
                      borderRight: "7px solid transparent",
                      borderTop: "7px solid #161008",
                    }} />

                    <p style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontStyle: "italic",
                      fontSize: "15px",
                      color: "rgba(240,220,190)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}>
                      "{review.text}"
                    </p>
                  </div>

                  {/* Avatar */}
                  <Image
                    src={review.photo}
                    alt={review.name}
                    width={60}
                    height={60}
                    style={{
                      borderRadius: "50%",
                      border: "2px solid rgba(200,140,60,0.45)",
                      boxShadow: "0 0 16px rgba(180,80,10,0.2)",
                      marginBottom: "10px",
                    }}
                  />

                  <p style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5e6c8",
                    marginBottom: "6px",
                  }}>
                    {review.name}
                  </p>

                  <StarRating count={review.stars} />

                  <span style={{
                    marginTop: "8px",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "rgba(200,140,60)",
                    background: "rgba(200,140,60,0.08)",
                    border: "1px solid rgba(200,140,60,0.2)",
                    borderRadius: "100px",
                    padding: "3px 12px",
                    letterSpacing: "0.05em",
                  }}>
                    {group.platform}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>

        {/* ── Featured In ── */}
        <section style={{
          padding: "0 24px 80px",
          maxWidth: "800px",
          margin: "0 auto",
        }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "#f5e6c8",
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}>
              Featured In
            </h2>
            <Divider />
          </div>

          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(200,140,60,0.25)",
            borderRadius: "16px",
            padding: "36px 40px",
            boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Subtle corner accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "2px",
              background: "linear-gradient(to right, transparent, rgba(200,140,60,0.5), transparent)",
            }} />

            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "20px" }}>
              <div style={{
                background: "rgba(200,140,60,0.15)",
                border: "1px solid rgba(200,140,60,0.35)",
                color: "rgba(200,140,60)",
                padding: "5px 12px",
                borderRadius: "6px",
                fontSize: "11px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                flexShrink: 0,
                marginTop: "4px",
              }}>
                Press
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#f5e6c8",
                  margin: "0 0 4px",
                }}>
                  Philadelphia Magazine
                </h3>
                <p style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: "rgba(200,140,60)",
                  margin: 0,
                }}>
                  Best Restaurants in Northeast Philadelphia
                </p>
              </div>
            </div>

            <p style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: "16px",
              color: "rgba(240,220,190)",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}>
              Pho Nam Giang has been recognized by Philadelphia Magazine as one of the top dining destinations in Northeast Philadelphia, showcasing our commitment to authentic Vietnamese cuisine and exceptional service.
            </p>

            <a
              href="https://www.phillymag.com/foobooz/best-restaurants-northeast-philadelphia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "rgba(200,140,60,0.15)",
                border: "1px solid rgba(200,140,60,0.45)",
                color: "#f5c878",
                padding: "10px 22px",
                borderRadius: "8px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(200,140,60,0.25)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(200,140,60,0.15)"}
            >
              Read Full Article →
            </a>
          </div>
        </section>

        {/* ── See Us In Action ── */}
        <section style={{
          padding: "0 24px 100px",
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            color: "#f5e6c8",
            marginBottom: "12px",
            letterSpacing: "-0.01em",
          }}>
            See Us In Action
          </h2>
          <div style={{ marginBottom: "44px" }}>
            <Divider />
          </div>

          <div style={{
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(200,140,60,0.25)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.5)",
          }}>
            <iframe
              src="https://www.instagram.com/reel/DBBtAs3PLvE/embed"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
              title="Instagram Reel"
              style={{ display: "block" }}
            />
          </div>
        </section>

        {/* Footer ornament */}
        <div style={{
          textAlign: "center",
          borderTop: "1px solid rgba(200,140,60,0.1)",
          padding: "32px 24px",
        }}>
          <Divider />
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontStyle: "italic",
            fontSize: "13px",
            color: "rgba(200,140,60)",
            marginTop: "16px",
            letterSpacing: "0.05em",
          }}>
            All reviews sourced from Google, Yelp & Philadelphia Magazine
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Reviews;