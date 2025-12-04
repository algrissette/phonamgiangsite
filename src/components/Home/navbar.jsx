import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-[#393939] text-white dm-serif-text-regular sticky top-0 z-50 border-b border-black shadow-md">
      {/* Top Info Bar */}
      <div className="text-sm px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Location 1 */}
        <div className="flex gap-2 flex-wrap justify-center sm:justify-start text-center sm:text-left">
          <a
            href="https://maps.google.com/?q=40.08624994769334,-74.96491061733288"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7EAC6]"
          >
            427 Franklin Mills Cir |
          </a>
          <a href="tel:+12673885929" className="hover:text-[#F7EAC6]">
            (267) 388-5929
          </a>
        </div>

        {/* Location 2 */}
        <div className="flex gap-2 flex-wrap justify-center sm:justify-end text-center sm:text-right">
          <a
            href="https://maps.google.com/?q=40.041390806040525,-75.05423244432086"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7EAC6]"
          >
            2842 St Vincent St |
          </a>
          <a href="tel:+12679905286" className="hover:text-[#F7EAC6]">
            (267) 990-5286
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center w-full">
        <hr className="flex-grow border-white opacity-40" />
        <div className="mx-10" />
        <hr className="flex-grow border-white opacity-40" />
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4 sm:gap-0">
        {/* Logo and Name */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/Images/Home/pho-nam-giang-logo.avif"
              alt="Pho Nam Giang Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-semibold">Pho Nam Giang</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm sm:text-base font-medium">
          <li>
            <Link href="/" className="hover:text-[#F7EAC6] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-[#F7EAC6] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/Menu" className="hover:text-[#F7EAC6] transition-colors">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/Reviews" className="hover:text-[#F7EAC6] transition-colors">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-[#F7EAC6] transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
