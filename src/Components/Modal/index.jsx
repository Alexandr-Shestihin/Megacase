import React from 'react';
import s from './modal.module.css';

import Image from 'next/image';

const close = '/assets/icons/close.svg';

const Modal = ({ active, setActive, children, className }) => {
   return (
      <div
         className={active ? `${s.modal} ${s.active}` : s.modal}
         onClick={() => setActive(false)}
      >
         <div
            className={active ? `${s.modal__content} ${className} ${s.active}` : s.modal__content}
            onClick={e => e.stopPropagation()}

         >
             <Image onClick={() => setActive(false)} src={close} alt="" width={14} height={14} className={s.img} />

            {children}

         </div>
      </div>
   )
}
export default Modal;