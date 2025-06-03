"use client"
import React, { useEffect } from 'react';
import s from './OpenCasesBlockBtns.module.css';
import useMenuSelection from '@/utils';

import {
   Button,
} from '..';

const OpenCasesBlockPercent = ({ set, value }) => {

   const { activeID, handler, clear } = useMenuSelection();
   const handlerClick = (e) => {
      console.log(e.target.id)
      handler(e);
      set(prev => ({ ...prev, 'percent': e.target.id }))
   }

   useEffect(() => {
      console.log(value)
      if (activeID !== value) {
         clear()
      }
   }, [value])

   return (
      <div className={`${s.btnRow} mt8`} onClick={handlerClick}>
         <Button
            id={'10'}
            active={activeID === '10'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >10%</Button>
         <Button
            id={'30'}
            active={activeID === '30'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >30%</Button>
         <Button
            id={'50'}
            active={activeID === '50'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >50%</Button>
         <Button
            id={'100'}
            active={activeID === '100'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >100%</Button>
      </div>
   )
}

export default OpenCasesBlockPercent;
