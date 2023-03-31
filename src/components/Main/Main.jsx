import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogInfo.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-3 md:col-span-2">
        {blogs.map((blog) => (
          <Blog blog={blog}></Blog>
        ))}
      </div>
      <div className="col-span-3 md:col-span-1 bg-slate-100 rounded-lg my-2 p-3"></div>
    </div>
  );
};

export default Main;
