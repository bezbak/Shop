import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/Home/Home'
import Katalog from '../components/Katalog/Katalog'
import Top from '../components/Home/components/Top/Top'
export default function MainRoutes() {
    const PUBLIC_ROUTES = [
        {link:"", element:<Home/>, id:1},
        {link:"/catalog", element:<Katalog/>, id:2},
        {link:"/top", element:<Top/>, id:3},
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
