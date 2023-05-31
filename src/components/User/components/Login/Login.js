import React, { useEffect, useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const users = JSON.parse(localStorage.getItem('users'))
    const login = ()=>{
        users.map((e)=>{
            if (e.username === username && e.password===password) {
                return alert("ты зарегон");
                
            }else{
                return alert("не правильный пароль")
            }
        })
    }
    return (
        <div> 
            <div className="container">
                <form action="">
                <input placeholder='username' onChange={(e)=>setUsername(e.target.value)} type="text" />
                <input placeholder='password' onChange={(e)=>setPassword(e.target.value)} type="password" />
                <button type='button' onClick={()=>login()}>Login</button>
                </form>
            </div>
        </div>
    )
}
