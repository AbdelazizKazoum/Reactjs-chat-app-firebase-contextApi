import React from "react";
import Chat from "./Chat";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
import './styles/sidebar.scss'

const Sidebar = () => {
    return <div className="sidebar">
        <Navbar />
        <Search />
        <Chats />
    </div>;
};

export default Sidebar;
