import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-[#393939] text-white dm-serif-text-regular sticky top-0 z-50 shadow-lg">

      {/* Top Info Bar */}
      <div className="text-xs sm:text-sm px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0 bg-[#2d2d2d]">

        {/* Location 1 */}
        <div className="flex items-center justify-center sm:justify-start gap-2 whitespace-nowrap">
          <a
            href="https://maps.google.com/?q=40.08624994769334,-74.96491061733288"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7EAC6] transition-colors"
          >
            427 Franklin Mills Cir
          </a>
          <span className="hidden sm:inline"> | </span>
          <a href="tel:+12673885929" className="hover:text-[#F7EAC6] transition-colors">
            (267) 388-5929
          </a>
        </div>

        {/* Location 2 */}
        <div className="flex items-center justify-center sm:justify-end gap-2 whitespace-nowrap">
          <a
            href="https://maps.google.com/?q=40.041390806040525,-75.05423244432086"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7EAC6] transition-colors"
          >
            2842 St Vincent St
          </a>
          <span className="hidden sm:inline"> | </span>
          <a href="tel:+12679905286" className="hover:text-[#F7EAC6] transition-colors">
            (267) 990-5286
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-3 gap-3">

        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/Images/Home/pho-nam-giang-logo.avif"
            alt="Pho Nam Giang Logo"
            width={42}
            height={42}
            className="rounded-full shrink-0"
          />
          <span className="text-base sm:text-xl font-semibold whitespace-nowrap">
            Pho Nam Giang
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex w-full sm:w-auto justify-between sm:justify-end gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base font-medium">
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