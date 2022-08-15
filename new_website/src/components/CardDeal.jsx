import React from 'react'
import styles,{layout} from '../style';
import Button from './Button';
import {card} from '../assets/assets';
const CardDeal = () => {
  return (
    <section id="cardeal" className= {`${layout.section} ${styles.paddingX}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className= {`${styles.heading2} `}>
          Find a better card deal<br className="sm:block hidden"/>
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
            fnjfdv v89y vdhuvr uvrdvur vhufv fvdh rgh dgdf d hjv v89y vdhuvr uvrdvur vhufv fvdh rgh 8ydfgdgdf d d fnjfdhjfvfdv v89y vdhuvr uvrdvur vhufv fvdh rgh 8ydfgdgdf d d
        </p>
        <div className="mt-10">
          <Button />
        </div>
        
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src= {card} alt="card" className=" w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal