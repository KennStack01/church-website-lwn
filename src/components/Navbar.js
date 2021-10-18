/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import { Link } from "gatsby";
// import { Fragment } from 'react'
import { Disclosure } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiArrowDownSFill } from "react-icons/ri";
import { StaticImage } from "gatsby-plugin-image";
// import CommunityCombo from "./CommunityCombo";
import SubPageLinks from "./Community/SubPageLinks";

const navigation = [
  { name: "Welcome", route: "/", current: false },
  { name: "Community", route: "/church", current: false },
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
  const [isHovered, setHovered] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="relative text-gray-900 shadow-sm bg-white backdrop-filter backdrop-blur-xl"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 z-50">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
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
              <div className="flex-1 flex items-center justify-start sm:items-start sm:justify-end md:flex-row md:justify-between">
                <Link
                  to="/"
                  className="flex-shrink-0 flex items-center my-auto md:mx-5"
                >
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
                <div className="sm:flex flex-row hidden sm:ml-6 my-auto mx-0">
                  <div className="flex space-x-4 justify-items-stretch lg:space-x-7">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.route}
                        onMouseEnter={() => {
                          if (
                            item.name === "Community" &&
                            item.route === "/church"
                          ) {
                            setHovered(true);
                          }
                        }}
                        onClick={() => {
                          if (
                            item.name === "Community" &&
                            item.route === "/church"
                          ) {
                            setHovered(true);
                          }
                        }}
                        onMouseLeave={() => {
                          if (item.name === "Community") {
                            setHovered(false);
                          }
                        }}
                        className={classNames(
                          item.current
                            ? "bg-white text-gray-600"
                            : "text-gray-900",
                          "p-3 text-sm md:text-md font-semibold hover:underline flex flex-col"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        activeStyle={activeLinkStyles}
                        activeClassName="active"
                      >
                        <div className="flex flex-row justify-center">
                          <h4>{item.name}</h4>
                          <RiArrowDownSFill
                            className={
                              item.name === "Community"
                                ? `block text-md my-auto mx-1`
                                : "hidden"
                            }
                          />
                        </div>
                        {item.name === "Community" && isHovered && (
                          <div
                            onMouseEnter={() => {
                              if (item.name === "Community") {
                                if (item.current === true) {
                                  setHovered(true);
                                }
                              }
                            }}
                            onMouseLeave={() => {
                              if (item.name === "Community") {
                                setHovered(false);
                              }
                            }}
                            className="absolute z-40 bg-white p-5 mt-8 rounded shadow grid grid-cols-2 place-content-between"
                          >
                            <SubPageLinks />
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-row font-semibold mx-6">
                    <Link
                      to="/contact"
                      className="text-gray-900 hover:text-curious-blue-500 mx-2 my-auto hover:text-red-500"
                      activeStyle={activeLinkStyles}
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                    <Link
                      to="/give"
                      className="p-2 rounded text-white bg-red-600 hover:bg-red-700 mx-2 my-auto"
                    >
                      Partner with us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute bg-white w-full z-50 flex flex-col justify-end p-4">
            <nav className="px-2 pt-2 pb-3 space-y-1 grid grid-cols-2">
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
                  onClick={() => {
                    if (item.name === "Community" && item.route === "/church") {
                      setHovered(!isHovered);
                    }
                  }}
                >
                  <div className="flex flex-row justify-center">
                    <h4 className="">{item.name}</h4>
                    <RiArrowDownSFill
                      onClick={() => {
                        if (
                          item.name === "Community" &&
                          item.route === "/church"
                        ) {
                          setHovered(true);
                        }
                      }}
                      className={
                        item.name === "Community"
                          ? `block text-2xl my-auto mx-1`
                          : "hidden"
                      }
                    />

                    {item.name === "Community" && isHovered && (
                      <div
                        onMouseEnter={() => {
                          if (item.name === "Community") {
                            if (item.current === true) {
                              setHovered(true);
                            }
                          }
                        }}
                        onMouseLeave={() => {
                          if (item.name === "Community") {
                            setHovered(false);
                          }
                        }}
                        className="absolute z-40 bg-white p-5 mt-8 rounded shadow flex flex-col md:grid grid-cols-2 place-content-between"
                      >
                        <SubPageLinks />
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </nav>
            <div className="flex flex-row font-semibold mx-auto">
              <Link
                to="/contact"
                className="text-gray-900 hover:text-curious-blue-500 mx-2 my-auto"
                activeStyle={activeLinkStyles}
              >
                {" "}
                Contact{" "}
              </Link>
              <Link
                to="/give"
                className="p-2 rounded text-white bg-red-600 mx-2 my-auto"
              >
                Partner with us
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
