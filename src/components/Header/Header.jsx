import React from "react";
import profilePicture from "./../../image/profileImg.jpg";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-2 border-b-2 bg-white z-10 sticky top-0 ">
      <div>
        <h1 className="text-3xl font-bold">Knowledge Medium</h1>
      </div>
      <div className="flex gap-4 items-center text-sm font-semibold">
        <a href="/home">HOME</a>
        <a href="/home">BLOGS</a>
        <img
          className="w-10 rounded-full border-2 border-slate-300"
          src={profilePicture}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
