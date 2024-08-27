import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8 ">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8 sm:mb-0 space-y-5">
            <Link href="/" className="text-2xl">
              Book<span className="text-red-400">Store</span>
            </Link>
            <div>
              <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
              <p>United States</p>
            </div>
            <p className="mt-4">sale@bookworm.com</p>
            <p>+1 246-345-0695</p>
            <div className="flex mt-4 space-x-6">
              <a href="#">
                <FaInstagram></FaInstagram>
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaYoutube></FaYoutube>
              </a>
              <a href="#">
                <FaTwitter></FaTwitter>
              </a>
              <a href="#">
                <FaPinterest></FaPinterest>
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/5 mb-8 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">Explore</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Bookmarks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Sign in/Join
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/5 mb-8 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Product Recalls
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Store Pickup
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/5">
            <h2 className="text-lg font-semibold mb-4">Policy</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center border-t pt-6">
          <p className="text-sm text-gray-600">
            ©2020 Book Worm. All rights reserved
          </p>
          <div className="flex items-center space-x-3">
            <Image
              src="https://bookworm.madrasthemes.com/wp-content/themes/bookworm/assets/img/credit-cards.png"
              alt="Visa"
              height={360}
              width={360}
              className="h-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
