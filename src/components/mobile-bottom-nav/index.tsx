"use client";
import { Button } from "antd";

import React from "react";
import Image from "next/image";
import { Link, useRouter } from "@router/customized";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const MobileBottomNav = () => {
  const router = useRouter();

  return (
    <div className="md:hidden flex justify-between w-full border-solid border-0 border-t-[1px] border-gray-200  bg-white py-3 px-5 z-10 fixed bottom-0">
      <Button
        shape="circle"
        type="text"
        className="order-1 !flex justify-center items-center !h-auto !p-[5px]"
        onClick={() => router.push("/")}
      >
        <FaHome className="w-5 h-5" />
      </Button>
      <Button
        shape="circle"
        type="text"
        className="order-3 !flex justify-center items-center !h-auto !p-[5px]"
      >
        <AiOutlinePlusCircle className="w-5 h-5" />
      </Button>
      <Button
        shape="circle"
        type="text"
        className="order-4 !flex justify-center items-center !h-auto !p-[5px]"
      >
        <BsPeople className="w-5 h-5" />
      </Button>
      <Button
        shape="circle"
        type="text"
        className="relative order-2 !flex justify-center items-center !h-auto !p-[5px]"
        onClick={() => router.push("/direct/inbox")}
      >
        <span className="absolute -top-1 -right-1 text-xs w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white z-10 animate-pulse">
          3
        </span>
        <BiMessageRounded className="w-5 h-5" />
      </Button>
      <Link href="/">
        <Image
          src="/images/default-user.png"
          width={32}
          height={32}
          className="order-5 object-cover rounded-full"
          alt="user-avatar"
        />
      </Link>
    </div>
  );
};

export default MobileBottomNav;
