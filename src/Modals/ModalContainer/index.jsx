"use client"

import React from 'react';
import Conclusions from '@/Modals/Conclusions';
import { useModalContext } from "@/Total/ModalContext";
import SkinOutput from '@/Modals/SkinOutput';
import HistoryGames from '@/Modals/HistoryGames';
import SteamTadeURL from '@/Modals/SteamTadeURL';
import HonestyCheck from '@/Modals/HonestyCheck';
import Modal from '@/Modals/Modal';
import FAQ from '@/Modals/FAQ';
import UserAgreement from '@/Modals/UserAgreement';
import Сookie from '@/Modals/Сookie';
import СookieAgreement from '@/Modals/СookieAgreement';
import Partnership from '@/Modals/Partnership';
import Cashback from '@/Modals/Cashback';
import Statistics from '@/Modals/Statistics';

const ModalContainer = () => {
   const { activeModal, closeModal } = useModalContext(); // Используем useModalContext

   return (
      <>
         <Modal
            active={activeModal === 'historyConclusions'}
            setActive={closeModal}
         >
            <Conclusions />
         </Modal>

         <Modal
            active={activeModal === 'skinOutput'}
            setActive={closeModal}
         >
            <SkinOutput />
         </Modal>

         <Modal
            active={activeModal === 'historyGames'}
            setActive={closeModal}
         >
            <HistoryGames />
         </Modal>

         <Modal
            active={activeModal === 'steamTadeURL'}
            setActive={closeModal}
         >
            <SteamTadeURL />
         </Modal>

         <Modal
            active={activeModal === 'honestyCheck'}
            setActive={closeModal}
         >
            <HonestyCheck />
         </Modal>

         <Modal
            active={activeModal === 'FAQ'}
            setActive={closeModal}
         >
            <FAQ />
         </Modal>

         <Modal
            active={activeModal === 'userAgreement'}
            setActive={closeModal}
         >
            <UserAgreement />
         </Modal>

         <Modal
            active={activeModal === 'cookie'}
            setActive={closeModal}
         >
            <Сookie />
         </Modal>

         {/* Принять политику  cookie*/}
         <СookieAgreement />

         <Modal
            active={activeModal === 'partnership'}
            setActive={closeModal}
         >
            <Partnership />
         </Modal>
         
         <Modal
            active={activeModal === 'сashback'}
            setActive={closeModal}
         >
            <Cashback />
         </Modal>
 
         <Modal
            active={activeModal === 'statistics'}
            setActive={closeModal}
         >
            <Statistics />
         </Modal>

      </>
   );
};

export default ModalContainer;