import React from "react";
import Posts from "./posts/Posts";
import SidePanel from "./sidepanel/SidePanel";

const Main = () => {
  return (
    <div className="px-40 py-8 flex min-h-screen items-start gap-40">
      <Posts />
      <SidePanel />
    </div>
  );
};

export default Main;
