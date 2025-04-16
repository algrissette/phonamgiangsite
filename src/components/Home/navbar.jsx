import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="bg-[#393939] border-b border-black text-white dm-serif-text-regular">
      {/* Top Contact Info */}
      <div className="w-full text-sm px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="flex gap-1 flex-wrap justify-center sm:justify-start">
          <a href="https://maps.google.com/?q=40.08624994769334, -74.96491061733288">427 Franklin Mills Cir |</a>
          <a href={`tel:${+12673885929}`}>(267) 388-5929</a>
        </div>
        <div className="flex gap-1 flex-wrap justify-center sm:justify-end">
          <a href="https://maps.google.com/?q=40.041390806040525, -75.05423244432086">2842 St Vincent St |</a>
          <a href={`tel:${+12679905286}`}>(267) 990-5286</a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="flex items-center justify-center w-full">
        <hr className="flex-grow border-t border-white" />
        <div className="mx-10" />
        <hr className="flex-grow border-t border-white" />
      </div>

      {/* Logo + Nav */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-1 gap-4 sm:gap-0">
        {/* Logo/Name */}
        <div className="text-center sm:text-left flex justify-between align-middle">
        <Image src="/Images/Home/pho-nam-giang-logo.avif" alt="Logo Image" width={65} height={65} />
        <p className="font-semibold text-lg relative left-10 top-4.5">Pho Nam Giang</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm sm:text-base font-medium">
          <li className="hover:text-[#F7EAC6] cursor-pointer"><Link href="#"> Home </Link></li>
          <li className="hover:text-[#F7EAC6] cursor-pointer"><Link href="/About"> About </Link></li>
          <li className="hover:text-[#F7EAC6] cursor-pointer"><Link href="/Menu">  Menu </Link></li>
          <li className="hover:text-[#F7EAC6] cursor-pointer"><Link href="/Reviews"> Reviews </Link></li>
          <li className="hover:text-[#F7EAC6] cursor-pointer"><Link href="/contact"> Contact </Link></li>
        </ul>
      </nav>
   
    </header>
  );
};

export default Navbar;
