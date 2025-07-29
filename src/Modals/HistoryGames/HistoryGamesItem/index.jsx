
import React from 'react';
import s from './HistoryGamesItem.module.css';
import { formatDate } from '@/utils';

const linkActive = '/assets/img/plugs/pistol.png';

const HistoryGamesItem = ({ name, price, updatedAt, status, image }) => {
   return (
      <div className={`row ${s.container}`}>
         <div className={s.imgContainer}>
            <img src={image || linkActive} alt="image" />
         </div>
         <div className={s.name}>{name}</div>
         <div className={s.text}>{price}$</div>
         <div className={s.text}>{formatDate(updatedAt)}</div>
         <div className={s.status}>{status}</div>
      </div>
   )
}

export default HistoryGamesItem;
