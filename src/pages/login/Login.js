import React, { useState } from 'react'
import{ useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'


const Login = () => {

    //set username, password
    const [username,setUsername] =  useState('')
    const [password,setPassword] =  useState('')
    const dispatch = useDispatch()

    const handleClick =(e)=>{
        e.preventDefault()
        login(dispatch, {username, password})
    }


    return (
        <div
            style ={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                height:"100vh",
                flexDirection:"column"
            }}>
            <h1 style = {{fontSize: "40px", fontWeight: "bold"}}>Admin Log In</h1>
            <input
                type = "text"
                style = {{
                    padding:"10px",
                    marginBottom:"20px"}}
                    placeholder='username'
                    onChange= {e => setUsername(e.target.value)} />
            <input
                type= "password"
                placeholder='password'
                style = {{padding:"10px", marginBottom:"20px"}}
                onChange= {e => setPassword(e.target.value)}/>
            <button
                onClick ={handleClick}
                style ={{
                    // cursor: "pointer",
                    padding: "10px",
                    width: "100px",
                    // borderRadius: "20px"
                }}>
                Login
            </button>
            {/*<button style={{cursor:"pointer",padding:"10px",width:"100px",borderRadius:"20px"}} onClick= {handleLogout}>Logout</button>*/}

        </div>
    )
}

export default Login



