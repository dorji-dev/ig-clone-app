"use client";

import { MdAddToPhotos } from "react-icons/md";

const NoPostContent = () => {
  return (
    <div className="flex flex-col items-center mt-20 lg:mt-0 mx-5 py-10 md:py-20 rounded-md bg-white shadow-mainShadow">
      <button className="w-32 h-32 flex justify-center items-center bg-instaBlue/5 rounded-full">
        <MdAddToPhotos className="text-primary" size={36} />
      </button>
      <p className="mt-10 text-gray-400 px-8 text-center">
        Empty feed for now. Click the icon above to start uploading!
      </p>
    </div>
  );
};

export default NoPostContent;
