import React from 'react'
import {stats} from '../constants'
import styles from '../style'

const Stats = () => 
   (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat)=>(
        <div key ={stat.id} className={`flex-1 flex justify-start m-3 items-center flex-row ${styles.paddingX}`}>
          <h4 className="font-poppins font-semibold text-white xs:leading-[40px]  leading:[43px] xs:text-[40px] text-[35px]">{stat.value}</h4>
          <p className={` uppercase ml-3 text-gradient xs:text-[20px] text-[15px] xs:leading-[23px]  leading-[21px]`}>{stat.title}</p>
        </div>
      ))}
    </section>
  )


export default Stats