'use client'
import React from 'react';
import s from './MobileMenuItem.module.css';

const MobileMenuItem = ({ children, active = false, className, activeI, inactiveI, id, ...args }) => {

   return (
      <div id={id} className={`${s.button} btn-1 ${className} ${active ? `${s.active}` : false}`} {...args}>
         {activeI && inactiveI && <img src={active ? activeI : inactiveI} alt="" />}
         {children}
      </div>
   )
}

export default MobileMenuItem;
