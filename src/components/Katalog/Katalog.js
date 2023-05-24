import React, { useState } from 'react'
import "./katalog.scss"
export default function Katalog() {
  const [price1, setPrice1] = useState(0)
  const [price2, setPrice2] = useState(100000)
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
        </div>
      </div>
    </div>
  )
}
