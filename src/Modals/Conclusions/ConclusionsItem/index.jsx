
import React from 'react';
import s from './ConclusionsItem.module.css';
import Image from 'next/image';

const linkActive = '/assets/img/plugs/pistol.png';

const ConclusionsItem = ({ name, price, updatedAt, status, image }) => {
   return (
      <div className='row'>
         <div className={s.imgContainer}>
            <Image src={image || linkActive} alt="image" width={38} height={38} className="img" />
         </div>
         <div className={s.text}>{name}</div>
         <div className={s.text}>{price}</div>
         <div className={s.text}>{updatedAt}</div>
         <div className={s.status}>{status}</div>
      </div>
   )
}

export default ConclusionsItem;
