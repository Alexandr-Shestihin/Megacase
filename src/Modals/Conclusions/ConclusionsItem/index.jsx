
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
      </div>
   )
}

export default ConclusionsItem;
