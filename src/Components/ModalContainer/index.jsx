"use client"

import React from 'react';
import s from './ModalContainer.module.css';
import { Modal } from '..';
import Conclusions from '@/Modals/Conclusions';
import { useModalContext } from "@/Total/ModalContext";
import SkinOutput from '@/Modals/SkinOutput';
import HistoryGames from '@/Modals/HistoryGames';

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

      </>
   );
};

export default ModalContainer;