import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    fetch("blogInfo.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const bookmarkedBlogs = JSON.parse(localStorage.getItem("bookmark"));
    setBookmarks(bookmarkedBlogs);
  }, []);

  // add to bookmark button
  const addToBookmarkHandler = ({ id, blogTitle, readTime }) => {
    const PreviousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    const bookmark = [];
    const blogInfo = { id, blogTitle, readTime };

    if (PreviousBookmark) {
      const bookmarked = PreviousBookmark.find((blog) => blog.id == id);
      if (bookmarked) {
        toast("Already bookmarked !");
      } else {
        bookmark.push(...PreviousBookmark, blogInfo);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));

        setBookmarks(bookmark);
      }
    } else {
      bookmark.push(blogInfo);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
      setBookmarks(bookmark);
    }
  };

  // mark as read button
  const markAsReadHandler = (id) => {
    const blogIndividual = blogs.find((blog) => blog.id === id);

    setReadTime(readTime + blogIndividual.readTime);
  };

  // clear bookmark button
  const clearBookmarkHandler = () => {
    console.log("delete bookmark btn clicked");
    const bookmark = [];
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    setBookmarks(bookmark);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-3 md:col-span-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            addToBookmarkHandler={addToBookmarkHandler}
            markAsReadHandler={markAsReadHandler}
          ></Blog>
        ))}
      </div>
      <div className="col-span-3 md:col-span-1 bg-slate-100 rounded-lg my-2 p-3">
        <Bookmark
          bookmarks={bookmarks}
          readTime={readTime}
          clearBookmarkHandler={clearBookmarkHandler}
        ></Bookmark>
      </div>
    </div>
  );
};

export default Main;
