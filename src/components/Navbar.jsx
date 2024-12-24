import { ChevronDown, Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-3 px-40 justify-between items-center">
      <div className="text-2xl font-semibold cursor-pointer ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ATG.</span>WORLD
      </div>

      <div className="bg-[#f1f1f1] border border-black/20 text-gray-500 flex gap-2  py-2.5 px-5 pe-10 rounded-full">
        <Search />
        Search for your favorite anime in ATG
      </div>

      <div className="flex gap-1 items-end">
        Create Account. <span className="text-blue-600 cursor-pointer">It's free!</span>
        <ChevronDown className="w-4 pt-1" />
      </div>
    </div>
  );
};

export default Navbar;
