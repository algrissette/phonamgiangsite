const InfoThree = () => {
  return (
    <section className="overflow-x-hidden container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 text-white font-serif relative">

      {/* Left Side - Information Card */}
      <div className="relative w-full md:w-1/2 bg-secondary rounded-3xl p-8 shadow-2xl overflow-visible flex flex-col items-center transition-transform duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-4 border-[#FDEDC0] hover:scale-[1.02]">

        {/* Header */}
        <h1 className="text-3xl lg:text-4xl font-bold tracking-wide text-center mb-6 drop-shadow-lg animate-fade-in">
          Why Pho Nam Giang?
        </h1>

        {/* Intro Paragraph */}
        <p className="text-center text-base max-w-lg mx-auto mb-8 opacity-90 animate-slide-up delay-100">
          At Pho Nam Giang, we take pride in serving an authentic Vietnamese dining experience that brings the rich flavors of Vietnam to the heart of Philadelphia’s vibrant food scene.
        </p>

        {/* Divider */}
        <hr className="border-t-4 border-[#FDEDC0] w-3/4 mx-auto mb-8 opacity-80 rounded-full" />

        {/* Main Content Paragraphs */}
        <div className="text-left space-y-6 w-full px-2 lg:px-6">
          <p className="leading-relaxed animate-slide-up delay-200">
            Our restaurant has become a beloved destination for those craving authentic pho and Vietnamese cuisine. With a warm, inviting atmosphere, it’s the perfect spot for a family meal, a casual lunch, or a special night out.
          </p>
          <p className="leading-relaxed animate-slide-up delay-300">
            We believe great food starts with great care — from sourcing the freshest ingredients to crafting each dish with precision. Our dedication to excellence shines through in every bowl, earning us a place among the top-rated Vietnamese restaurants in the area.
          </p>
          <p className="leading-relaxed animate-slide-up delay-400">
            Whether you're a regular or visiting for the first time, our friendly service and commitment to quality ensure a dining experience you won’t forget.
          </p>
        </div>

        {/* Spacer */}
        <div className="h-32"></div>

        {/* About Us Button */}
        <div className="
  relative mb-50
  lg:absolute lg:mt-0
  lg:top-[60%] lg:right-[-2rem]
  lg:-translate-y-1/2
  mx-auto
  bg-[#FDEDC0] px-8 py-4 rounded-lg shadow-2xl 
  hover:bg-opacity-90 hover:scale-110 
  transition-all duration-300 
  flex items-center gap-2 
  animate-fade-in delay-500 
  border-2 border-white
">

          <p className="text-black font-semibold tracking-wide">See More</p>
          <a href="/about" className="text-black font-semibold tracking-wide underline">
            ABOUT US
          </a>
        </div>

        {/* Where Are We Badge */}
        <div className="absolute w-[120%] bottom-[30%] rounded-full h-16 flex justify-center items-center bg-black shadow-xl animate-bounce-slow border-4 border-[#FDEDC0]">
          <p className="text-white text-xl font-semibold">
            Where are we located
          </p>
        </div>

        {/* Location Info */}
        <div className="relative mt-50 bottom-20 px-4 space-y-4 text-center w-full animate-fade-in delay-700">
          <div className="hover:scale-105 transition-transform duration-300">
            <p className="font-semibold text-lg text-[#FDEDC0]">Franklin Mills Circle</p>
            <p>427 Franklin Mills Cir, Philadelphia, PA 19154</p>
            <a href="tel:+12673885929" className="underline hover:text-[#FDEDC0] transition">
              (267) 388-5929
            </a>
          </div>
          <div className="mt-6 hover:scale-105 transition-transform duration-300">
            <p className="font-semibold text-lg text-[#FDEDC0]">Saint Vincent Street</p>
            <p>2842 Saint Vincent St, Unit A1, Philadelphia, PA 19149</p>
            <a href="tel:+12679905286" className="underline hover:text-[#FDEDC0] transition">
              (267) 990-5286
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Photo, Directions, and Maps */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-start space-y-12 animate-fade-in delay-300">

        {/* Photo Section */}
        <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <img
            src="Images/Home/foodSpread.webp"
            alt="Pho Nam Giang Restaurant"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Directions Header */}
        <div className="bg-[#FDEDC0] rounded-full px-10 py-4 shadow-lg">
          <h2 className="text-black text-2xl font-bold tracking-wide">
            Directions
          </h2>
        </div>

        {/* Google Maps for Both Locations */}
        <div className="w-full flex flex-col lg:flex-row gap-10 mt-6">

          {/* Franklin Mills Location */}
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-500">
            <div className="bg-[#FDEDC0] rounded-full px-6 py-3 shadow-md">
              <h3 className="text-black text-lg font-semibold tracking-wide text-center">
                Franklin Mills
              </h3>
            </div>
            <div className="w-full h-72 rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.295679985321!2d-74.96177542419006!3d40.09214867380525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b00c2b0e7555%3A0x5b1f75ba21732d15!2sPho%20Nam%20Giang!5e0!3m2!1sen!2sus!4v1713556423442!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* St. Vincent Location */}
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-500">
            <div className="bg-[#FDEDC0] rounded-full px-6 py-3 shadow-md">
              <h3 className="text-black text-lg font-semibold tracking-wide text-center">
                St. Vincent
              </h3>
            </div>
            <div className="w-full h-72 rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.1234567890123!2d-75.054600!3d40.036800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c123456789ab%3A0xabcdef1234567890!2sPho%20Nam%20Giang%20St.%20Vincent!5e0!3m2!1sen!2sus!4v1713556423442!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default InfoThree;
