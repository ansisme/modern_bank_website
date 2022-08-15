import React from 'react'
import styles, {layout} from '../style';
const Button = ({styles}) =>  {
   return (
    <button className= {` rounded-md py-4 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none ${styles}`}>
        Get Started
    </button>
  )
   }

export default Button