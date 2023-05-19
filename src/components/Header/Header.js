import React from 'react'
import "./header.css"
import logo from "../../assets/images/logo.png"
import search from "../../assets/images/Search.png"
import bag from "../../assets/images/bag.png"
export default function Header() {
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
                <input type="text" placeholder='Поиск'/>
                <button><img src={search} alt="" /></button>
            </form>
            <div className="header__card">
                <img src={bag} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
