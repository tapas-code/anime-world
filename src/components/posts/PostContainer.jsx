import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import animeData from "../../data/animeData";

const PostContainer = ({ filter }) => {
  var filteredAnime = animeData.filter((anime) => anime.type === filter);
  if (filter === "all") filteredAnime = animeData;

  return (
    <div className="w-[94%] flex flex-col gap-6 ">
      {filteredAnime &&
        filteredAnime.map((anime) => (
          <PostCard
            key={anime.id}
            img={anime.img}
            type={anime.type}
            title={anime.title}
            desc={anime.desc}
            userImg={anime.userImg}
            userName={anime.userName}
            views={anime.views}
            location={anime.location}
            date={anime.date}
            manga={anime.manga}
          />
        ))}
    </div>
  );
};

export default PostContainer;
