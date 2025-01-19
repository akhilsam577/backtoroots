import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-600 fixed  top-0 w-full shadow-md">
        <div className="max-w-full flex flex-wrap items-center justify-between p-3">
          <a
            href="http://localhost:3000/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img
              src="https://media.istockphoto.com/id/866393210/vector/farm-icon.jpg?s=612x612&w=0&k=20&c=CZnGt4ER-NjDGJJMzyYaGEz3ko9BoYnuf2vNRp-cMfc="
              className="h-12 w-14 rounded-md"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              BackToRoots
            </span>
          </a>
          <div className="flex items-center space-x-6">
            {/* Cart Icon with Count */}
            <div className="relative">
              <div className=" flex justify-center items-center">
                <div className="relative py-1">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3  text-xs text-white">
                      3
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file: mt-3 h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* User Icon */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-300 shadow-sm p-1 transition-all"
                id="user-menu-button"
              >
                <img
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  alt="User Avatar"
                />
                <span className="hidden sm:block m-2 font-medium text-gray-700">
                  Arjun
                </span>
              </button>
              <div
                className="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
