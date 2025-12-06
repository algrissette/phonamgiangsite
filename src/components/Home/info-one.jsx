import Image from "next/image";

const InfoOne = () => {
  return (
    <div className="bg-tertiary py-10 overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-16">

        {/* Cards Section */}
        <div className="flex-1 flex flex-col items-center">

          {/* Heading */}
          <h2 className=" px-auto dm-serif-text-regular-italic text-3xl font-bold text-[#393939] mb-8 text-center md:text-left w-full">
            Pho, Rice dishes, Vietnamese hoagies and more!
          </h2>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="bg-primary rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[200px] h-72 flex flex-col items-center p-5 text-center relative transition-shadow hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <div className="w-16 h-16 flex items-center justify-center bg-white border-4 border-white rounded-full shadow-sm mb-4">
                <Image
                  src="/Images/Home/shrimp.svg"
                  alt="Shrimp Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-700 mb-8">
                Enjoy our house special with grilled pork, shrimp, and chicken, or try our flavorful lemongrass options and fresh spring rolls.
              </p>
              <a href="/Menu">
                <p className="text-sm text-[#393939] absolute bottom-4 right-4 font-semibold underline hover:text-[#F7EAC6] transition-colors cursor-pointer">
                  See More
                </p>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-primary rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[200px] h-72 flex flex-col items-center p-5 text-center relative transition-shadow hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <div className="w-16 h-16 flex items-center justify-center bg-white border-4 border-white rounded-full shadow-sm mb-4">
                <Image
                  src="/Images/Home/rice.svg"
                  alt="Short Ribs Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-700 mb-8">
                Savor our chef's specials, from the beloved grilled short ribs to a variety of flavorful rice combos that highlight the best of Vietnamese cuisine.
              </p>
              <a href="/Menu">
                <p className="text-sm text-[#393939] absolute bottom-4 right-4 font-semibold underline hover:text-[#F7EAC6] transition-colors  cursor-pointer">
                  See Here
                </p>
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-primary rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] w-[200px] h-72 flex flex-col items-center p-5 text-center relative transition-shadow hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              <div className="w-16 h-16 flex items-center justify-center bg-white border-4 border-white rounded-full shadow-sm mb-4">
                <Image
                  src="/Images/Home/cutlery.svg"
                  alt="Vermicelli Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-700 mb-8">
                Enjoy our Rice Vermicelli, perfectly paired with your choice of grilled meats, fresh herbs.
              </p>
              <a href="/Menu">
                <p className="text-sm text-[#393939] absolute bottom-4 right-4 font-semibold underline hover:text-[#F7EAC6] transition-colors cursor-pointer">
                  See Here
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/3 lg:w-auto flex justify-center">
          <Image
            src="/Images/Home/Hero-Image.png"
            alt="Pho Bowl"
            width={1000}
            height={400}
            className="rounded-3xl object-cover w-full h-auto max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoOne;
