import React from 'react'
import styles, {layout} from '../style';
import {apple,bill,google} from '../assets/assets';
const Billing = () => {
   return (
    <section id = "product" className = {` ${layout.sectionReverse} ${styles.paddingX}`}>
      <div className = {`${layout.sectionImgReverse} ${styles.paddingX}`}>
          <img src={bill} alt ="billing" className= {` w-[100%] h-[100%] z-[5] relative `}/>
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] white__gradient rounded-full"/>
          <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] pink__gradient rounded-full"/>
      </div>


      <div className={` ${layout.sectionInfo}`}>
        <h1 className= {`${styles.heading2}`}>
        East control your <br className="sm:block hidden"/>billing & invoincing.
        </h1>
        <p className = {`${styles.paragraph}  max-w-[470px] mt-5`}>
        sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text 
        </p>
        <div className= {`flex flex-row flex-wrap sm:mt-10 mt-6`}>
          <img src={apple} alt="apple" className={`w-[120px] h-[40px] contain-contain cursor-pointer mr-5`}/>
          <img src={google} alt="google" className={`w-[120px] h-[40px] contain-contain cursor-pointer`}/>
        </div>
        
      </div>
    </section>
  )
   }

export default Billing