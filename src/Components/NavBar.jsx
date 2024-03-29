import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import theDudeLogo from "../Imgs/theDudeLogo2.png";
import theDudeLogoSmall from "../Imgs/theDudeLogo3.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const navigation = [
  { name: "TIENDA", to: "/store", current: false },
  { name: "CERVEZAS", to: "/store/beer", current: false },
  { name: "VINOS", to: "/store/wine", current: false },
  { name: "ESPIRITUOSAS", to: "/store/spirit", current: false },
  { name: "OFERTAS", to: "/store/offer", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-red-rug-600 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-rug-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 stroke-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 stroke-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to={"/home"}>
                    <img
                      className="block lg:hidden h-4 w-auto"
                      src={theDudeLogoSmall}
                      alt="the Dude logo"
                    />
                    <img
                      className="hidden lg:block h-4 w-auto"
                      src={theDudeLogo}
                      alt="the Dude logo"
                    />
                  </Link>
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-red-rug-900 text-white"
                            : "text-gray-100 hover:bg-red-rug-700 hover:text-white",
                          "px-2 py-2 rounded-md text-xs font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CartWidget />
                {/* Profile dropdown */}

                <Menu as="div" className="ml-3 relative z-50">
                  <div to="#">
                    <Menu.Button className="bg-red-rug-700 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full "
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/film-the-big-lebowski-1998-the-dude-jeff-bridges-tops-pendleton-shawl-cardigan-1548360217.jpg?crop=0.545xw:1.00xh;0.312xw,0&resize=640:*"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-red-rug-400" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Login(en construcción)
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/favourites"
                            className={classNames(
                              active ? "bg-red-rug-400" : "",
                              "block px-4 py-2 text-sm text-gray-700 "
                            )}
                          >
                            Mis Favoritos
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  className={classNames(
                    item.current
                      ? "bg-red-rug-700 text-white"
                      : "text-gray-100 hover:bg-red-rug-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  key={item.name}
                >
                  <Link as="Link" to={item.to}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
