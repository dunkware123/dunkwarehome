
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  let enterTimeoutId;
  let leaveTimeoutId;

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeoutId);
    enterTimeoutId = setTimeout(() => {
      setShowDropdown(true);
    }, 50); // Delay when entering
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimeoutId);
    leaveTimeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 1000); // Delay when leaving
  };
  return (
    <div>
        <nav class="flex justify-between">
        <div class="text-white text-2xl">
          <Link to="/"><span><i class="fa-solid fa-outdent mr-3"></i></span>
            <span text-red-700>Dunk</span><span class="text-green-500">strem</span></Link>
        </div>
        <div class="">
          <ul class="flex justify-between space-x-6 text-lg text-white">
            <li class="hidden lg:block hover:text-pink-600"><Link to="/tecnology">Tecnology</Link></li>
            <li className="hidden lg:block">
              <div
                className="relative group hover:text-pink-600"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/solution">Solution</Link>
                {showDropdown && (
                  <div className="absolute w-44 bg-gray-700 text-white mt-2 p-2 rounded-lg">
                    {/* Add your dropdown content here */}
                    <ul>
                      <li className="my-4 hover:text-green-700 p-2">
                        <Link to="/solution/subpage1">Cloud Solutions</Link>
                      </li>
                      <li className="my-4 hover:text-green-700 p-2">
                        <Link to="/solution/subpage2">Alternative Data</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li class="hidden lg:block hover:text-pink-600"><Link to="/contact">Contact</Link></li>
           
           
            <li class="text-green-500 block">login</li>
            <li class="text-green-500 block lg:hidden"><i class="fa-solid fa-bars"></i></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar