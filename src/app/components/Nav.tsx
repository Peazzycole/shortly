"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Image src="/logo.svg" alt="" height={33} width={121} />
          <div className="hidden space-x-8 font-bold lg:flex">
            <Link
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </Link>
          </div>
        </div>

        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <div className="hover:text-veryDarkViolet">Login</div>
          <Link
            href="#"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </Link>
        </div>

        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div
        id="menu"
        className={`absolute ${
          isOpened ? "block" : "hidden"
        } p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <Link href="#" className="w-full text-center">
            Features
          </Link>
          <Link href="#" className="w-full text-center">
            Pricing
          </Link>
          <Link href="#" className="w-full text-center">
            Resources
          </Link>
          <Link
            href="#"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </Link>
          <Link
            href="#"
            className="w-full py-3 text-center rounded-full bg-cyan"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
