"use client";

import { Tooltip, Button } from "antd";
import React from "react";
import clsx from "clsx";
import { useTailwindMediaQuery } from "@lib/hooks";
import { HEADER_NAV_DATA } from "@lib/constants";
import { IoPersonCircle } from "react-icons/io5";

const Navigation = () => {
  const { mediaMatches: isAbove768 } = useTailwindMediaQuery("768");

  return (
    <div className="flex md:ml-5 items-center justify-end space-x-4">
      {HEADER_NAV_DATA.map((navData) => (
        <Tooltip
          key={navData.title}
          placement="bottom"
          title={isAbove768 ? navData.title : ""}
        >
          <Button
            shape="circle"
            type="text"
            className={clsx(
              "justify-center items-center !h-auto !p-2",
              navData.style
            )}
            onClick={navData.onClick}
          >
            <navData.icon className="w-5 h-5" />
          </Button>
        </Tooltip>
      ))}
      <Tooltip
          placement="bottom"
          title={isAbove768 ? 'Profile' : ""}
        >
          <Button
            shape="circle"
            type="text"
            className={clsx(
              "!hidden md:!flex justify-center items-center !h-auto !p-2",
            )}
          >
            <IoPersonCircle className="w-5 h-5" />
          </Button>
        </Tooltip>
    </div>
  );
};

export default Navigation;
