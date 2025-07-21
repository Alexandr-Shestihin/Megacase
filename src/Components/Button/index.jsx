'use client'
import React from 'react';
import s from './Button.module.css';

const Button = ({ children, active=false, className, activeI, inactiveI, id, ...args }) => {
   return (
      <button id={id} className={`${s.button} btn-1 ${className} ${active ? 'active' : false}`} {...args}>
         {activeI && inactiveI && <img src={active ? activeI : inactiveI} alt="" />}
         {children}
      </button>
   )
}

export default Button;
