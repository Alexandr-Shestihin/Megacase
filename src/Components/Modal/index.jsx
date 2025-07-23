import React from 'react';
import s from './Modal.module.css';

import Image from 'next/image';

const close = '/assets/icons/close.svg';

const Modal = ({ active, setActive, children, className }) => {
   return (
      <div
         className={`${s.modal} ${active ? s.active : ''}`}
         onClick={() => setActive(false)}
      >
         <div
            className={`${s.modal__content} ${className} ${active ? s.active : ''}`}
            onClick={e => e.stopPropagation()}

         >
            <Image onClick={() => setActive(false)} src={close} alt="" width={14} height={14} className={s.img} />

            {children}

         </div>
      </div>
   )
}
export default Modal;