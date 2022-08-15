import React from 'react'
import styles, {layout} from '../style';
import {clients} from '../constants';
import { card } from '../assets/assets';

const Clients = () => 
<section className={`{styles.flxCenter}`}>
  <div className={`${styles.flexCenter} flex flex-wrap w-full`}>
  {clients.map((client)=>(
      <div id= {clients.id} {...client} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
        <img src= {client.logo} alt={client} className="object-contain sm:w-[192px] w-[100px]"/>
      </div>

       
  ))}

  </div>
</section>
export default Clients