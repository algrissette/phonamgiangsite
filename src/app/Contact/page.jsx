"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Footer from "@/components/Home/footer";
import Navbar from "@/components/Home/navbar";

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
      <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, rgba(200,140,60,0.5))" }} />
      <span style={{ color: "rgba(200,140,60,0.6)", fontSize: "14px" }}>✦</span>
      <div style={{ width: "60px", height: "1px", background: "linear-gradient(to left, transparent, rgba(200,140,60,0.5))" }} />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(200,140,60,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(200,140,60,0.4)" : "rgba(200,140,60,0.18)"}`,
        borderRadius: "14px",
        padding: "28px 20px",
        textAlign: "center",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.4)" : "0 2px 16px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: "16px", right: "16px", height: "1px",
        background: hovered
          ? "linear-gradient(to right, transparent, rgba(200,140,60,0.5), transparent)"
          : "transparent",
        transition: "all 0.3s ease",
      }} />
      <div style={{
        width: 44, height: 44,
        borderRadius: "50%",
        background: "rgba(200,140,60,0.1)",
        border: "1px solid rgba(200,140,60,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 14px",
        boxShadow: hovered ? "0 0 16px rgba(180,80,10,0.3)" : "none",
        transition: "box-shadow 0.25s",
      }}>
        <Icon size={20} color="rgba(200,140,60,0.85)" strokeWidth={1.5} />
      </div>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "17px",
        fontWeight: 700,
        color: "#f5e6c8",
        marginBottom: "10px",
      }}>
        {title}
      </h3>
      <div style={{
        fontFamily: "'Crimson Pro', serif",
        fontStyle: "italic",
        fontSize: "14px",
        color: "rgba(200,160,100,0.65)",
        lineHeight: 1.75,
      }}>
        {children}
      </div>
    </div>
  );
}

