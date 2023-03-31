import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Blog = (props) => {
  const {
    id,
    authorName,
    blogTitle,
    coverImage,
    authorImage,
    readTime,
    publishDate,
  } = props.blog;

  const addToBookmarkHandler = props.addToBookmarkHandler;
  // console.log(authorImage);

  return (
    <div className="my-2">
      <div>
        <img className=" rounded-lg" src={coverImage} alt="" />
      </div>
      <div className="flex justify-between my-4">
        <div className="flex gap-2 cursor-pointer">
          <div>
            <img className="w-10 rounded-full" src={authorImage} alt="" />
          </div>
          <div>
            <p className="text-lg font-bold">{authorName}</p>
            <p>{publishDate}</p>
          </div>
        </div>
        <div>
          {readTime} minute read{" "}
          <span
            onClick={() => addToBookmarkHandler(props.blog)}
            className="cursor-pointer text-xl px-3"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-3">{blogTitle}</h1>
      </div>
      <div className="mb-2">
        <p>#beginner #programming</p>
      </div>
      <div>
        <button
          onClick={markAsReadHandler}
          className="text-blue-700 hover:text-black font-semibold underline"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
