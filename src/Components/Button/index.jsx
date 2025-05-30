
import React, { useState } from 'react';
import s from './Button.module.css';


const Button = ({ children, onClick, className, activeI, inactiveI, ...props }) => {

   const [active, setActive] = useState(false)

   const handle = () => {
      onClick();
      setActive(!active);
   }

   return (
      <div onClick={handle} className={`${s.button} btn-1 btn-text ${className} ${active ? 'active' : false}`} {...props}>
         <img src={active ? activeI : inactiveI} alt="" />
         {children}
      </div>
   )
}

export default Button;
