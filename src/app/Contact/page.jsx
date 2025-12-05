
"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Footer from "@/components/Home/footer";
import Navbar from "@/components/Home/navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmissionStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Call our API route instead of Web3Forms directly
      const response = await fetch("https://phonamgiangsite-g8b5-5otkk6blq-alan-grissettes-projects.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Form submission failed:", result.message);
        // Check if it's a rate limit error
        if (result.message && result.message.includes("Rate limited")) {
          alert("Too many requests. Please try again in a few minutes, or call us directly at (267) 388-5929");
        }
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-tertiary">
      <Navbar />

      <div className="py-16 md:py-24 px-6">
        {/* Section Header */}
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold dm-serif-text-regular text-secondary mb-6">
            Get In Touch
          </h1>
          <p className="text-secondary text-lg md:text-xl leading-relaxed">
            Have any questions or comments? We'd love to hear from you! Whether
            it's about our menu, catering, or just to say hello.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="container mx-auto max-w-5xl mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location - Franklin Mills */}
            <div className="bg-white border-2 border-secondary rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Franklin Mills
              </h3>
              <p className="text-secondary/80 text-sm">
                427 Franklin Mills Circle
                <br />
                Philadelphia, PA
              </p>
            </div>

            {/* Location - St Vincent */}
            <div className="bg-white border-2 border-secondary rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                St Vincent St
              </h3>
              <p className="text-secondary/80 text-sm">
                2842 St Vincent Street
                <br />
                Philadelphia, PA
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white border-2 border-secondary rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Phone</h3>
              <div className="space-y-1">
                <a
                  href="tel:+12673885929"
                  className="block text-secondary/80 text-sm hover:text-secondary hover:underline"
                >
                  Franklin Mills: (267) 388-5929
                </a>
                <a
                  href="tel:+12679905286"
                  className="block text-secondary/80 text-sm hover:text-secondary hover:underline"
                >
                  St Vincent: (267) 990-5286
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border-2 border-secondary rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Hours</h3>
              <div className="text-secondary/80 text-sm space-y-1">
                <p>
                  Franklin Mills:
                  <br />
                  11:30 AM - 9:30 PM
                </p>
                <p className="mt-2">
                  St Vincent:
                  <br />
                  10:30 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto max-w-3xl mt-16 md:mt-20">
          <div className="bg-white border-2 border-secondary rounded-2xl p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold dm-serif-text-regular text-secondary mb-6 text-center">
              Send Us a Message
            </h2>

            <div className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-semibold text-secondary mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-secondary/30 rounded-xl bg-white text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold text-secondary mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-secondary/30 rounded-xl bg-white text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-base font-semibold text-secondary mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-secondary/30 rounded-xl bg-white text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-secondary transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-semibold text-secondary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full p-4 border-2 border-secondary/30 rounded-xl bg-white text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmit}
                  className={`w-full py-4 text-white text-lg font-semibold bg-secondary rounded-xl shadow-lg hover:bg-secondary/90 focus:outline-none focus:ring-4 focus:ring-secondary/30 transition-all ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Status Messages */}
              {submissionStatus === "success" && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl text-center">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm mt-1">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl text-center">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm mt-1">
                    Please try again in a few minutes or call us directly at{" "}
                    <a href="tel:+12673885929" className="underline font-semibold">
                      (267) 388-5929
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;