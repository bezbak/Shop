import React from 'react'
import Slider from "react-slick";
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
                        {
                            reviews_list.map((e)=>(
                                <h1>{e.name}</h1>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