function InputField({ label, id, name, type = "text", value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label htmlFor={id} style={{
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        color: "rgba(200,140,60,0.75)",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}>
        {label} {required && <span style={{ color: "rgba(200,140,60,0.5)" }}>*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: focused ? "rgba(200,140,60,0.06)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${focused ? "rgba(200,140,60,0.55)" : "rgba(200,140,60,0.2)"}`,
          borderRadius: "10px",
          padding: "13px 16px",
          color: "#f0e6d3",
          fontFamily: "'Crimson Pro', serif",
          fontSize: "16px",
          outline: "none",
          transition: "all 0.2s",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [msgFocused, setMsgFocused] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmissionStatus("error");
      return;
    }
    setIsSubmitting(true);
    setSubmissionStatus(null);
    try {
      const encoded = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      const accessKey = encoded ? atob(encoded) : "";
      if (!accessKey) { setSubmissionStatus("error"); return; }
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: accessKey, ...formData }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        if (result.message?.includes("rate")) alert("Too many requests. Please try again later or call us directly.");
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&family=Be+Vietnam+Pro:wght@300;400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ::placeholder { color: rgba(200,150,80,0.3) !important; font-style: italic; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#0e0a06",
        backgroundImage: `
          radial-gradient(ellipse at 20% 10%, rgba(180,80,20,0.11) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 90%, rgba(120,40,10,0.09) 0%, transparent 50%)
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
            color: "rgba(200,140,60,0.65)",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}>
            We'd Love to Hear From You
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700,
            color: "#f5e6c8",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}>
            Get In Touch
          </h1>
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontStyle: "italic",
            fontSize: "clamp(15px, 2vw, 19px)",
            color: "rgba(200,160,100,0.65)",
            maxWidth: "520px",
            margin: "0 auto 28px",
            lineHeight: 1.75,
          }}>
            Questions about our menu, catering, or just want to say hello — we're here.
          </p>
          <Divider />
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

          {/* ── Info Cards ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            padding: "52px 0 48px",
          }}>
            <InfoCard icon={MapPin} title="Franklin Mills">
              427 Franklin Mills Circle<br />Philadelphia, PA
            </InfoCard>
            <InfoCard icon={MapPin} title="St. Vincent St">
              2842 St Vincent Street<br />Philadelphia, PA
            </InfoCard>
            <InfoCard icon={Phone} title="Phone">
              <a href="tel:+12673885929" style={{ color: "inherit", textDecoration: "none", display: "block" }}>
                Franklin Mills: (267) 388-5929
              </a>
              <a href="tel:+12679905286" style={{ color: "inherit", textDecoration: "none", display: "block", marginTop: "4px" }}>
                St. Vincent: (267) 990-5286
              </a>
            </InfoCard>
            <InfoCard icon={Clock} title="Hours">
              Franklin Mills:<br />11:30 AM – 9:30 PM<br />
              <span style={{ display: "block", marginTop: "6px" }}>
                St. Vincent:<br />10:30 AM – 9:00 PM
              </span>
            </InfoCard>
          </div>

          {/* ── Contact Form ── */}
          <div style={{ maxWidth: "700px", margin: "0 auto", paddingBottom: "80px" }}>
            <div style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(200,140,60,0.22)",
              borderRadius: "18px",
              padding: "44px 40px",
              boxShadow: "0 8px 48px rgba(0,0,0,0.45)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Top accent */}
              <div style={{
                position: "absolute", top: 0, left: "40px", right: "40px", height: "1px",
                background: "linear-gradient(to right, transparent, rgba(200,140,60,0.45), transparent)",
              }} />

              <div style={{ textAlign: "center", marginBottom: "36px" }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 700,
                  color: "#f5e6c8",
                  marginBottom: "14px",
                  letterSpacing: "-0.01em",
                }}>
                  Send Us a Message
                </h2>
                <Divider />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Name + Email */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "20px",
                }}>
                  <InputField label="Your Name" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Jane Doe" required />
                  <InputField label="Your Email" id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="jane@example.com" required />
                </div>

                <InputField label="Subject" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" required />

                {/* Textarea */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="message" style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(200,140,60,0.75)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>
                    Message <span style={{ color: "rgba(200,140,60,0.5)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us what's on your mind..."
                    onFocus={() => setMsgFocused(true)}
                    onBlur={() => setMsgFocused(false)}
                    style={{
                      width: "100%",
                      background: msgFocused ? "rgba(200,140,60,0.06)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${msgFocused ? "rgba(200,140,60,0.55)" : "rgba(200,140,60,0.2)"}`,
                      borderRadius: "10px",
                      padding: "13px 16px",
                      color: "#f0e6d3",
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "16px",
                      outline: "none",
                      resize: "none",
                      transition: "all 0.2s",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "15px",
                    background: isSubmitting ? "rgba(200,140,60,0.08)" : "rgba(200,140,60,0.14)",
                    border: "1px solid rgba(200,140,60,0.45)",
                    borderRadius: "10px",
                    color: isSubmitting ? "rgba(200,140,60,0.4)" : "#f5c878",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    marginTop: "4px",
                  }}
                  onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.background = "rgba(200,140,60,0.24)"; }}
                  onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.background = "rgba(200,140,60,0.14)"; }}
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>

                {/* Status messages */}
                {submissionStatus === "success" && (
                  <div style={{
                    background: "rgba(80,160,80,0.08)",
                    border: "1px solid rgba(80,160,80,0.35)",
                    borderRadius: "10px",
                    padding: "16px 20px",
                    textAlign: "center",
                  }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "rgba(140,220,140,0.9)", margin: "0 0 4px" }}>
                      Message sent!
                    </p>
                    <p style={{ fontFamily: "'Crimson Pro', serif", fontStyle: "italic", fontSize: "14px", color: "rgba(140,200,140,0.6)", margin: 0 }}>
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                )}

                {submissionStatus === "error" && (
                  <div style={{
                    background: "rgba(180,60,40,0.08)",
                    border: "1px solid rgba(180,60,40,0.35)",
                    borderRadius: "10px",
                    padding: "16px 20px",
                    textAlign: "center",
                  }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "rgba(220,120,100,0.9)", margin: "0 0 4px" }}>
                      Something went wrong.
                    </p>
                    <p style={{ fontFamily: "'Crimson Pro', serif", fontStyle: "italic", fontSize: "14px", color: "rgba(200,100,80,0.6)", margin: 0 }}>
                      Please try again or call us at{" "}
                      <a href="tel:+12673885929" style={{ color: "rgba(220,140,100,0.8)", textDecoration: "underline" }}>
                        (267) 388-5929
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
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
            We typically respond within 24 hours · phonamgiang.com
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;