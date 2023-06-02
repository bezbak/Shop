import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/Home/Home'
import Katalog from '../components/Katalog/Katalog'
import User from '../components/User/User'
import Register from '../components/User/components/Register/Register'
import Login from '../components/User/components/Login/Login'
import TestApi from '../components/TestApi/TestApi'
export default function MainRoutes({search}) {
    const PUBLIC_ROUTES = [
        {link:"", element:<Home/>, id:1},
        {link:"/catalog", element:<Katalog search={search}/>, id:2},
        {link:"/user", element:<User/>, id:3},
        {link:"/user/register", element:<Register/>, id:4},
        {link:"/user/login", element:<Login/>, id:5},
        {link:"/test", element:<TestApi/>, id:5},
    ]
  return (
    <>
      <Routes>
        {
            PUBLIC_ROUTES.map((item)=>(
                <Route path={item.link} element={item.element} key={item.id}></Route>
            ))
        }
      </Routes>
    </>
  )
}
