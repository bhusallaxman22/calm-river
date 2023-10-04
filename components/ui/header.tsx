"use client";

import { useState, useEffect } from "react";
import LogoImage from "@/public/images/logo.png";
import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          {/* <Logo /> */}
          <Link href="/">
            <div className="shrink-0 mr-4">
              <Image src={LogoImage} alt="Logo" height={120} width={120} />
            </div>
          </Link>
          {/* Desktop navigation */}
          <nav className="flex flex-grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="tel:+1-800-123-4567"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <i className={`mr-2 fas fa-phone-volume`}></i>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@calmriverconsulting.com"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Email Us
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
