"use client";
import { Badge, Button } from "antd";

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
    <div className="md:hidden flex justify-between w-full border-solid border-0 border-t-[1px] border-gray-200  bg-white py-4 px-5 z-10 fixed bottom-0">
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
      <Badge count={10} className="order-2" offset={[-4, 4]}>
        <Button
          shape="circle"
          type="text"
          className="relative !flex justify-center items-center !h-auto !p-[5px]"
          onClick={() => router.push("/direct/inbox")}
        >
          <BiMessageRounded className="w-5 h-5" />
        </Button>
      </Badge> 
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
