import React from 'react';
import s from './login.module.css';
import { ModalProvider } from '@/Total/ModalContext';
import ModalContainer from '@/Modals/ModalContainer';

export const metadata = {
   title: 'Authentication',
};

export default function LoginLayout({ children }) {
   return (
      <div className={s.wrapper}>
         <ModalProvider>
            {children}
            <ModalContainer />
         </ModalProvider>
      </div>
   );
}