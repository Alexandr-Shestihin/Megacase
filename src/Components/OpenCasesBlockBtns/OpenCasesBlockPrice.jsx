
import React from 'react';
import s from './OpenCasesBlockBtns.module.css';

import {
   Button,
} from '..';

const OpenCasesBlockPrice = (props) => {
   return (
      <div className={`${s.btnRow} mt8`}>
         <Button
            className={`${s.btn}`}
            onClick={() => console.log('100$')}
            activeI={null}
            inactiveI={null}
         >100$</Button>
         <Button
            className={`${s.btn}`}
            onClick={() => console.log('500')}
            activeI={null}
            inactiveI={null}
         >500$</Button>
         <Button
            className={`${s.btn}`}
            onClick={() => console.log('1000')}
            activeI={null}
            inactiveI={null}
         >1 000$</Button>
         <Button
            className={`${s.btn}`}
            onClick={() => console.log('5000')}
            activeI={null}
            inactiveI={null}
         >5 000$</Button>
      </div>
   )
}

export default OpenCasesBlockPrice;
