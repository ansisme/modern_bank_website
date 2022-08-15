import React from 'react'
import styles, {layout} from '../style';
import {feedback} from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => 
   (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="blue__gradient z-[0] w-[60%] h-[60%] -right-[50%] rounded-full"/>
      <div className = {`flex flex-col justify-between w-full items-center md:flex-row sm:mb-16 z-[1] mb-6  ${styles.paddingX}`}>
        <h2 className = {`${styles.heading2}`}>
          What people are<br className="sm:block hidden "/>saying about us?
        </h2>
        <div className= "w-full md:mt-0 mt-6">
          <p className = {`${styles.paragraph} text-left max-w-[470px]`}>
            Everything you need to accept card payments and grows your business anywhere on the planet.
          </p>
        </div>
      </div>
        
      <div className = {`flex items-center flex-wrap relative z-[1] w-full sm:justify-start justify-center feedback-container ${styles.paddingX}`}>
        {feedback.map((card)=>{
          return (
          <FeedbackCard key={card.id} {...card}/>
        )})}
      </div>
    </section>
  )


export default Testimonials