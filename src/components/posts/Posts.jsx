import { Flame } from "lucide-react";
import React from "react";
import PostContainer from "./PostContainer";

const Posts = () => {
  
  return (
    <div className="flex-1">
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab mb-8"
          aria-label="All&nbsp;Posts(4)"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content">
          <PostContainer filter="all" />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab mb-8"
          aria-label="Series(1)"
        />
        <div role="tabpanel" className="tab-content">
          <PostContainer filter="series" />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab mb-8"
          aria-label="Movies(1)"
        />
        <div role="tabpanel" className="tab-content">
          <PostContainer filter="movies" />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab mb-8"
          aria-label="Articles(1)"
        />
        <div role="tabpanel" className="tab-content">
          <PostContainer filter="article" />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab mb-8"
          aria-label="Events(1)"
        />
        <div role="tabpanel" className="tab-content">
          <PostContainer filter="event" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
