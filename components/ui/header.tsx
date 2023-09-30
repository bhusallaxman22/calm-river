"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

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
          <div className="shrink-0 mr-4">
            <img
              className="h-20 w-20"
              src="/images/logo.png"
              alt="Calm River"
            />
          </div>

          {/* Desktop navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li className="flex-shrink-0">
                <a href="tel:+1-800-123-4567" className="block">
                  <span className="text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 md:m-2 transition duration-150 ease-in-out">
                    <i className="fas fa-phone-alt"></i>
                    <span className="hidden md:inline"> +1-800-123-4567 </span>
                  </span>
                </a>
              </li>
              <li className="flex-shrink-0 hidden md:flex">
                <div className="flex-shrink-0 border-t border-gray-100"> |</div>
              </li>
              <li className="flex-shrink-0 ml-4">
                <a
                  href="mailto:cinfo@calmriverconsulting.com"
                  className="block"
                >
                  info@calmriverconsulting.com
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
