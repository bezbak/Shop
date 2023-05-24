import React from 'react'
import Slider from "react-slick";
import "./reviews.scss"
import { reviews_list } from '../../../../consts/consts';
export default function Reviews() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
        };
    return (
        <div className='reviews'>
            <div className="container">
                <div className="reviews__inner">
                    <h2 className='reviews__title'>Отзывы</h2>
                    <div className="reviews__slider">
                        <Slider {...settings}>
                            {
                                reviews_list.map((e)=>(
                                    <div key={e.id} className="reviews__block">
                                        <img src={e.image} alt="" />
                                        <h2>{e.name}</h2>
                                        <small>{e.age}</small>
                                        <p>{e.text}</p>
                                        <a href="">Читать еще</a>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
