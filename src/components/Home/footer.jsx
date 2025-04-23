import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#393939] text-[#FFF8E4] py-12 px-6 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div className="space-y-4 flex flex-col items-start">
          {/* Logo */}
          <img 
            src="/logo.png" 
            alt="Pho Nam Giang Logo" 
            className="h-16 w-auto mb-4"
          />
          
          {/* Brand Name and Description */}
          <h2 className="text-2xl font-bold text-[#FFE6A1]">Pho Nam Giang</h2>
          <p className="text-sm">
            Traditional Vietnamese flavors, fresh ingredients, and heartfelt hospitality. Join us for a meal to remember.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/phonamgiangg/" target="_blank" rel="noopener noreferrer" className="text-[#FFE6A1] hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/namgiangrestaurant" target="_blank" rel="noopener noreferrer" className="text-[#FFE6A1] hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.tiktok.com/@phonamgiangg" target="_blank" rel="noopener noreferrer" className="text-[#FFE6A1] hover:text-white transition">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FFE6A1]">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/menu" className="hover:text-[#FFE6A1]">Menu</a></li>
            <li><a href="/about" className="hover:text-[#FFE6A1]">About Us</a></li>
            <li><a href="/reviews" className="hover:text-[#FFE6A1]">Reviews</a></li>
            <li><a href="/contact" className="hover:text-[#FFE6A1]">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FFE6A1]">Visit Us</h3>
          <div className="text-sm space-y-2">
            <div>
              <p className="font-semibold">Franklin Mills Circle</p>
              <p>427 Franklin Mills Cir<br />Philadelphia, PA 19154</p>
              <a href="tel:+12673885929" className="hover:text-[#FFE6A1]">(267) 388-5929</a>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Saint Vincent Street</p>
              <p>2842 Saint Vincent St, Unit A1<br />Philadelphia, PA 19149</p>
              <a href="tel:+12679905286" className="hover:text-[#FFE6A1]">(267) 990-5286</a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-[#FFF8E4] mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Pho Nam Giang. Built with love.
      </div>
    </footer>
  );
};

export default Footer;
