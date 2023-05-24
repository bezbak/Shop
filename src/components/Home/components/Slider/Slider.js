import React from 'react'
import "./slider.scss"
import { slider_1 } from '../../../../consts/consts'
import Slider from "react-slick";
export default function Slider2() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <div className='slider'>
      <div className="container">
        <div className="slider__inner">
            <h2 className="title">Лучшие продажи</h2>
            <div className="slider__top">
                {slider_1.map((e)=>(
                        <div className="slider__block">
                            <div className="block__top">
                                <img src={e.img} alt="" />
                            </div>
                            <div className="block__bottom">
                                <span>{e.name}</span>
                                <p>{e.price}</p>
                                <p>{e.som_price}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="slider__bottom">
                <Slider {...settings}>
                {
                    slider_1.map((e)=>(
                        <div className="slider__block" key={e.id}>
                            <div className="block__top">
                                <img src={e.img} alt="" />
                            </div>
                            <div className="block__bottom">
                                <span>{e.name}</span>
                                <p>{e.price}</p>
                                <p>{e.som_price}</p>
                            </div>
                        </div>
                    ))
                }
                </Slider>
                <button className='slider_button'>Открыть каталог</button>
            </div>
        </div>
      </div>
    </div>
  )
}
