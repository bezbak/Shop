import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function TestApi() {
    const [services, setServices] = useState({})
    
    const getApi = ()=>{
        axios('https://itek-dev.highcat.org/api/service/')
        .then((response)=>{
            setServices(response.data)
            console.log(services);
        })
    }
  return (
    <div>
      <button onClick={()=>{getApi()}}>Пшыфрпафлорацфпна</button>
      <div className="">
        {
            services.results.map((e)=>(
                <div className="">
                    <h1>{e.title}</h1>
                    <img src={e.main_image} alt="" />
                </div>
            ))
        }
      </div>
    </div>
  )
}
//! npm i axios