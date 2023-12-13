import React, {useState} from "react";
import "./newUser.css";
import {useDispatch} from "react-redux";
// import { addClient } from "../../redux/apiCalls";

export default function NewUser () {

    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser(prev => {
            return { ...prev, [e.target.name] : e.target.value }
        });
    };

    const handleClick = (e) => {
        e.preventDefault()
        const newUser = { ...user }
        console.log(newUser)
        // addClient(newUser, dispatch)
    }


    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input name= "nickname" type="text" placeholder="john" onChange={handleChange}/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input name= "username" type="text" placeholder="John Smith" onChange={handleChange}/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input name= "email" type="email" placeholder="john@gmail.com" onChange={handleChange}/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input name= "password" type="password" placeholder="password" onChange={handleChange}/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Admin</label>
                    <select style={{height: "43px"}}  name="idAdmin" onChange={handleChange} id="active">
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <button onClick= {handleClick} className="newUserButton">Create</button>
            </form>
        </div>
    )
}