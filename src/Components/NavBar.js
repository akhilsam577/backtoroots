import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-600 bg-white">
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
            <span className="self-center text-2xl  font-semibold whitespace-nowrap dark:text-black">
              BackToRoots
            </span>
          </a>
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
                Arjun{" "}
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
      </nav>
    </div>
  );
};

export default NavBar;
