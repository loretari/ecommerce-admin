import React, {useEffect, useState} from 'react';
import './widgetSm.css';
import {Visibility} from "@mui/icons-material";
// import { userRequest } from "../../requestMethods";
import { userRows } from "../../dummyData";


export default function WidgetSm () {

    // const [users, setUsers ] = useState([]);

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const res = await userRequest.ge('users/?new=true')
    //         setUsers(res.data)
    //     }
    // }, [])

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {userRows.map((user) => (
                    <li className="widgetSmListItem"
                    key={user.id}>
                        <img
                            src={user.avatar}
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                            <span className="widgetSmUserTitle">{user.email}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}