import React from 'react'
import styles from '../style';
import Button from './Button';
const CTA = () => 
   (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.marginX} ${styles.padding} rounded-[20px] sm:flex-row flex-col mt-16 bg-black-gradient-2 box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className= {`${styles.heading2}`}>
          Let's try our service now!
        </h2>
        <p className = {`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business anywhere in the planet.
        </p>
        </div>
        <div className={`${styles.flexCenter} ml-0 sm:ml-10 sm:mt-0 mt-10`}>
        <Button styles="mt-10"/>
        </div>
        
      
    </section>
  )


export default CTA