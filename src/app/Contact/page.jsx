
"use client";

import { useState } from "react";
import Image from "next/image";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your actual email sending code, for example with EmailJS or a backend server
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
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
    <div>
      <Navbar/>
    <div className="bg-tertiary py-20 px-6">
      {/* Section Header */}
      <div className="container mx-auto max-w-3xl text-center animate-fadeInUp">
        <h1 className="text-4xl font-bold dm-serif-text-regular text-secondary mb-4">
          Get In Touch
        </h1>
        <p className="text-secondary text-lg leading-relaxed">
          Have any questions or comments? Feel free to reach out to us! We'd love to hear from you.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto max-w-3xl mt-16 animate-fadeIn">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-lg text-secondary font-semibold"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl bg-white text-secondary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-lg text-secondary font-semibold"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl bg-white text-secondary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-lg text-secondary font-semibold"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-gray-300 rounded-xl bg-white text-secondary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter the subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg text-secondary font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-xl bg-white text-secondary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full py-4 text-white bg-primary rounded-xl shadow-lg focus:outline-none ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {submissionStatus && (
              <div
                className={`mt-4 text-center ${submissionStatus === "success" ? "text-green-500" : "text-red-500"}`}
              >
                {submissionStatus === "success"
                  ? "Your message has been sent! We'll get back to you soon."
                  : "There was an error sending your message. Please try again."}
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto max-w-3xl mt-20 animate-fadeIn">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Our Location
            </h2>
            <p className="text-lg text-secondary">
              123 Pho Street, Philadelphia, PA 19103
            </p>
            <p className="text-lg text-secondary mt-2">
              We are open daily from 10:00 AM to 9:00 PM.
            </p>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-secondary">
              Email us at{" "}
              <a
                href="mailto:xxx@phonamgiang.com"
                className="text-primary hover:underline"
              >
                xxx@phonamgiang.com
              </a>
            </p>
            <p className="text-lg text-secondary mt-2">
              Or give us a call at: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
