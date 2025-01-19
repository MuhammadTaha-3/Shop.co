import Link from "next/link";
import React from "react";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { SheetSide } from "./Sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

export default function Header() {
  return (
    <header className="flex w-full h-[60px] justify-between items-center  max-w-screen-2xl mx-auto ">
      {/* Logo and Side Navigation */}
      <div className="flex items-center justify-center">
        <SheetSide />
        <h1 className="text-xl sm:text-3xl font-extrabold pl-2">SHOP.CO</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="space-x-5 flex items-center font-medium">
          <li>
            <NavigationMenuDemo />
          </li>
          <li>
            <Link href="#onsale">On Sale</Link>
          </li>
          <li>
            <Link href="#newarrivals">New Arrivals</Link>
          </li>
          <li>
            <Link href="#brands">Brands</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Search */}
      <div className="hidden md:block">
        <div className="flex justify-start items-center w-[300px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
          <FaSearch className="text-xl ml-2" />
          <input
            type="text"
            placeholder="Search For products..."
            aria-label="Search for products"
            className="w-full h-full ml-2 outline-none rounded-[62px] bg-[#F0F0F0]"
          />
        </div>
      </div>

      {/* Mobile Icons */}
      <div className="flex items-center mr-7 space-x-5">
        <FaSearch className="text-xl ml-2 md:hidden" />
        <select
                  className="text-black text-[12px] w-[70px] cursor-pointer p-1 rounded-xl "
                  name="languages"
                  id="languages"
                  >
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
        {/* <AiOutlineShoppingCart size={24} className="text-2xl" /> */}
        <FaRegUserCircle size={24} className="text-2xl" />
      </div>
    </header>
  );
}
