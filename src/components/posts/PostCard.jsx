import {
  BookText,
  CalendarDays,
  Eye,
  FileText,
  Film,
  Flame,
  MapPin,
  Share2,
} from "lucide-react";
import React from "react";

const PostCard = ({
  img,
  type,
  title,
  desc,
  userImg,
  userName,
  views,
  location,
  date,
  manga,
}) => {
  const info = type === "article" ? manga : type === "event" ? date : "";
  const getTypeIcon = (type) => {
    switch (type) {
      case "series":
        return <Flame className="animate-pulse text-red-500 w-4" />;
      case "movies":
        return <Film className="animate-pulse text-blue-500 w-4" />;
      case "article":
        return <FileText className="animate-pulse text-green-500 w-4" />;
      case "event":
        return <CalendarDays className="animate-pulse text-purple-500 w-4" />;
      default:
        return <Flame className="animate-pulse text-red-500 w-4" />;
    }
  };

  return (
    <div className="w-full border border-black/20 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col gap-3">
      {type === "article" ? (
        <div></div>
      ) : (
        <div className="h-[30vh] overflow-hidden">
          <img src={img} alt={title} className="" />
        </div>
      )}
      <p className="flex gap-2 px-4 capitalize">
        {getTypeIcon(type)}
        {type}
      </p>
      <div className="px-4 flex justify-between gap-2">
        <p className="text-xl font-semibold line-clamp-1">{title}</p>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="text-[24px] font-bold tracking-wider leading-none"
          >
            ...
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] max-w-min p-2 shadow"
          >
            <li>
              <a>Edit</a>
            </li>
            <li>
              <a>Delete</a>
            </li>
          </ul>
        </div>
      </div>
      {type === "series" || type === "movies" ? (
        <p className="px-4 line-clamp-1">{desc}</p>
      ) : (
        <div className="px-4">
          <div className="flex items-center mb-3">
            <div className="flex items-center gap-2 flex-1">
              {type === "article" ? (
                <CalendarDays className="w-4" />
              ) : (
                <BookText className="w-4" />
              )}
              <p>{info}</p>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="w-4" />
              <p>{location}</p>
            </div>
          </div>
          {type === "article" ? (
            <button className="w-full border-2 py-2 text-green-500 border-green-300 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-300">
              Read Complete Article
            </button>
          ) : (
            <button className="w-full border-2 py-2 text-purple-500 border-purple-300 rounded-lg hover:bg-purple-500 hover:text-white transition-colors duration-300">
              Register Now!
            </button>
          )}
        </div>
      )}
      <div className="px-4 my-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={userImg}
              alt={userName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="font-semibold">{userName}</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="flex gap-1 items-center">
              <Eye className="w-4" /> {views}k views
            </p>
            <Share2 className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
