"use client"

import React, { Children, useState, useRef } from 'react';
import s from './SpoilerItem.module.css';

const plusClose = '/assets/icons/close.svg';

const SpoilerItem = ({ children, title }) => {

   const itemRef = useRef(null);

   const [isOpen, setIsOpen] = useState(null);

   const clickHandler = (id) => {
      setIsOpen(!isOpen)
   }

   return (
      <div className={s.container} onClick={clickHandler}>
         <div className='row'>{title}
            {children && <div className={s.btn}>
               <img className={isOpen ? s.rotate : ''} src={plusClose} alt="" />
            </div>}
         </div>
         <div
            style={
               isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
            }
            className={`${s.spoilerCollapse} `} ref={itemRef}>
            {children}
         </div>
      </div>
   )
}
export default SpoilerItem;