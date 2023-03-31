import React from "react";
import SingleBookmark from "../SingleBookmark/SingleBookmark";

const Bookmarks = (props) => {
  const bookmarks = props.bookmarks;

  return (
    <div>
      <div className="bg-blue-200 border-2 border-blue-700 rounded-lg py-3">
        <div className="text-blue-700 text-center text-lg font-semibold">
          Spend time on read: 0 min
        </div>
      </div>
      <div className="my-2 ">
        {bookmarks.map((bookmark) => (
          <SingleBookmark bookmark={bookmark}></SingleBookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
