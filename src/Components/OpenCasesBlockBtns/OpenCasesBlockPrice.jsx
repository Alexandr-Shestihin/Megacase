"use client"
import React, { useEffect } from 'react';
import s from './OpenCasesBlockBtns.module.css';

import {
   Button,
} from '..';
import { useMenuSelection } from '@/hooks/useMenuSelection';

const OpenCasesBlockPrice = ({ set, data, max }) => {

   const { activeID, handler, clear } = useMenuSelection();
   const handlerClick = (e) => {
      handler(e);
      set(prev => ({ ...prev, 'price': e.target.id || prev.price }))
   }

   useEffect(() => {
      if (activeID !== data?.price) {
         clear();
      }
   }, [data])

   return (
      <div className={`${s.btnRow} mt12`} onClick={handlerClick}>
         <Button
            id={'100'}
            active={activeID === '100'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >100$</Button>
         <Button
            id={'500'}
            active={activeID === '500'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >500$</Button>
         <Button
            id={'1000'}
            active={activeID === '1000'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >1 000$</Button>
         <Button
            id={max.toString()}
            active={activeID === max.toString()}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >Max</Button>
      </div>
   )
}

export default OpenCasesBlockPrice;
