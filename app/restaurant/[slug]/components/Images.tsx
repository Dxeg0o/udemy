import React from "react";

export default function Images() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">5 photos</h1>
      <div className="flex flex-wrap">
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/55924224.webp"
          alt=""
          className="w-56 h-44 mb-1 mr-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/24713929.webp"
          alt=""
          className="w-56 h-44 mb-1 mr-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/51625286.webp"
          alt=""
          className="w-56 h-44 mb-1 mr-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/55924174.webp"
          alt=""
          className="w-56 h-44 mb-1 mr-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/55924227.webp"
          alt=""
          className="w-56 h-44 mb-1 mr-1"
        />
      </div>
    </div>
  );
}
