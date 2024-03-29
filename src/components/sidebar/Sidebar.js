import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
    AttachMoney,
    BarChart, ChatBubbleOutline, DynamicFeed,
    LineStyle,
    MailOutline,
    PermIdentity, Report,
    Storefront,
    Timeline,
    TrendingUp, WorkOutline
} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {userLogout} from "../../redux/apiCalls";

export default function Sidebar () {

    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault()
        userLogout(dispatch);
    }

    return (
        <div className= "sidebar">
            <div className= "sidebarWrapper">
                <div className= "sidebarMenu">
                    <h3 className= "sidebarTitle">Dashboard</h3>
                    <ul className= "sidebarList">
                        <Link className= "link"
                              to= "/"
                        >
                            <li>
                                <LineStyle/>
                                Home
                            </li>
                        </Link>
                        <li className= "sidebarListItem">
                            <Timeline className= "sidebarIcon"/>
                            Analytics
                        </li>
                        <li className= "sidebarListItem">
                            <TrendingUp className= "sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Create New Product
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Create User
                        </li>
                    </ul>
                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Settings</h3>
                    <ul className="sidebarList">

                        <li  onClick={handleClick} className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            Log Out
                        </li>


                    </ul>
                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}