import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-primary w-full flex justify-between items-center px-4 md:px-8 lg:px-20 text-white py-4 md:py-6 lg:py-8">
      <img src="/WanderStay-logo.png" className="w-56 md:w-72" alt="logo" />

      <ul className="flex gap-6">
        <li className="font-semibold text-xl">Login</li>
        <li className="font-semibold text-xl">Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
