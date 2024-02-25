import { TbMessageCircle2 } from "react-icons/tb";
import { PostActions } from "@lib/models";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { RiBookmark3Line } from "react-icons/ri";

export const POST_ACTIONS_DATA: PostActions = [
  {
    title: "Like",
    style: "",
    icon: AiOutlineHeart,
  },
  {
    title: "Comment",
    style: "",
    icon: TbMessageCircle2,
  },
  {
    title: "Share",
    style: "",
    icon: FiSend,
  },
  {
    title: "Bookmark",
    style: "",
    icon: RiBookmark3Line,
  },
];
