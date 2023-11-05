import React from 'react'
import Flyer from '../../assets/Flyer_4.jpg'
import './flipEffect.css'
import {Icon} from '@iconify/react'



export default function Card({flipHandle}) {
  return (
    <div className='card relative' onClick={flipHandle}>
        <div className="card-back-img card-back absolute w-full h-full">
         <div>
            <h2 className='title text-center my-8 text-2xl font-bold'>BASS PORT</h2>
            <p className='text-center m-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae laudantium enim, ipsum impedit iste aperiam perferendis! Aliquam, voluptatum excepturi, repudiandae repellendmus.</p>
            <p className='price text-end text-md mx-8 font-medium -tracking-tighter'>12€</p>
            <div className='flex items-top justify-center my-8'>
              <Icon className='text-xl' icon="ion:location-sharp" color='red'/>
              <p className='font-bold text-lg -tracking-tighter'>Gran vía 1123</p>
            </div>
            <div className='flex justify-around items-center text-xl my-8'>
              <Icon icon="ic:baseline-facebook" />
              <Icon icon="mingcute:twitter-fill" />
              <Icon icon="mdi:instagram" />
              <Icon icon="ic:baseline-whatsapp" />
            </div>
         </div>
        </div>
        <div className="card-front absolute w-full h-full">
          <img className="w-full h-full" src={Flyer} alt="" />
        </div>
    </div>
  )
}

