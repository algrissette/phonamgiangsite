import Image from "next/image";
import "@/Styles/Home.css";

const Hero = () => {
  return (
    <section className="relative hero-background w-full min-h-[600px] flex items-center py-20 text-white dm-serif-text-regular overflow-x-hidden">
      <div className="container mx-5 px-6 flex flex-col gap-6 text-center sm:text-left max-w-xl z-10">

        <p className="text-lg sm:text-xl font-light">
          Savor the Soul of Vietnam, One Bowl at a Time
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
          PHO NAM GIANG
        </h1>

        <p className="text-base sm:text-lg leading-relaxed">
          Where every steaming bowl of pho is crafted with love, tradition, and
          the richest, slow-simmered broths. Whether you're craving the deep
          umami of beef pho, the fresh zest of herbs, or the perfect balance of
          spices — we bring you an authentic taste of Vietnam with every bite.
        </p>

        <p className="text-base italic sm:text-lg">
          Pull up a chair, slurp away, and let the flavors transport you.
        </p>

        <h2 className="text-sm sm:text-base font-medium text-[#f7eac6]">
          📍 Near Franklin Mills Mall | 🥢 Dine-In & Takeout | ❤ Made Fresh Daily
        </h2>

        {/* ✅ MOBILE LOGO — now below text */}
        <div className="flex justify-center sm:hidden mt-6">
          <Image
            src="/Images/Home/pho-nam-giang-logo.avif"
            alt="Pho Nam Giang Logo"
            width={100}
            height={100}
            className="opacity-90"
          />
        </div>
      </div>

      {/* ✅ DESKTOP LOGO — original position restored */}
      <div className="hidden sm:block absolute bottom-6 right-6">
        <Image
          src="/Images/Home/pho-nam-giang-logo.avif"
          alt="Pho Nam Giang Logo"
          width={120}
          height={120}
          className="opacity-90"
        />
      </div>
    </section>
  );
};

export default Hero;
