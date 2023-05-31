import React, { useEffect, useState } from 'react'
import "./katalog.scss"
import { all_products } from '../../consts/consts'
export default function Katalog({search}) {
  const [price1, setPrice1] = useState(0)
  const [price2, setPrice2] = useState(100000)
  const [products, setProducts] = useState([])
  useEffect(()=>{
    setProducts(all_products.filter(el => el.name.toLowerCase().includes(search.toLowerCase())))
  }, [products])
  return (
    <div className='katalog'>
      <div className="container">
        <div className="katalog__inner">
          <form action="">
            <div className="form__top">
              <label htmlFor="">
                <input type="checkbox" /> Iphone
              </label>
              <label htmlFor="">
                <input type="checkbox" /> Iphone
              </label>
              <label htmlFor="">
                <input type="checkbox" /> Iphone
              </label>
            </div>
            <div className="form__bottom">
              <span>Цена</span>
              <div>
                <div className="krug"></div>
                <div className="between"></div>
                <div className="krug"></div>
              </div>
              <div>
                <span>{price1}</span>
                <span>{price2}</span>
              </div>
            </div>
          </form>
          <div className="katalog_products">
            {
              products.map((product)=>(
                <div className="">
                  <h1>{product.name}</h1>
                  <img src={product.img} alt="" />
                  <p>{product.price} </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
