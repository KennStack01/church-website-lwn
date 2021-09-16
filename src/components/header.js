/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "gatsby";
// import { Fragment } from 'react'
import { Disclosure } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { CgClose } from "react-icons/cg";
import { RiMenu3Line } from "react-icons/ri";
import { StaticImage } from "gatsby-plugin-image";
// import Logo from "../images/logo-lwn.png";

function Header() {
  const navigation = [
    { name: "Welcome", route: "/", current: false },
    { name: "Community", route: "/community", current: false },
    { name: "Bible School", route: "/bibleSchool", current: false },
    { name: "Resources", route: "/resources", current: false },
    { name: "Events", route: "/events", current: false },
    // { name: "Contact", route: "/contact", current: false },
    // { name: "Give now", route: "/giveNow", current: false },
  ];

  const activeLinkStyles = {
    color: "#000000",
    fontWeight: "bold",
    textDecoration: "underline",
    textDecorationColor: "#FF2149",
    textUnderlinePosition: "under",
    textDecorationThickness: "4px",
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <header className="bg-white shadow-sm">
      <div className="flex   p-2 mx-auto md:px-4 md:py-1">
        {/* <div className="flex flex-wrap items-center justify-between max-w-full p-2 mx-auto md:px-4 md:py-1"> */}
        <Disclosure as="nav" className="text-gray-900 top-0 sticky">
          {({ open }) => (
            <>
              <div className="mx-auto px-2 sm:px-6 lg:px-8 z-50">
                {/* <div className="relative flex flex-row items-center justify-between h-16"> */}
                <div className="relative flex flex-row justify-between ">
                  {/* <div className="flex-1 flex items-center justify-start sm:items-start sm:justify-end md:flex-row md:justify-between"> */}
                  <div className="flex flex-row justify-between">
                    <Link
                      to="/"
                      className="flex-shrink-0 flex items-center my-auto"
                    >
                      {/* <Logo width={100} /> */}
                      <StaticImage
                        src="../images/logo-lwn.png"
                        width={80}
                        quality={95}
                        placeholder="blurred"
                        layout="fixed"
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Church Logo"
                      />
                    </Link>
                    <div className="hidden sm:block sm:ml-6 my-auto">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.route}
                            className={classNames(
                              item.current
                                ? "bg-white text-gray-600"
                                : "text-gray-900",
                              "py-3 px-8 text-sm font-semibold hover:underline"
                            )}
                            aria-current={item.current ? "page" : undefined}
                            activeStyle={activeLinkStyles}
                            activeClassName="active"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="absolute inset-y-0 right-0 flex items-center sm:hidden"> */}
                  <div className="my-auto">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-curios-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-curios-blue-500 md:hidden px-2">
                      {/* <span className="sr-only">Open main menu</span> */}
                      {open ? (
                        <CgClose className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <RiMenu3Line
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden z-50 absolute bg-white shadow-sm w-full">
                <nav className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.route}
                      className={classNames(
                        item.current
                          ? " bg-new-red-700 text-white"
                          : "text-gray-900 hover:text-curious-blue-500",
                        "block py-3 px-8 rounded-md text-base font-semibold"
                      )}
                      aria-current={item.current ? "page" : undefined}
                      activeStyle={activeLinkStyles}
                      activeClassName="active"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
}

export default Header;
