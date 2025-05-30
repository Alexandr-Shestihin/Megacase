import React from 'react';
import s from './WrapperContainer.module.css';
import { Outlet } from 'react-router-dom';
import {
   Header,
   LeftMenu,
   RightMemu
} from '../../Components';

const WrapperContainer = ({ setActive, active }) => {
   return (
      <div className={s.wrapper}>
         <Header setActive={setActive} active={active} />
         <div className={`${s.ContantContainer} mt12`}>
            <LeftMenu />
            <Outlet />
            <RightMemu />
         </div>
      </div>
   )
}
export default WrapperContainer;
