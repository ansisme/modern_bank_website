import React from 'react'
import styles , {layout} from '../style';
import {features} from '../constants';
import Button from './Button'; 

const FeatureCard = ({icon,title,content,index}) => 
 (
  <div className={`flex flex-row p-[6px] rounded-[20px] 
      ${index!==features.length-1 ? "mb-6" : "mb-0" } feature-card`}>
      <div className={`rounded-full ${styles.flexCenter} bg-dimBlue w-[64px] h-[64px] mr-6`}>
        <img src= {icon} alt= "icon" className= "w-[50%] h-[50%] object-contain"/>
      </div>
      <div className={`flex flex-1 flex-col ${styles.boxWidth}`}>
        <h4 className= "text-white font-poppins font-semibold leading-[23px] mb-1 text-[18px]">
        {title}
        </h4>
        <p className= "text-dimWhite font-poppins font-normal leading-[24px] mb-1 text-[16px]">
        {content}
        </p>
      </div>
  </div>
    
    
 )
const Business = () => {
  return (
  <section id="features" className={`${layout.section} ${styles.paddingX}`}>
    <div className={` flex flex-col justify-end w-full  ${styles.flexStart}`}>
      <h2 className = {`${styles.heading2}` }>
      You do the business,<br className="sm:block hidden"/>{" "}
      we'll handle the money.
      </h2>
      <p className={`font-poppins ${styles.paragraph} max-w-[470px] mt-5`}>
      With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
       </p>
       <Button styles = "mt-10" />
    </div>
       
    <div className= {` ${styles.paddingY} ${styles.paddingX} flex-col`}>
    {features.map((feature, index)=>(
      <FeatureCard key = {feature.id} {...feature} index= {index}/>
    ))}
       
    </div>
    
  </section>
  )
  }

export default Business;