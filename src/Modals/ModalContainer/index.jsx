"use client"

import React from 'react';
import Conclusions from '@/Modals/Conclusions';
import { useModalContext } from "@/Total/ModalContext";
import SkinOutput from '@/Modals/SkinOutput';
import HistoryGames from '@/Modals/HistoryGames';
import SteamTadeURL from '@/Modals/SteamTadeURL';
import HonestyCheck from '@/Modals/HonestyCheck';
import Modal from '../Modal';
import FAQ from '../FAQ';

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

      </>
   );
};

export default ModalContainer;