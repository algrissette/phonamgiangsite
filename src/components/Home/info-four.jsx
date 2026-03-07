import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const galleryImages = [
  { src: "Images/Home/gallery1.jpg", span: "" },
  { src: "Images/Home/gallery2.jpg", span: "col-span-2" },
  { src: "Images/Home/gallery3.jpg", span: "" },
  { src: "Images/Home/gallery4.jpg", span: "" },
  { src: "Images/Home/gallery5.jpg", span: "col-span-2" },
];

const hours = [
  { day: "Monday", time: "10:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 8:00 PM" },
  { day: "Thursday", time: "10:00 AM – 9:00 PM" },
  { day: "Friday", time: "10:00 AM – 10:00 PM" },
  { day: "Saturday", time: "11:00 AM – 10:00 PM" },
  { day: "Sunday", time: "11:00 AM – 7:00 PM" },
];

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/phonamgiangg/?hl=en", label: "Instagram" },
  { icon: FaFacebook, href: "https://www.facebook.com/namgiangrestaurant/?locale=vi_VN", label: "Facebook" },
  { icon: FaTiktok, href: "https://www.tiktok.com/discover/pho-nam-giang-franklin-mills-mall", label: "TikTok" },
];

const InfoFour = () => {
  return (
    <section className="bg-[#0e0a06] py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-12">

        {/* ── LEFT: Gallery + Socials ── */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs uppercase tracking-[0.3em] text-[rgba(200,140,60)]"
              style={{ fontFamily: "'Crimson Pro', serif", fontStyle: "italic" }}
            >
              From Our Kitchen
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#f5e6c8] leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Gallery
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[rgba(200,140,60,0.4)]" />
              <span className="text-[rgba(200,140,60,0.4)] text-xs">✦</span>
              <div className="w-10 h-px bg-[rgba(200,140,60,0.4)]" />
            </div>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-3 gap-3">
            {galleryImages.map(({ src, span }, i) => (
              <div
                key={i}
                className={`${span} rounded-xl overflow-hidden border border-[rgba(200,140,60,.5)] shadow-[0_4px_20px_rgba(0,0,0,0.4)]`}
              >
                <img
                  src={src}
                  alt={`Gallery photo ${i + 1}`}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4 pt-2">
            <p
              className="text-xs uppercase tracking-[0.25em] text-[rgba(200,140,60)]"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Follow Us
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-[rgba(200,140,60)] bg-white/[0.03] flex items-center justify-center text-[rgba(200,140,60)] hover:text-[#f5c878] hover:border-[rgba(200,140,60,0.55)] hover:bg-[rgba(200,140,60,0.1)] transition-all duration-300 text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Hours + Interior + CTA ── */}
        <div className="w-full lg:w-[42%] flex flex-col gap-0 rounded-2xl overflow-hidden border border-[rgba(200,140,60)] shadow-[0_8px_48px_rgba(0,0,0,0.5)]">

          {/* Interior photo */}
          <div className="h-52 overflow-hidden">
            <img
              src="Images/Home/InteriorPhoto.webp"
              alt="Restaurant Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-5 p-7 bg-white/[0.025]">
            <div className="flex flex-col gap-1">
              <p
                className="text-xs uppercase tracking-[0.25em] text-[rgba(200,140,60)]"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                We're Open
              </p>
              <h3
                className="text-2xl font-bold text-[#f5e6c8]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hours of Operation
              </h3>
            </div>

            <div className="flex flex-col divide-y divide-[rgba(200,140,60)]">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex justify-between items-center py-2.5">
                  <span
                    className="text-sm font-medium text-[#f5e6c8]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {day}
                  </span>
                  <span
                    className="text-sm italic text-[rgba(200,140,60)]"
                    style={{ fontFamily: "'Crimson Pro', serif" }}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/Reviews"
              className="w-full text-center py-3.5 text-xs uppercase tracking-widest font-medium text-[#f5c878] border border-[rgba(200,140,60,0.45)] rounded-lg bg-[rgba(200,140,60,0.1)] hover:bg-[rgba(200,140,60,0.22)] transition-colors"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              See Reviews →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoFour;