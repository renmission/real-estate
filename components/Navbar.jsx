import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3 } from "@heroicons/react/20/solid";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const Navbar = () => {
  return (
    // <div className="flex justify-between p-2 border-gray-100 border-b-2">
    //   <div className="text-3xl text-blue-500 font-bold">
    //     <Link href="/" className="pl-2">
    //       Realty.
    //     </Link>
    //   </div>
    //   <Menu as="div" className="relative inline-block text-left">
    //     <div>
    //       <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </Menu.Button>
    //     </div>

    //     <Transition
    //       as={Fragment}
    //       enter="transition ease-out duration-100"
    //       enterFrom="transform opacity-0 scale-95"
    //       enterTo="transform opacity-100 scale-100"
    //       leave="transition ease-in duration-75"
    //       leaveFrom="transform opacity-100 scale-100"
    //       leaveTo="transform opacity-0 scale-95"
    //     >
    //       <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //         <div className="py-1">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <div
    //                 className={classNames(
    //                   active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                   "px-4 py-2 text-sm flex items-center justify-start space-x-4 cursor-pointer"
    //                 )}
    //               >
    //                 <FcHome />
    //                 <Link href="/">Home</Link>
    //               </div>
    //             )}
    //           </Menu.Item>
    //           <Menu.Item>
    //             {({ active }) => (
    //               <div
    //                 className={classNames(
    //                   active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                   "px-4 py-2 text-sm flex items-center justify-start space-x-4 cursor-pointer"
    //                 )}
    //               >
    //                 <BsSearch />
    //                 <Link href="search">Search</Link>
    //               </div>
    //             )}
    //           </Menu.Item>
    //           <Menu.Item>
    //             {({ active }) => (
    //               <div
    //                 className={classNames(
    //                   active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                   "px-4 py-2 text-sm flex items-center justify-start space-x-4 cursor-pointer"
    //                 )}
    //               >
    //                 <FcAbout />
    //                 <Link href="/search?purpose=for-sale">Buy Property</Link>
    //               </div>
    //             )}
    //           </Menu.Item>
    //           <form method="POST" action="#">
    //             <Menu.Item>
    //               {({ active }) => (
    //                 <div className={classNames(
    //                   active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                   "px-4 py-2 text-sm flex items-center justify-start space-x-4 cursor-pointer"
    //                 )}>
    //                   <FiKey />
    //                   <Link
    //                     href="/search?purpose=for-rent"

    //                   >
    //                     Rent Property
    //                   </Link>
    //                 </div>
    //               )}
    //             </Menu.Item>
    //           </form>
    //         </div>
    //       </Menu.Items>
    //     </Transition>
    //   </Menu>
    // </div>

    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <h2 className="text-white font-bold text-2xl">Realty.</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    <Link href="/search?purpose=for-sale">
                      <div className=" text-white hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium">
                        <span>Buy Property</span>
                      </div>
                    </Link>

                    <Link href="/search?purpose=for-rent">
                      <div className=" text-white hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium flex items-center space-x-2">
                        <span>Rent Property</span>
                      </div>
                    </Link>

                    <Link href="search">
                      <div className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium flex items-center space-x-2">
                        <span>Search</span> <BsSearch />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="block sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button>
                <div className="flex justify-center items-center align-middle w-full">
                  <Link href="/search?purpose=for-sale">
                    <div className=" text-white hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium">
                      <span>Buy Property</span>
                    </div>
                  </Link>

                  <Link href="/search?purpose=for-rent">
                    <div className=" text-white hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium flex items-center space-x-2">
                      <span>Rent Property</span>
                    </div>
                  </Link>

                  <Link href="search">
                    <div className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-6 py-2 text-sm font-medium flex items-center space-x-2">
                      <span>Search</span> <BsSearch />
                    </div>
                  </Link>
                </div>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
