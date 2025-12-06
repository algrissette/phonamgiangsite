"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Home/navbar";
import Footer from "@/components/Home/footer";

const platformReviews = [
  {
    platform: "Yelp",
    reviews: [
      {
        name: "Alice L.",
        photo: "/Images/Reviews/Alice.jpg",
        text: "i got the house special pho (pho dac biet) and it did not disappoint. the broth was super flavorful and the bowl was packed with meat. service was fast, and everyone was super friendly! the restaurant was homey and had plenty of seating. honesty, i was surprised that there weren't more customers.",
        stars: 5,
      },
    ],
  },
  {
    platform: "Google",
    reviews: [
      {
        name: "Caroline L",
        photo: "/Images/Reviews/Caroline.png",
        text: "Super yummy rice vermicelli bun marinated grill stuff, pho and shrimp tempura.",
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
        text: " As for my dish, It was a thing of dreams. Flavorful, salted properly. The rice was fresh. the little veggies on the side almost didn't make it back up I95. All in all this was a great restaurant & well worth the trip.",
        stars: 5,
      },
    ],
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-tertiary overflow-x-hidden">
      <Navbar />

      <div className="py-16 md:py-24 px-6">
        {/* Section Header */}
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold dm-serif-text-regular text-secondary mb-6">
            Read All About Us!
          </h1>
          <p className="text-secondary text-lg md:text-xl leading-relaxed">
            Discover what our customers are saying about <strong>Pho Nam Giang</strong>! From <strong>authentic pho</strong> to <strong>warm, friendly service</strong>, read real reviews from our loyal guests and see why we're a <strong>local favorite</strong> in Philadelphia.
          </p>
        </div>

        {/* Featured Review Bubbles */}
        <div className="container mx-auto max-w-5xl mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Review Bubble 1 */}
            <div className="flex items-start gap-4">
              <Image
                src="/Images/Reviews/Michelle.jpg"
                alt="Customer review"
                width={80}
                height={80}
                className="rounded-full border-2 border-secondary shadow-md flex-shrink-0"
              />
              <div className="bg-white border-2 border-secondary px-6 py-5 rounded-2xl text-secondary relative shadow-lg">
                <div className="absolute top-1/2 -left-3 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-secondary -translate-y-1/2"></div>
                <div className="absolute top-1/2 -left-[10px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white -translate-y-1/2"></div>
                <p className="text-base md:text-lg leading-relaxed">
                  Fried pork dumplings were also good. Really <strong> crispy</strong> and <strong> juicy</strong> .
                </p>
              </div>
            </div>

            {/* Review Bubble 2 */}
            <div className="flex items-start gap-4">
              <Image
                src="/Images/Reviews/Tamara.jpg"
                alt="Customer review"
                width={80}
                height={80}
                className="rounded-full border-2 border-secondary shadow-md flex-shrink-0"
              />
              <div className="bg-white border-2 border-secondary px-6 py-5 rounded-2xl text-secondary relative shadow-lg">
                <div className="absolute top-1/2 -left-3 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-secondary -translate-y-1/2"></div>
                <div className="absolute top-1/2 -left-[10px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white -translate-y-1/2"></div>
                <p className="text-base md:text-lg leading-relaxed">
                  The restaurant just opened up in our area, we have been waiting! <strong>They did not disappoint!!!  </strong>The dining area is beautiful and feels very relaxing. The food was amazing, fresh and delicious. I highly recommend <strong> AAAAAAAAA  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Reviews Grid */}
        <section className="container mx-auto py-20 md:py-28 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center dm-serif-text-regular text-secondary mb-16">
            Reviews Across The Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {platformReviews.map((group) => (
              <div key={group.platform} className="flex flex-col items-center">
                {group.reviews.map((review, index) => (
                  <div key={index} className="flex flex-col items-center w-full max-w-sm">
                    {/* Speech Bubble */}
                    <div className="bg-white border-2 border-secondary p-6 rounded-2xl w-full mb-4 relative shadow-lg">
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-secondary"></div>
                      <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
                      <p className="text-secondary text-base md:text-lg leading-relaxed">
                        {review.text}
                      </p>
                    </div>

                    {/* Profile Image */}
                    <Image
                      src={review.photo}
                      alt={review.name}
                      width={70}
                      height={70}
                      className="rounded-full border-2 border-secondary shadow-md"
                    />

                    {/* Name */}
                    <p className="text-secondary font-semibold mt-3 text-lg">
                      {review.name}
                    </p>

                    {/* Star Rating */}
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          fill={i < review.stars ? "#FBBF24" : "none"}
                          stroke="#FBBF24"
                          strokeWidth={2}
                        />
                      ))}
                    </div>

                    {/* Platform Badge */}
                    <span className="text-sm font-medium text-secondary/70 mt-2 bg-white px-3 py-1 rounded-full border border-secondary/30">
                      {group.platform}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Press Section */}
        <section className="container mx-auto py-20 md:py-28 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center dm-serif-text-regular text-secondary mb-16">
            Featured In
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Philadelphia Magazine Feature */}
            <div className="bg-white border-2 border-secondary rounded-2xl p-8 md:p-10 shadow-xl mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary text-white px-4 py-2 rounded-lg font-bold text-sm">
                  PRESS
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary dm-serif-text-regular mb-2">
                    Philadelphia Magazine
                  </h3>
                  <p className="text-secondary/70 font-medium">
                    Best Restaurants in Northeast Philadelphia
                  </p>
                </div>
              </div>

              <p className="text-secondary text-lg leading-relaxed mb-6">
                Pho Nam Giang has been recognized by Philadelphia Magazine as one of the top dining destinations in Northeast Philadelphia, showcasing our commitment to authentic Vietnamese cuisine and exceptional service.
              </p>

              <a
                href="https://www.phillymag.com/foobooz/best-restaurants-northeast-philadelphia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="container mx-auto py-20 md:py-28 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center dm-serif-text-regular text-secondary mb-16">
            See Us In Action
          </h2>

          <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
            {/* Instagram Reel 1 */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-[540px]">
                <iframe
                  src="https://www.instagram.com/reel/DBBtAs3PLvE/embed"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram Reel"
                  className="rounded-lg border-2 border-secondary shadow-lg"
                ></iframe>
              </div>
            </div>

            {/* Instagram Post 2 */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-[540px]">
                <iframe
                  src="https://www.instagram.com/p/CxA8G4stNMy/embed"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="Instagram Post"
                  className="rounded-lg border-2 border-secondary shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;