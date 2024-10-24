"use client";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (href) => pathname === href;

  return (
    <header className=" bg-black/[0.89] h-20 flex justify-center w-full">
      <nav
        aria-label="Global"
        className=" flex z-10 fixed lg:w-3/5 lg:rounded-full shadow-2xl lg:bg-black/[0.90] container items-center lg:justify-center lg:p-8 lg:m-4 p-6 justify-between lg:px-4 "
      >
            <div className="lg:hidden"
            onClick={()=>setMobileMenuOpen(false)}>

         <Link
              className="text-md xl:text-xl md:text-xl font-black text-white drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:text-gray-200 hover:animate-pulse relative group"
              href="/"
              >
              N
              <span className="text-gray-400 drop-shadow-lg  transition-all duration-500 ease-in-out group-hover:text-gray-300 group-hover:ml-1">
                o
              </span>
              <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:rotate-12">
                m
              </span>
              <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:-rotate-12">
                a
              </span>
              <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:rotate-6">
                n
              </span>
            </Link>
                </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only ">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`text-md font-semibold ${
              isActive("/") ? "text-white" : "text-gray-400"
            } transition-colors duration-300  `}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-md font-semibold ${
              isActive("/about") ? "text-white" : "text-gray-400"
            } transition-colors duration-300`}
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className={`text-md font-semibold ${
              isActive("/projects") ? "text-white" : "text-gray-400"
            } transition-colors duration-300 `}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-md font-semibold text-gray-300 px-4 border rounded-full bg-gray-900 transition-colors duration-300 `}
          >
            Contact
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black/[0.94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between ">
            <Link
              className="text-md xl:text-xl md:text-xl font-black text-white drop-shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:text-gray-200 hover:animate-pulse relative group"
              href="/"
            >
              N
              <span className="text-gray-400 drop-shadow-lg  transition-all duration-500 ease-in-out group-hover:text-gray-300 group-hover:ml-1">
                o
              </span>
              <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:rotate-12">
                m
              </span>
              <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:-rotate-12">
                a
              </span>
              <span className="inline-block drop-shadow-lg transition-transform duration-500 ease-in-out group-hover:rotate-6">
                n
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 " />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-6 py-10 flex flex-col">
                <Link
                  href="/"
                  className={`text-md font-semibold ${
                    isActive("/") ? "text-white" : "text-gray-400"
                  } transition-colors duration-300`}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className={`text-md font-semibold ${
                    isActive("/projects") ? "text-white" : "text-gray-400"
                  } transition-colors duration-300`}
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className={`text-md font-semibold ${
                    isActive("/about") ? "text-white" : "text-gray-400"
                  } transition-colors duration-300`}
                >
                  About Me
                </Link>
                <Link
                  href="/contact"
                  className={`text-md font-semibold ${
                    isActive("/contact") ? "text-white" : "text-gray-400"
                  } transition-colors duration-300`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
