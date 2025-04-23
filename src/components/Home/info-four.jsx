import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const InfoFour = () => {
  return (
    <section className="w-full bg-[#FFF8E4] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 animate-fadeIn">
          {/* Gallery Header */}
          <h2 className="text-4xl font-serif text-[#000000] mb-6">Gallery</h2>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <img src="/gallery1.jpg" alt="Gallery item" className="rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300" />
            <img src="/gallery2.jpg" alt="Gallery item" className="rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 col-span-2" />
            <img src="/gallery3.jpg" alt="Gallery item" className="rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300" />
            <img src="/gallery4.jpg" alt="Gallery item" className="rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300" />
            <img src="/gallery5.jpg" alt="Gallery item" className="rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 col-span-2" />
          </div>

          {/* Socials Section */}
          <div className="mt-12 animate-fadeInUp">
            <h3 className="text-2xl font-serif text-[#000000] mb-4">Add us on socials</h3>
            <div className="flex gap-6">
              <a href="#" className="text-[#393939] hover:text-[#FFE6A1] text-3xl transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#393939] hover:text-[#FFE6A1] text-3xl transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#393939] hover:text-[#FFE6A1] text-3xl transition-all duration-300">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 animate-fadeInUp">
          <div className="bg-[#FFFFFF] rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 relative overflow-hidden group">

            {/* Decorative image */}
            <img 
              src="/interior.jpg" 
              alt="Restaurant Interior" 
              className="w-full h-48 object-cover rounded-2xl shadow-md mb-6 group-hover:scale-105 transition-transform duration-500"
            />

            {/* Hours */}
            <h3 className="text-3xl font-serif text-[#000000] mb-4">Hours of Operation</h3>
            <ul className="text-lg text-[#393939] font-light space-y-2 text-center">
              <li>Monday: 10am - 8pm</li>
              <li>Tuesday: 10am - 8pm</li>
              <li>Wednesday: 10am - 8pm</li>
              <li>Thursday: 10am - 9pm</li>
              <li>Friday: 10am - 10pm</li>
              <li>Saturday: 11am - 10pm</li>
              <li>Sunday: 11am - 7pm</li>
            </ul>

            {/* Reviews Button */}
            <a 
              href="/reviews"
              className="mt-8 inline-block bg-[#000000] text-[#FFE6A1] px-8 py-3 rounded-full text-xl font-semibold hover:bg-[#393939] hover:text-[#FFF8E4] transition-all duration-300 shadow-lg"
            >
              See Reviews
            </a>

            {/* Cute floating decorations */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#FFE6A1] rounded-full blur-2xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FFE6A1] rounded-full blur-3xl opacity-50"></div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoFour;
