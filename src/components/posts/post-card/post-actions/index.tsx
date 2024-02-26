"use client";

import { POST_ACTIONS_DATA } from "@lib/constants";
import { useTailwindMediaQuery } from "@lib/hooks";
import { Button, Tooltip } from "antd";
import clsx from "clsx";
import React from "react";
import { PostActionHandlers, PostActionWithHandler } from "@lib/models";
import { useRouter } from "@router/customized";
import { useGetCurrentUserQuery } from "@state";

const PostActions = () => {
  const { mediaMatches: isAbove768 } = useTailwindMediaQuery("768");
  const router = useRouter();

  const postActionHandlers: PostActionHandlers = {
    Bookmark: () => "",
    Comment: () => router.push("/post/34563456"),
    Like: () => "",
    Share: () => "",
  };

  const POST_ACTIONS_WITH_HANDLER: PostActionWithHandler[] =
    POST_ACTIONS_DATA.map((action) => ({
      ...action,
      onClick: postActionHandlers[action.title],
    }));

  return (
    <div className="flex mb-4 justify-between px-5">
      {POST_ACTIONS_WITH_HANDLER.map((actionData) => (
        <Tooltip
          key={actionData.title}
          placement="bottom"
          title={isAbove768 ? actionData.title : ""}
        >
          <Button
            shape="circle"
            type="dashed"
            className={clsx(
              "!h-auto !p-2 !mr-[12px] last:!mr-0",
              actionData.style,
              actionData.title === "Bookmark" && "ml-auto"
            )}
            onClick={actionData.onClick}
          >
            <actionData.icon className="w-5 h-5" />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};

export default PostActions;
