import React from "react";

const SingleBookmark = (props) => {
  const { id, blogTitle } = props.bookmark;
  return (
    <>
      <div className="rounded bg-white p-2 my-1 text-lg font-semibold">
        <h1>{blogTitle}</h1>
      </div>
    </>
  );
};

export default SingleBookmark;
