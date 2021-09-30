/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "gatsby";
// import { Fragment } from 'react'
import { Disclosure } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { StaticImage } from "gatsby-plugin-image";
// import { StaticImage } from "gatsby-plugin-image";
// import Logo from "../assets/NezaLab-Logo.svg";

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

const Header = () => {
  return (
    <div className="mx-auto">
      <Disclosure as="nav" className="text-gray-900">
        {({ open }) => (
          <div className="flex flex-row justify-between ">
            <div className="mx-auto px-2 sm:px-3 lg:px-6 z-50">
              {/* <div className="flex justify-start sm:items-start sm:justify-end md:flex-row md:justify-between"> */}
              <div className="flex flex-row">
                <Link to="/" className="left-0 my-auto">
                  {/* <Logo width={100} /> */}
                  <StaticImage
                    src="../images/logo-lwn.png"
                    width={70}
                    quality={95}
                    placeholder="blurred"
                    layout="fixed"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Church Logo"
                  />
                </Link>
                <div className="sm:flex flex-row justify-between hidden my-auto">
                  <div className="flex space-x-2 justify-items-stretch">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.route}
                        className={classNames(
                          item.current
                            ? "bg-white text-gray-600"
                            : "text-gray-900",
                          "p-3 text-sm md:text-md font-semibold hover:underline"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        activeStyle={activeLinkStyles}
                        activeClassName="active"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-row font-semibold mx-6">
                    <Link
                      to="/contact"
                      className="text-gray-900 hover:text-curious-blue-500 mx-2 my-auto"
                      activeStyle={activeLinkStyles}
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                    <Link
                      to="/giveNow"
                      className="p-2 rounded text-white bg-red-600 mx-2 my-auto"
                    >
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:hidden my-auto">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-curios-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-curios-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CgClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiOutlineMenuAlt4
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden z-50 absolute bg-white shadow-sm w-full mt-16">
              <nav className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.route}
                    className={classNames(
                      item.current
                        ? "bg-white text-gray-600"
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
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
