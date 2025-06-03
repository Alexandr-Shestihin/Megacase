'use client'
import React from 'react';
import s from './Button.module.css';

const Button = ({ children, active=false, className, activeI, inactiveI, id, ...args }) => {
   return (
      <div id={id} className={`${s.button} btn-1 btn-text ${className} ${active ? 'active' : false}`} {...args}>
         {activeI && inactiveI && <img src={active ? activeI : inactiveI} alt="" />}
         {children}
      </div>
   )
}

export default Button;
