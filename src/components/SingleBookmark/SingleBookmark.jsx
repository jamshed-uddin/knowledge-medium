import React from "react";

const SingleBookmark = (props) => {
  const { id, blogTitle } = props.bookmark;
  return (
    <>
      <div className="rounded bg-white p-2 my-2 cursor-pointer text-lg font-semibold drop-shadow-lg">
        <h1>{blogTitle}</h1>
      </div>
    </>
  );
};

export default SingleBookmark;
