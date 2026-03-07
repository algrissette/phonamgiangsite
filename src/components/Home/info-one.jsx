import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    icon: "/Images/Home/shrimp.svg",
    alt: "Shrimp Icon",
    title: "Grilled & Fresh",
    text: "House specials with grilled pork, shrimp, and chicken — plus lemongrass options and fresh spring rolls.",
  },
  {
    icon: "/Images/Home/rice.svg",
    alt: "Rice Icon",
    title: "Rice & Mains",
    text: "Chef's specials from beloved grilled short ribs to flavorful rice combos that highlight the best of Vietnamese cuisine.",
  },
  {
    icon: "/Images/Home/cutlery.svg",
    alt: "Vermicelli Icon",
    title: "Rice Vermicelli",
    text: "Perfectly paired with grilled meats and fresh herbs — light, fragrant, and endlessly satisfying.",
  },
];

const InfoOne = () => {
  return (
    <section className="bg-[#0e0a06] py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Heading + Cards */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Section label + heading */}
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <p
              className="text-xs uppercase tracking-[0.3em] text-[rgba(200,140,60)]"
              style={{ fontFamily: "'Crimson Pro', serif", fontStyle: "italic" }}
            >
              What We Serve
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#f5e6c8] leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Phở, Rice Dishes,{" "}
              <span className="italic font-normal text-[#f5c878]">
                Vietnamese Hoagies & More
              </span>
            </h2>

            {/* Ornament */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-10 h-px bg-[rgba(200,140,60,0.4)]" />
              <span className="text-[rgba(200,140,60)] text-xs">✦</span>
              <div className="w-10 h-px bg-[rgba(200,140,60,0.4)]" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.map(({ icon, alt, title, text }) => (
              <div
                key={title}
                className="group flex-white/[0.0 flex-col gap-4 p-6 rounded-2xl border border-white/30 bg3] hover:bg-[rgba(200,140,60,0.07)] hover:border-[rgba(200,140,60,1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 my-2 rounded-full border border-black bg-white flex items-center justify-center flex-shrink-0">
                  <Image
                    src={icon}
                    alt={alt}
                    width={22}
                    height={22}
                    className="object-contain bg-white"

                  />
                </div>

                <h3
                  className="text-base font-bold text-[#f5e6c8]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>

                <p
                  className="text-sm leading-relaxed text-white/90 flex-1 "
                  style={{ fontFamily: "'Crimson Pro', serif", fontStyle: "italic" }}
                >
                  {text}
                </p>

                <Link
                  href="/Menu"
                  className="text-xs uppercase tracking-widest my-9 text-[rgba(200,140,60)] hover:text-[#f5c878] transition-colors font-medium mt-auto"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  See Menu →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-auto flex justify-center flex-shrink-0">
          <div className="rounded-3xl overflow-hidden border border-[rgba(200,140,60,0.2)] shadow-[0_8px_48px_rgba(0,0,0,0.5)] w-full max-w-sm lg:max-w-md">
            <Image
              src="/Images/Home/Hero-Image.png"
              alt="Pho Bowl"
              width={1000}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoOne;