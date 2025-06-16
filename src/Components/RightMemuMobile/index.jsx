"use client";

import React from 'react';
import s from './RightMemuMobile.module.css';

const RightMemuMobile = ({ active, setActive, children }) => {
   return (
      <div
         className={active ? `${s.modal} ${s.active}` : s.modal}
         onClick={() => setActive(false)}
      >
         <div
            className={active ? `${s.modal__content} ${s.active}` : s.modal__content}
            onClick={e => e.stopPropagation()}
         >

            {children}

         </div>
      </div>
   )
}

export default RightMemuMobile;