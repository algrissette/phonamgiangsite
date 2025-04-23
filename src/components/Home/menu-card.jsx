const MenuCard = ({ number, photo, dish }) => {
  return (
    <div className="dm-serif-text-regular relative flex flex-col items-center w-[220px] h-[260px] m-6 rounded-lg bg-primary shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-300/30 group">

      {/* Number Badge */}
      <div className="absolute -top-5 -left-2 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-xs font-semibold shadow-md z-20 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
        {number}
      </div>

      {/* Top Section with Image and Curve */}
      <div className="relative w-full h-[42%] bg-black rounded-t-xl overflow-hidden">
        <div className="absolute w-full h-6 bg-cream rounded-t-[100%]"></div>
        <img
          src={photo}
          alt={dish}
          className="absolute top-8 left-1/2 w-20 h-20 transform -translate-x-1/2 object-cover rounded-full border-4 border-white shadow-md z-10 group-hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* White swoop background */}
      <div className="relative -top-4 w-full h-[8%] bg-primary rounded-t-[110%]"></div>

      {/* Dish Name */}
      <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center bg-primary">
        <p className="text-black font-semibold text-sm group-hover:text-yellow-500 transition-all duration-300">{dish}</p>
      </div>

    </div>
  );
};

export default MenuCard;
