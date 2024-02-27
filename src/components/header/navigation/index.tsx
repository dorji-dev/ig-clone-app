"use client";

import { Tooltip, Button } from "antd";
import React from "react";
import clsx from "clsx";
import { useTailwindMediaQuery } from "@lib/hooks";
import { HEADER_NAV_DATA } from "@lib/constants";
import Image from "next/image";
import { HeaderNavActions, HeaderNavDataWithAction } from "@lib/models";
import { useRouter } from "@router/customized";

const Navigation = () => {
  const router = useRouter();
  const { mediaMatches: isAbove768 } = useTailwindMediaQuery("768");
  const HEADER_NAV_ACTIONS: HeaderNavActions = {
    Create: () => "",
    Explore: () => "",
    Features: () => router.push("/features"),
    Home: () => router.push("/"),
    Messages: () => "",
    Notification: () => "",
    Search: () => "",
  };

  const NAV_DATA_WITH_ACTION: HeaderNavDataWithAction[] = HEADER_NAV_DATA.map(
    (navData) => ({
      ...navData,
      action: HEADER_NAV_ACTIONS[navData.title],
    })
  );

  return (
    <div className="flex md:ml-5 items-center justify-end space-x-4">
      {NAV_DATA_WITH_ACTION.map((navData) => (
        <Tooltip
          key={navData.title}
          placement="bottom"
          title={isAbove768 ? navData.title : ""}
        >
          <Button
            aria-label={navData.title}
            shape="circle"
            type="text"
            className={clsx(
              "justify-center items-center !h-auto !p-2",
              navData.style
            )}
            onClick={navData.action}
          >
            <navData.icon className="w-5 h-5" />
          </Button>
        </Tooltip>
      ))}
      <Tooltip placement="bottom" title={isAbove768 ? "Profile" : ""}>
        <Button
          aria-label="Profile"
          onClick={() => router.push("/user/32463456")}
          shape="circle"
          type="text"
          className={clsx(
            "!hidden md:!flex justify-center items-center !h-auto !p-1"
          )}
        >
          <Image
            className="object-cover rounded-full border p-[2px]"
            src="/images/default-user.png"
            width={32}
            height={32}
            alt="current user"
          />
        </Button>
      </Tooltip>
    </div>
  );
};

export default Navigation;
