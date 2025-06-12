import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import clsx from 'clsx';
import { Link as LinkScroll } from "react-scroll";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(false)
    
    const NavLink = ({title}) =>(
    <LinkScroll
     onClick={() => setIsOpen(false)}
     to={title} 
     offset={-100}
     smooth spy 
    activeClass='active' className='leading-[24px] transition-color duration-500
    cursor-pointer max-lg:my-4 max-lg:text-[32px] max-lg:text-semibold'>{title}</LinkScroll>
);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container h-16 max-lg:px-4 px-30 flex items-center justify-between bg-white shadow-lg ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden cursor-pointer"
        >
          <IoMenu size={26} />
        </button>
        <LinkScroll to="/" smooth spy offset={-100} className="flex left-0 max-lg:justify-center">
        <a className="max-lg:flex-1 max-lg:ml-4">
          <img
            src="/images/logo.png"
            alt="logo"
            width={115}
            height={55}
            className="w-70 h-auto max-lg:w-30 cursor-pointer"/>
        </a>
        </LinkScroll>

        <div
          className={clsx(
            "w-full max-lg:w-full max-lg:fixed max-lg:-z-10 max-lg:top-0 max-lg:left-0 max-lg:opacity-0 transition-all duration-500",
            isOpen ? "max-lg:opacity-100" : "max-lg:opacity-0"
          )}
        >
          <div className="flex items-center justify-center max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:over-flow-hidden max-lg:bg-gray-200 max-lg:px-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2">
              <ul className="flex gap-8 items-center max-lg:block max-lg:px-10 max-lg:w-full max-lg:text-3xl max-lg:font-semibold max-lg:py-5">
                <select className="max-lg:w-full max-lg:mb-5 cursor-pointer font-bold hover:text-gray-600">
                  <LinkScroll to="topSelling" smooth spy offset={-100}>
                  <option value="shop">Shop</option>
                  <option value="Best Sellers">Best Sellers</option>
                  <option value="Gifts">Gifts</option>
                  </LinkScroll>
                </select>
                <li className="max-lg:mb-5 cursor-pointer font-bold hover:text-gray-600">
                <NavLink title="Top Selling"/>
                </li>

                <li className="max-lg:mb-5 cursor-pointer font-bold mb- hover:text-gray-600">
                <NavLink title="New Arrivals"/>
                </li>

                <li className="max-lg:mb-5 cursor-pointer font-bold hover:text-gray-600">
                  Brands
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex max-lg:items-center max-lg:justify-center items-center">
          <div className="flex relative max-lg:-mr-7 group">
            <input
              type="text"
              placeholder="Search for products..."
              className="px-12 max-lg:mx-5 max-lg:px-10 max-lg:py-1 py-2 w-[577px] bg-gray-300/50 rounded-full focus:outline-none max-lg:border-0 max-lg:w-0 max-lg:bg-white max-lg:group-hover:w-[250px] max-lg:group-hover:bg-gray-300/50 transition-all duration-500"
            />
            <CiSearch
              size={24}
              className="absolute max-lg:top-1 max-lg:left-8 top-2 left-4 text-gray-800 font-bold cursor-pointer"
            />
          </div>
          <FiShoppingCart size={24} className="mx-3 cursor-pointer" />
          <div>
            <FaRegUserCircle
              onClick={() => setUser(!user)}
              size={24}
              className="mx-3 cursor-pointer"
            />
            <ul
              className={clsx(
                "fixed mt-5 max-lg:right-5 px-4 py-4 rounded-xl ",
                user ? "opacity-100 bg-gray-300/50 z-2 backdrop-blur-2xl" : "opacity-0"
              )}
            >
              <li className="cursor-pointer text-sm font-bold w-full px-4 py-2 rounded-full mb-3 hover:text-gray-600">
                Account
              </li>
              <li className="cursor-pointer text-sm font-bold w-full px-4 py-2 rounded-full mb-3 hover:text-gray-600">
                Sign In
              </li>
              <li className="cursor-pointer text-sm font-bold w-full px-4 py-2 rounded-full mb-3 hover:text-gray-600">
                Log out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
