import { TbMessageCircle2 } from "react-icons/tb";
import { PostActions } from "@lib/models";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { RiBookmark3Line } from "react-icons/ri";

export const POST_ACTIONS_DATA: PostActions = [
  {
    title: "Like",
    style: "",
    onClick: () => "",
    icon: AiOutlineHeart,
  },
  {
    title: "Comment",
    style: "",
    onClick: () => "",
    icon: TbMessageCircle2,
  },
  {
    title: "Share",
    style: "",
    onClick: () => "",
    icon: FiSend,
  },
  {
    title: "Bookmark",
    style: "",
    onClick: () => "",
    icon: RiBookmark3Line,
  },
];
