import React from 'react'
import "./header.css"
import logo from "../../assets/images/logo.png"
import search2 from "../../assets/images/Search.png"
import bag from "../../assets/images/bag.png"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
export default function Header({setSearch}) {
  const nav = useNavigate()
  return (
    <div className='header'>
      <div className="container">
        <div className="header__inner">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="header__links">
                <Link to="/" className="header__link">Рассрочка</Link>
                <Link to="/catalog" className="header__link">Каталог</Link>
                <Link to="/user/login" className="header__link">Войти</Link>
                <Link to="/user/register" className="header__link">Зарегестрироваться</Link>
                <Link to="/test" className="header__link">Тест апи</Link>
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
