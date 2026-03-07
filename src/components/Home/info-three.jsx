import Link from "next/link";

const locations = [
  {
    name: "Franklin Mills Circle",
    address: "427 Franklin Mills Cir, Philadelphia, PA 19154",
    phone: "(267) 388-5929",
    tel: "tel:+12673885929",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.295679985321!2d-74.96177542419006!3d40.09214867380525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b00c2b0e7555%3A0x5b1f75ba21732d15!2sPho%20Nam%20Giang!5e0!3m2!1sen!2sus!4v1713556423442!5m2!1sen!2sus",
  },
  {
    name: "Saint Vincent Street",
    address: "2842 Saint Vincent St, Unit A1, Philadelphia, PA 19149",
    phone: "(267) 990-5286",
    tel: "tel:+12679905286",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.1234567890123!2d-75.054600!3d40.036800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c123456789ab%3A0xabcdef1234567890!2sPho%20Nam%20Giang%20St.%20Vincent!5e0!3m2!1sen!2sus!4v1713556423442!5m2!1sen!2sus",
  },
];

const InfoThree = () => {
  return (
    <section className="bg-[#0e0a06] overflow-x-hidden py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-12">

        {/* ── Left: Why Us + Locations ── */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Eyebrow */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs uppercase tracking-[0.3em] text-[rgba(200,140,60)]"
              style={{ fontFamily: "'Crimson Pro', serif", fontStyle: "italic" }}
            >
              Our Story
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#f5e6c8] leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why{" "}
              <span className="italic font-normal text-[#f5c878]">
                Pho Nam Giang?
              </span>
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[rgba(200,140,60,0.4)]" />
              <span className="text-[rgba(200,140,60)] text-xs">✦</span>
              <div className="w-10 h-px bg-[rgba(200,140,60,0.4)]" />
            </div>
          </div>

          {/* Body text */}
          <div
            className="flex flex-col gap-5 text-base sm:text-lg leading-relaxed text-white/90"
            style={{ fontFamily: "'Crimson Pro', serif", fontStyle: "italic" }}
          >
            <p>
              At Pho Nam Giang, we take pride in serving an authentic Vietnamese dining experience that brings the rich flavors of Vietnam to the heart of Philadelphia's vibrant food scene.
            </p>
            <p>
              We believe great food starts with great care — from sourcing the freshest ingredients to crafting each dish with precision. Our dedication to excellence shines through in every bowl.
            </p>
            <p>
              Whether you're a regular or visiting for the first time, our friendly service and commitment to quality ensure a dining experience you won't forget.
            </p>
          </div>

          <Link
            href="/About"
            className="self-start px-7 py-3 text-xs uppercase tracking-widest font-medium text-[#f5c878] border border-[rgba(200,140,60,0.45)] rounded-lg bg-[rgba(200,140,60,0.1)] hover:bg-[rgba(200,140,60,0.22)] transition-colors"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            About Us →
          </Link>

          {/* Location cards */}
          <div className="flex flex-col gap-4 pt-2">
            <p
              className="text-xs uppercase tracking-[0.25em] text-[rgba(200,140,60)]"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Our Locations
            </p>
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="flex flex-col gap-1.5 p-5 rounded-xl border border-[rgba(200,140,60,0.15)] bg-white/[0.02] hover:border-[rgba(200,140,60,0.35)] hover:bg-[rgba(200,140,60,0.05)] transition-all duration-300"
              >
                <p
                  className="text-base font-bold text-[#f5e6c8]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {loc.name}
                </p>
                <p
                  className="text-sm text-white/45 italic"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  {loc.address}
                </p>
                <a
                  href={loc.tel}
                  className="text-sm text-[rgba(200,140,60)] hover:text-[#f5c878] transition-colors"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo + Maps ── */}
        <div className="w-full lg:w-[48%] flex flex-col gap-8">

          {/* Food photo */}
          <div className="rounded-2xl overflow-hidden border border-[rgba(200,140,60,0.2)] shadow-[0_8px_40px_rgba(0,0,0,0.5)] h-64 sm:h-72">
            <img
              src="Images/Home/foodSpread.webp"
              alt="Pho Nam Giang food spread"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* Maps heading */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs uppercase tracking-[0.25em] text-[rgba(200,140,60)]"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Directions
            </p>
            <h3
              className="text-2xl font-bold text-[#f5e6c8]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Us
            </h3>
          </div>

          {/* Maps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="flex flex-col gap-3"
              >
                <p
                  className="text-sm font-bold text-[#f5e6c8]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {loc.name.split(" ")[0]} {loc.name.split(" ")[1]}
                </p>
                <div className="rounded-xl overflow-hidden border border-[rgba(200,140,60,0.18)] shadow-[0_4px_24px_rgba(0,0,0,0.4)] h-52">
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "brightness(0.85) saturate(0.65)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map for ${loc.name}`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoThree;