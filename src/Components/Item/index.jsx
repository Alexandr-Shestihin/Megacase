
import React from 'react';
import s from './Item.module.css';

const Item = ({ name, value }) => {
   return (
      <div className={s.itemContainer}>
         <div className={s.name}>{name}</div>
         <div className={s.value}>{value}</div>
      </div>
   )
}

export default Item;
