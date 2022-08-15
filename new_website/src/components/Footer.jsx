import React from 'react'
import styles, {layout} from '../style';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets/assets';
const Footer = () => 
(
  <section className={` ${styles.flexCenter} ${styles.paddingX} flex-col ${styles.paddingY}`}>
    <div className={`{styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
      <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain"/>
      <p className= {` ${styles.paragraph} mt-5 max-w-[310px]`}>
      njhjdchdhdcds dcus vvovdjvfvkvf vjfvfvj njhjdchdhdcds dcus vvovdjvfvkvf vjfvfvj njhjdchdhdcds dcus vvovdjvfvkvf vjfvfvj
      </p>
      </div>
    </div>


    <div className={`flex-[1.5] flex flex-row w-full flex-wrap justify-between mt-10 md:mt-0`}>
      {footerLinks.map((footerLink)=>{
      return(
        <div className = "flex flex-col my-4 ss:my-0 min-w-[150px]" 
          key={footerLink.key}>
            <h4 className={` font-poppins font-medium text-white text-[20px] leading-[27px]`}>
                {footerLink.title}
              </h4>
              <ul className =" mt-6 text-left list-none">
                {footerLink.links.map((link,index)=>(
                  <li key={link.name} 
                  className={`font-poppins font-normal text-dimWhite leading-[24px] cursor-pointer hover:text-secondary text-[16px]
                  ${index!==footerLink.links.length -1 ? "mb-4" : "mb-0"}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
        </div>
      )})}
    </div>

    <div className={`mt-10 w-full md:flex-row flex-col ${styles.paddingX} flex flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]`}>
      <p className={`${styles.paragraph} text-[18px] text-center text-white leading-[27px] mt-4`}>Copyright © 2021 HooBank. All Rights Reserved.</p>
      
      <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index)=>(
              
                <img 
                key={social.link} 
                src={social.icon} 
                alt={social.id}
                className={`w-[20px] h-[20px] object-contain cursor-pointer ${index!==socialMedia.length-1 ? "mr-6" : "mr-0"}`}
                />
              
          ))}
      </div>
    </div>
  </section>
  )


export default Footer