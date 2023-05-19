import React from 'react'
import './top.scss'
import img1 from '../../../../assets/images/iPhone 14.png'
import img2 from '../../../../assets/images/iPhone 14 Pro.png'

export default function Top() {
  return (
    <div className='top'>
      <div className="container">
        <div className="top__inner">
            <div className="top__title">
                <h1>ВЫБЕРИ СВОЙ iPHONE</h1>
            </div>
            <div className="top__iphones">
                <div className="top__iphone">
                    <img src={img1} alt="" />
                    <button>iPhone 14</button>
                </div>
                <div className="top__iphone">
                    <img src={img2} alt="" />
                    <button>iPhone 14 Pro</button>
                </div>
            </div>
            <p className='top__text'><a href="">Посмотреть все</a></p>
        </div>
      </div>
    </div>
  )
}
