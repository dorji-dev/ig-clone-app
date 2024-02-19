import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import { HeaderNavData } from "../models";

export const HEADER_NAV_DATA: HeaderNavData = [
  {
    title: "Home",
    style: "!hidden md:!flex",
    onClick: () => "",
    icon: FaHome,
  },
  {
    title: "Features",
    style: "",
    onClick: () => "",
    icon: MdOutlineFeaturedPlayList,
  },
  {
    title: "Search",
    style: "!flex md:!hidden",
    onClick: () => "",
    icon: TbSearch,
  },
  {
    title: "Messages",
    style: "!hidden md:!flex",
    onClick: () => "",
    icon: BiMessageRounded,
  },
  {
    title: "Create",
    style: "!hidden md:!flex",
    onClick: () => "",
    icon: AiOutlinePlusCircle,
  },
  {
    title: "Explore",
    style: "!hidden md:!flex",
    onClick: () => "",
    icon: BsPeople,
  },
  {
    title: "Notification",
    style: "",
    onClick: () => "",
    icon: IoMdNotificationsOutline,
  },
];
