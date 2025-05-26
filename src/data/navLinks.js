import { LuLayoutDashboard } from "react-icons/lu";
import { MdThumbsUpDown, MdOutlineAddBox } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TbPresentationFilled } from "react-icons/tb";
import { IoChatbubbleEllipsesOutline, IoCall } from "react-icons/io5";

export const menuItems = [
    {
        name : "Dashboard",
        link : "/",
        icon : LuLayoutDashboard,
        category : 'General',
    },
    {
        name : "History",
        link : "#",
        icon : MdThumbsUpDown,
        category : 'General',
    },
    {
        name : "Calendar",
        link : "#",
        icon : FaCalendarAlt,
        category : 'General',
    },
    {
        name : "Appointments",
        link : "#",
        icon : MdOutlineAddBox,
        category : 'General',
    },
    {
        name : "Statistics",
        link : "#",
        icon : TbPresentationFilled,
        category : 'General',
    },
    {
        name : "Chat",
        link : "#",
        icon : IoChatbubbleEllipsesOutline,
        category : 'Tools',
    },
    {
        name : "Support",
        link : "#",
        icon : IoCall,
        category : 'Tools',
    }
]