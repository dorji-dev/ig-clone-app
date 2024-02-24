"use client";

import { Link } from "@router/customized";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
import { BiGridAlt, BiHeart } from "react-icons/bi";
import { HiOutlineBookmark } from "react-icons/hi";

const ProfileLayoutLinkTabs = () => {
  const pathName = usePathname();
  const onLikePage = pathName.split("/").pop() === "likes";
  const onSavedPage = pathName.split("/").pop() === "saved";
  const onPostPage =
    pathName.split("/").pop() !== "saved" &&
    pathName.split("/").pop() !== "likes";

  return (
    <section className="flex justify-center border-t border-solid border-t-gray-200 shadow-sm">
      <Link
        href="/user/23452345"
        className={clsx(
          "flex items-center grow sm:grow-0 sm:px-8 py-4 border-b-[2px] focus:outline-none tracking-[1px] justify-center font-[600] text-sm",
          onPostPage
            ? "border-b-primary text-primary"
            : "border-b-transparent text-gray-400",
          "hover:bg-gray-100 transition-all duration-300"
        )}
      >
        <BiGridAlt className="mr-2 h-8 w-8 sm:h-4 sm:w-4" />{" "}
        <span className="hidden sm:block">POSTS</span>
      </Link>
      <Link
        href="/user/3456456/likes"
        className={clsx(
          "flex items-center grow sm:grow-0 sm:px-8 py-4 border-b-[2px] focus:outline-none tracking-[1px] justify-center font-[600] text-sm",
          onLikePage
            ? "border-b-primary text-primary"
            : "border-b-transparent text-gray-400",
          "hover:bg-gray-100 transition-all duration-300"
        )}
      >
        <BiHeart className="mr-2 h-8 w-8 sm:h-4 sm:w-4" />{" "}
        <span className="hidden sm:block">LIKES</span>
      </Link>
      {true && (
        <Link
          href="/user/345645/saved"
          className={clsx(
            "flex items-center grow sm:grow-0 sm:px-8 py-4 border-b-[2px] focus:outline-none tracking-[1px] justify-center font-[600] text-sm",
            onSavedPage
              ? "border-b-primary text-primary"
              : "border-b-transparent text-gray-400",
            "hover:bg-gray-100 transition-all duration-300"
          )}
        >
          <HiOutlineBookmark className="mr-2 h-8 w-8 sm:h-4 sm:w-4" />{" "}
          <span className="hidden sm:block">SAVED</span>
        </Link>
      )}
    </section>
  );
};

export default ProfileLayoutLinkTabs;
