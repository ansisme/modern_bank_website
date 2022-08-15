import React from 'react'
import styles from '../style';
import {arrowUp} from '../assets/assets';
const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className = {`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%]`}>
        <div className = {`${styles.flexStart} flex-row`}>
          <p className = {`font-poppins font-medium text-[18px] leading-[23px]`}>
          <span className={`text-gradient items-center`}>Get</
          span>
          </p>
           <img src = {arrowUp} alt = "arrowUp" className= {" text-white w-[23px] h-[23px] object-contain"}/><br className={`sm:flex hidden`}/>
        </div>
        <div className = {`${styles.flexStart} flex-row`}>
        <p className = {`font-poppins font-medium text-[18px] leading-[23px] mr-2px`}>
           <span className={`text-gradient items-center`}>Started</
          span>
           </p>
        </div>
      </div>
    </div>
)

export default GetStarted;