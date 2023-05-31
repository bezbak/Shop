import React from 'react'
import "./header.css"
import logo from "../../assets/images/logo.png"
import search2 from "../../assets/images/Search.png"
import bag from "../../assets/images/bag.png"
import { useNavigate } from 'react-router'
export default function Header({setSearch}) {
  const nav = useNavigate()
  return (
    <div className='header'>
      <div className="container">
        <div className="header__inner">
            <img src={logo} alt="" />
            <div className="header__links">
                <a href="" className="header__link">Рассрочка</a>
                <a href="/catalog" className="header__link">Каталог</a>
                <a href="" className="header__link">Аксессуары</a>
                <a href="" className="header__link">Контакты</a>
            </div>
            <form action="" className="haeder__search">
                <input onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder='Поиск'/>
                <button onClick={()=>nav('/catalog')}><img src={search2} alt="" /></button>
            </form>
            <div className="header__card">
                <img src={bag} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
