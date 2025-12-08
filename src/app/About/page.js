import Footer from "@/components/Home/footer";
import Navbar from "@/components/Home/navbar";
import SocialMedia from "@/components/Home/socialMedia";

const AboutPage = () => {
  const locations = [
    {
      name: "Franklin Mills Circle",
      address: "Franklin Mills Circle, Philadelphia, PA",
      mapsLink: "https://maps.google.com/?q=Pho+Nam+Giang+Franklin+Mills",
      phone: "tel:+12153331777",
    },
    {
      name: "St. Vincent Street",
      address: "St. Vincent Street, Philadelphia, PA",
      mapsLink: "https://maps.google.com/?q=Pho+Nam+Giang+St+Vincent",
      phone: "tel:+12153331234",
    },
  ];

  return (
    <div className="dm-serif-text-regular min-h-screen bg-primary text-secondary">
      <Navbar />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12 items-center md:items-start">

        {/* Left: Locations Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative bg-secondary w-full max-w-md p-8 pb-24 flex flex-col items-center text-white rounded-lg shadow-xl overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary opacity-10 rounded-full" />

            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white bg-gray-300 z-10">
              <img
                src="/Images/Home/OutsidePhoto1.png"
                alt="Pho Nam Giang"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Visit Us!
              </h2>
              <p className="text-base sm:text-lg">Pho Nam Giang Locations</p>
            </div>

            <div className="mt-8 w-full flex flex-col gap-6 z-10">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {loc.name}
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={loc.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-secondary font-semibold py-2 px-6 rounded shadow hover:bg-gray-100 transition"
                    >
                      Directions
                    </a>

                    <a
                      href={loc.phone}
                      className="bg-primary text-secondary font-semibold py-2 px-6 rounded shadow hover:bg-amber-100 transition"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Triangle bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-t-[40px] border-t-white"></div>
            </div>
          </div>
        </div>

        {/* Right: About Us */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
            About Us!
          </h1>

          <div className="relative">
            <div className="absolute -inset-2 bg-secondary opacity-10 rounded-xl blur" />
            <div className="relative border border-gray-300 rounded-xl p-6 sm:p-8 bg-white shadow-lg text-gray-700 hover:shadow-2xl transition-all">
              <p className="text-base sm:text-lg leading-relaxed">
                At Pho Nam Giang, we bring the heart and soul of Vietnamese
                cuisine to Philadelphia. Our family-owned restaurant is
                passionate about authentic flavors, fresh ingredients, and
                creating a welcoming atmosphere.
                <br />
                <br />
                From our signature pho to crispy bánh mì and fresh spring
                rolls, every dish is crafted with tradition and love. We’re
                proud to be part of the Philadelphia community with two
                convenient locations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-primary opacity-10 rounded-xl blur" />
            <div className="relative border border-gray-300 rounded-xl p-6 sm:p-8 bg-white shadow-lg text-gray-700 hover:shadow-2xl transition-all">
              <p className="text-base sm:text-lg leading-relaxed">
                📍 Franklin Mills Circle | 📍 St. Vincent Street
                <br />
                ⏰ Open Daily: 11:30 AM – 9:30 PM
                <br />
                🌐 phonamgiang.com
                <br />
                📲 Follow us on Instagram & Facebook
                <br />
                <br />
                Let’s eat. Let’s connect. Let’s celebrate great food together!
                🍜✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Stats + Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-10">

        {/* Stats Cards */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-secondary shadow-md rounded-lg p-6 text-white">
            <h3 className="text-3xl font-bold text-primary mb-2">4.7 Stars</h3>
            <p>Google Rating ⭐⭐⭐⭐✰</p>
          </div>
          <div className="bg-secondary shadow-md rounded-lg p-6 text-white">
            <h3 className="text-3xl font-bold text-primary mb-2">
              10+ Years
            </h3>
            <p>of Experience</p>
          </div>
          <div className="bg-secondary shadow-md rounded-lg p-6 text-white">
            <h3 className="text-3xl font-bold text-primary mb-2">
              600+ Reviews
            </h3>
            <p>Across Locations</p>
          </div>
        </div>

        {/* Restaurant Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/Images/Home/OutsidePhoto.jpg"
            alt="Pho Nam Giang Interior"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Section 3: Hours + Maps + Socials */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-16">

        {/* Hours */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 text-secondary">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Hours of Operation
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <tbody className="text-lg">
                {[
                  ["Monday", "11:30 AM – 9:30 PM"],
                  ["Tuesday", "11:30 AM – 9:30 PM"],
                  ["Wednesday", "11:30 AM – 9:30 PM"],
                  ["Thursday", "11:30 AM – 9:30 PM"],
                  ["Friday", "11:30 AM – 9:30 PM"],
                  ["Saturday", "11:30 AM – 9:30 PM"],
                  ["Sunday", "11:30 AM – 9:30 PM"],
                ].map(([day, hours], idx) => (
                  <tr key={idx} className="border-b last:border-none text-center sm:text-left">
                    <td className="py-2 font-semibold">{day}</td>
                    <td className="py-2 sm:text-right">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md text-secondary text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{loc.name}</h3>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  loc.address
                )}&output=embed`}
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                className="rounded-md"
              />
            </div>
          ))}
        </div>

        <SocialMedia />
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
