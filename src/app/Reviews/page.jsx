"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect } from "react";
import Script from "next/script";
import Navbar from "@/components/Home/navbar";
import Footer from "@/components/Home/footer";

const platformReviews = [
  {
    platform: "Google",
    reviews: [
      {
        name: "Jason N.",
        photo: "/images/google1.jpg",
        text: "Best pho in the city, hands down.",
        stars: 5,
      },
    ],
  },
  {
    platform: "Yelp",
    reviews: [
      {
        name: "Emma W.",
        photo: "/images/yelp1.jpg",
        text: "Love the crispy banh mi and amazing service!",
        stars: 4,
      },
    ],
  },
  {
    platform: "Grubhub",
    reviews: [
      {
        name: "Tina K.",
        photo: "/images/grubhub1.jpg",
        text: "Fast delivery and still piping hot. Love it!",
        stars: 5,
      },
    ],
  },
];

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
<div>
  <Navbar/>
    <div className="bg-tertiary py-20 px-6">
      
      {/* Section Header */}
      <div className="container mx-auto max-w-3xl text-center animate-fadeInUp">
        <h1 className="text-4xl font-bold dm-serif-text-regular text-secondary mb-4">
          Read All About Us!
        </h1>
        <p className="text-secondary text-lg leading-relaxed">
          Discover what our customers are saying about <strong>Pho Nam Giang</strong>! From <strong>authentic pho</strong> to <strong>warm, friendly service</strong>, read real reviews from our loyal guests and see why we're a <strong>local favorite</strong> in Philadelphia.
        </p>
      </div>

      {/* Image + Bubble Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-12 justify-center items-start mt-16 animate-fadeIn">
        <div className="flex items-start gap-4">
          <Image
            src="/images/profile1.jpg"
            alt="Review 1"
            width={70}
            height={70}
            className="rounded-full border border-gray-300"
          />
          <div className="bg-white border border-black px-6 py-4 rounded-xl text-secondary relative shadow-sm before:content-[''] before:absolute before:top-1/2 before:left-[-10px] before:border-[10px] before:border-transparent before:border-r-black before:-translate-y-1/2">
            <p className="leading-snug">
              “The <strong>noodle texture</strong> was perfect and the <strong>broth was heavenly</strong>. I’ll be back weekly.”
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Image
            src="/images/profile2.jpg"
            alt="Review 2"
            width={70}
            height={70}
            className="rounded-full border border-gray-300"
          />
          <div className="bg-white border border-black px-6 py-4 rounded-xl text-secondary relative shadow-sm before:content-[''] before:absolute before:top-1/2 before:left-[-10px] before:border-[10px] before:border-transparent before:border-r-black before:-translate-y-1/2">
            <p className="leading-snug">
              “<strong>Huge portions</strong> for the price and the <strong>staff made me feel like family</strong>.”
            </p>
          </div>
        </div>
      </div>

      {/* Review Grid Section */}
      <section className="container mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold text-center dm-serif-text-regular text-secondary mb-12">
          Reviews Across The Web
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {platformReviews.map((group) => (
            <div key={group.platform} className="flex flex-col items-center gap-6">
              {group.reviews.map((review, index) => (
                <div key={index} className="relative flex flex-col items-center animate-fadeInUp">
                  {/* Speech Bubble */}
                  <div className="bg-white border border-black p-4 rounded-xl max-w-xs mb-4 relative shadow-sm before:content-[''] before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:border-[10px] before:border-transparent before:border-t-black before:rotate-180">
                    <p className="text-secondary text-base leading-snug">
                      {review.text}
                    </p>
                  </div>

                  {/* Profile Image */}
                  <Image
                    src={review.photo}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full border border-gray-300"
                  />

                  {/* Star Rating */}
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < review.stars ? "#FBBF24" : "none"}
                        stroke="#FBBF24"
                      />
                    ))}
                  </div>

                  {/* Platform Label */}
                  <span className="text-sm text-gray-500 mt-2">
                    {group.platform}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Embeds */}
      <section className="container mx-auto py-24 px-4 flex flex-col gap-16 items-center">
        {/* TikTok Embed */}
        <div className="w-full flex flex-col items-center">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@cookingwithlynja/video/7209284998109824262"
            data-video-id="7209284998109824262"
            style={{ maxWidth: "605px", minWidth: "325px" }}
          >
            <section></section>
          </blockquote>
          <p className="text-sm text-gray-500 mt-2">
            Credit: <a href="https://www.tiktok.com/@cookingwithlynja" target="_blank" rel="noopener noreferrer" className="underline">@cookingwithlynja</a>
          </p>
        </div>

        {/* Instagram Embed */}
        <div className="w-full max-w-[500px]">
          <iframe
            src="https://www.instagram.com/p/CxA8G4stNMy/embed"
            width="100%"
            height="650"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            allow="encrypted-media"
            title="Instagram Post"
            className="rounded-lg border"
          ></iframe>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Reviews;
