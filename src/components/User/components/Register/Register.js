import React, { useEffect, useState } from 'react'

export default function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_password] = useState("")
  const users = localStorage.getItem('users')
  const register = ()=>{
    const user = [
        {
          username:username,
          password:password,
          status:false
        },
        ...JSON.parse(users)
    ]
    if (password===confirm_password) {
      localStorage.setItem('users',JSON.stringify(user))
    }
  }
  const user123 = localStorage.getItem('users')
  useEffect(()=>{
    console.log(user123);
  }, [])
  return (
    <div> 
      <div className="container">
        <form action="">
          <input placeholder='username' onChange={(e)=>setUsername(e.target.value)} type="text" />
          <input placeholder='password' onChange={(e)=>setPassword(e.target.value)} type="password" />
          <input placeholder='confirm_password' onChange={(e)=>setConfirm_password(e.target.value)} type="password" />
          <button onClick={()=>register()}>Регистрация</button>
        </form>
      </div>
    </div>
  )
}
