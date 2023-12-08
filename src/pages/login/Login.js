import React, { useState } from 'react'
import{ useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'

const Login = () => {
    const [username,setUsername] =  useState('')
    const [password,setPassword] =  useState('')
    const dispatch = useDispatch()

    const handleClick =(e)=>{
        e.preventDefault()
        login(dispatch,{username,password})
    }
    return (
        <div style ={{display:"flex", alignItems:"center", justifyContent:"center",height:"100vh", flexDirection:"column"}}>
            <input  type = "text" style = {{padding:"10px", marginBottom:"20px"}}  placeholder='username' onChange={e=>setUsername(e.target.value)} />
            <input  type= "password" placeholder='password' style = {{padding:"10px", marginBottom:"20px"}}  onChange={e=>setPassword(e.target.value)}/>
            <button style ={{cursor:"pointer",padding:"10px",width:"100px",borderRadius:"20px"}} onClick ={handleClick}>Login</button>
        </div>
    )
}

export default Login




// import React, { useState } from "react";
// import "./login.css";
// import {login} from "../../redux/apiCalls";
// import {useDispatch} from "react-redux";
//
//
// const Login = () => {
//
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//
//     const dispatch = useDispatch()
//
//     const handleLogin = (e) => {
//         setUsername(e.target.value);
//     }
//
//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//     }
//
//     const handleClick = (e) => {
//         e.preventDefault()
//         login(dispatch, {username, password})
//     }
//
//    return (
//        <div className= "login">
//                <input  type= "text" className= "loginText" placeholder= "username"
//                        onChange={ handleLogin }
//                />
//                <input  type= "password" className= "loginPassword" placeholder= "username"
//                        onChange={ handlePassword }
//                />
//                <button className= "loginButton"
//                    onClick={ handleClick }
//                >Login</button>
//        </div>
//
//
//
//        )
//
//
// }
//
// export default Login;