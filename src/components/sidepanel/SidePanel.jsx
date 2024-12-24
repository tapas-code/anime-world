import {
  ChevronDown,
  CircleAlert,
  Group,
  LocateIcon,
  LocateOffIcon,
  MapPin,
  Pencil,
  Users,
} from "lucide-react";
import React from "react";
import Groups from "../Groups";

const SidePanel = () => {
  return (
    <div className=" flex flex-col gap-10">
      <header className="flex gap-4 justify-end">
        <details className="dropdown">
          <summary className="flex px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer text-sm  rounded-md">
            Write a post{" "}
            <span>
              <ChevronDown className="w-4 ms-2" />
            </span>
          </summary>
          <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-full p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>

        <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:to-purple-600  transition duration-300 text-white rounded-md cursor-pointer flex items-center">
          <Users className="h-4" />
          Join Group
        </button>
      </header>

      <div className="px-2 flex gap-2">
        <MapPin />
        Leaf, Konoha
        <div className="flex-1 flex justify-end">
          <Pencil />
        </div>
      </div>

      <div className="px-2 w-full h-[1px] bg-black/20 -mt-7"></div>

      <div className="px-2 text-black/40 flex gap-2">
        <CircleAlert className="w-4" />
        Your location will help us serve better
        and <br /> extend a personalised experience.
      </div>

      <div className="px-2">
        <Groups />
      </div>
    </div>
  );
};

export default SidePanel;
