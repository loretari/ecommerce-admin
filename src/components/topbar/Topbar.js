import React from "react";
import { Link } from "react-router-dom";
import './topbar.css';
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import Auth from "../../utils";
import {useDispatch} from "react-redux";
import { userLogout } from "../../redux/apiCalls";

export default function Topbar() {

    // const dispatch = useDispatch();
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     userLogout(dispatch)
    //
    // };

    return (
        <div className= "topbar">
            <div className= "topbarWrapper">
                <div className= "topLeft">
                    <span className= "logo" >LorDesIgn Portal</span>
                </div>
                 <div className= "topRight">

                     {/*<button*/}
                     {/*    onClick= {handleClick}*/}
                     {/*    style={{ padding: 10, width: 100 }}*/}
                     {/*>Logout</button>*/}



                     {/*<Link*/}
                     {/*    to= "/"*/}
                     {/*onClick= {() => Auth.logout()}*/}
                     {/*>Logout</Link>*/}

                     <div className= "topbarIconContainer">
                        <NotificationsNone />
                         <span className= "topIconBadge">2</span>
                     </div>
                     <div className= "topbarIconContainer">
                         <Language />
                         <span className= "topIconBadge">2</span>
                     </div>
                     <div className= "topbarIconContainer">
                        <Settings />
                     </div>
                     <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt="" className="topAvatar" />
                     {/*<button onClick={handleClick}*/}
                     {/*        style= {{ padding: 10, width: 100 }}*/}
                     {/*>*/}
                     {/*    Logout*/}
                     {/*</button>*/}
                 </div>
            </div>
        </div>
    );
}
