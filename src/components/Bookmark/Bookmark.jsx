import React from "react";
import SingleBookmark from "../SingleBookmark/SingleBookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faDeleteLeft,
  faXmark,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";

const Bookmarks = (props) => {
  const bookmarks = props.bookmarks;

  return (
    <div>
      <div className="bg-blue-200 border-2 border-blue-700 rounded-lg py-3">
        <div className="text-blue-700 text-center text-lg font-semibold">
          Spend time on read: 0 min
        </div>
      </div>
      <div className="px-3 py-1 mt-2 border-b-2 border-blue-700 bg-white font-semibold flex justify-between items-center">
        <h1>Bookmarked blogs: {bookmarks.length}</h1>
        <div>
          <button className="bg-slate-200 rounded-lg px-2">
            Clear <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
        </div>
      </div>
      <div className="my-2 ">
        {bookmarks.map((bookmark) => (
          <SingleBookmark
            key={bookmark.id}
            bookmark={bookmark}
          ></SingleBookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
