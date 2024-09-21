import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        <h1 className="text-xl font-bold">Paint and Electrical Services</h1>
        </Link>
       
        
        {/* Book Now Button */}
        <Link to="/book-now">
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100">
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
