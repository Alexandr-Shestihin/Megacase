
import React from 'react';
import s from './Sign.module.css';

const Sign = ({ name, value, className, ...args }) => {
   return (
      <div className={`${s.container} ${className}`} {...args}>
         <div className={s.name}>{name}</div>
         <div className={s.value}>{value.toLocaleString()}</div>
      </div>
   )
}

export default Sign;
