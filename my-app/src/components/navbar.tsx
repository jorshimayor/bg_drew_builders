"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-gradient-to-r from-violet-900 to-green opacity-70 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:mx-[100px]">
          <div>
            <div className="flex items-center justify-between py-2 md:py-2 md:block">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="B.G builders"
                  width={70}
                  height={50}
                  className="rounded-full"
                />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none focus:border-yellow focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={40} height={40} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={40}
                      height={40}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* NAVBAR FOR DESKTOP */}
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-2 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-700  border-yellow  md:hover:text-yellow md:hover:bg-transparent">
                  <Link href="services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="pb-2 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-700  border-yellow  md:hover:text-yellow md:hover:bg-transparent">
                  <Link href="projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-2 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-700  border-yellow  md:hover:text-yellow md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-2 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-700  border-yellow  md:hover:text-yellow md:hover:bg-transparent">
                  <Link href="contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
