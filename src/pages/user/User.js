import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./user.css";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@mui/icons-material";
import {useSelector} from "react-redux";
import { userRows } from "../../dummyData";

export default function User () {

    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const user = userRows.filter((user) => user.id === parseInt(id));

    const userId = location.pathname.split('/')[2]
    const updatedUser = useSelector(state => state.client.clients.find(client => client._id === userId));

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">


                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src= {user[0].avatar}
                            // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user[0].username}</span>
                            <span className="userShowUserTitle">{user[0].title}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{user[0].nickname}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">{user[0].start}</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">{user[0].phone}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{user[0].email}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">{user[0].location}</span>
                        </div>
                    </div>
                </div>



                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder= {user[0].nickname}
                                    className="userUpdateInput"
                                />
                             </div>
                             <div className="userUpdateItem">
                                 <label>Full Name</label>
                                 <input
                                     type="text"
                                     // placeholder={updatedUser.username}
                                    placeholder={user[0].username}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder= {user[0].email}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder= {user[0].phone}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder= {user[0].location}
                                    className="userUpdateInput"
                                />



                                <label>Is Admin</label>
                                <select name="isAdmin" id="idStock">
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="userUpdateRight">




                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src= {user[0].avatar}
                                    // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                    // src= ""
                                    // alt= "COMING SOON"
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>



                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}