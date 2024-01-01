import React, { useState } from 'react';

const Dropdown = ({address }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Toggle Dropdown
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {/* Dropdown content goes here */}
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
