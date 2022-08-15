import React from 'react'
import {quotes} from '../assets/assets';
const FeedbackCard = ({content,name,title,img}) => 
 (
  <div className="flex flex-col px-10 py-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 p-[6px] rounded-[20px] feedback-card">
        <div className="w-[42px] h-[27px] object-contain">
          <img src= {quotes} alt= "quotes" className='object-contain w-[42px] h-[27px]'/>
        </div>
        <p className= "text-white font-poppins font-normal leading-[32px] my-10 text-[18px]">
        {content}
        </p>
        <div className="flex flex-row">
          <img src= {img} alt= {name} className= "w-[48px] h-[48px] rounded-full"/>
          <div className="flex flex-col ml-4">
            <h4 className= "text-white font-poppins font-semibold leading-[32px] mb-1 text-[20px]">
            {name}
            </h4>
            <p className= "text-dimWhite font-poppins font-normal leading-[24px] mb-1 text-[16px]">
            {title}
            </p>
        </div>
        </div>
  </div>
 );

export default FeedbackCard