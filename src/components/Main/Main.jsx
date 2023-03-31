import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    fetch("blogInfo.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const addToBookmarkHandler = ({ id, blogTitle }) => {
    const PreviousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    const bookmark = [];
    const blogInfo = { id, blogTitle };
    // console.log(blogInfo);
    if (PreviousBookmark) {
      const bookmarked = PreviousBookmark.find((blog) => blog.id == id);
      if (bookmarked) {
        console.log("ache");
        toast("Already bookmarked !");
      } else {
        bookmark.push(...PreviousBookmark, blogInfo);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
      }
    } else {
      bookmark.push(blogInfo);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
  };

  // console.log(blogs);
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-3 md:col-span-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            addToBookmarkHandler={addToBookmarkHandler}
          ></Blog>
        ))}
      </div>
      <div className="col-span-3 md:col-span-1 bg-slate-100 rounded-lg my-2 p-3">
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </div>
  );
};

export default Main;
