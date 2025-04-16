import "@/Styles/Home.css"; // works if you have a baseUrl set to "src"
 // ✅ Simplified with alias, assuming you're using Next.js 13+
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" hero-background w-full h-120 max-h-150 sm:h-145  dm-serif-text-regular">
      <div className="container mx-5">

      <p className="tagline relative top-10">Savor the Soul of Vietnam, One Bowl at a Time</p>
      <h1 className="pho-nam-giang relative top-20 text-4xl"> PHO NAM GIANG, </h1>
      <p className="introduction relative top-30  max-w-75 lg:w-auto lg:mx-50"> 

where every steaming bowl of pho is crafted with love, tradition, and the richest, slow-simmered broths. Whether you're craving the deep umami of beef pho, the fresh zest of herbs, or the perfect balance of spices, we bring you an authentic taste of Vietnam with every bite.</p>
      <p className="entice relative top-40">Pull up a chair, slurp away, and let the flavors transport you</p>
      <h2 className="information relative top-50 -mx-5 sm:mx-0"> 📍Near Franklin Mills Mall |  🥢 Dine-In & Takeout | ❤ Made Fresh Daily</h2>

      </div>
     <Image className="absolute right-2.5 bottom-30 sm:bottom-3" src="/Images/Home/Pho-nam-giang-logo.avif" alt="Logo" width={150} height={150}/> 

   
    </div>
  );
};

export default Hero;
