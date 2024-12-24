import { ThumbsUp } from "lucide-react";
import React from "react";
import groups from "../data/groupsData";

const Groups = () => {
  return (
    <div className="flex flex-col gap-6 mt-2">
      {/* Header Section */}
      <div className="flex gap-2 items-center uppercase text-gray-800 font-semibold">
        <ThumbsUp />
        <span>Recommended Groups</span>
      </div>

      {/* Groups List */}
      {groups && groups.length > 0 ? (
        <div className="flex flex-col gap-4">
          {groups.map((group, index) => (
            <div
              key={group.id || index}
              className="flex items-center gap-3 rounded-lg"
            >
              <img
                src={group.image || "https://via.placeholder.com/150"}
                alt={group.title || "Group Image"}
                className="w-14 h-14 object-cover rounded-full border border-black/20"
              />
              <p className="flex-1 text-gray-700 font-medium">
                {group.title || "Unnamed Group"}
              </p>
              <button className="bg-gray-200 px-3 py-1.5 text-xs rounded-xl ml-auto hover:bg-gray-300">
                Follow
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No groups found</p>
      )}

      <div className="text-blue-500 cursor-pointer ml-auto">
        See More...
      </div>
    </div>
  );
};

export default Groups;
