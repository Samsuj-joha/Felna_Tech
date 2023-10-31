import React, { useState } from 'react';

const Software = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-40">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className=" inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Software
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
              role="menuitem"
            >
              Item 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
              role="menuitem"
            >
              Item 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
              role="menuitem"
            >
              Item 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Software;
