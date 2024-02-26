import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import { HeaderNavData } from "../models";

export type NextFetchTags = 'Post' | 'Comment';

export type FETCH_METHODS = "POST" | "GET" | "DELETE" | "PATCH" | "PUT";

export const HEADER_NAV_DATA: HeaderNavData = [
  {
    title: "Home",
    style: "!hidden md:!flex",
    icon: FaHome,
  },
  {
    title: "Features",
    style: "!flex",
    icon: MdOutlineFeaturedPlayList,
  },
  {
    title: "Search",
    style: "!flex md:!hidden",
    icon: TbSearch,
  },
  {
    title: "Messages",
    style: "!hidden md:!flex",
    icon: BiMessageRounded,
  },
  {
    title: "Create",
    style: "!hidden md:!flex",
    icon: AiOutlinePlusCircle,
  },
  {
    title: "Explore",
    style: "!hidden md:!flex",
    icon: BsPeople,
  },
  {
    title: "Notification",
    style: "!flex",
    icon: IoMdNotificationsOutline,
  },
];
