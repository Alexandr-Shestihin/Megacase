"use client"

import React from 'react';
import s from './ModalContainer.module.css';
import useModal from '@/hooks/useModal';
import { Modal } from '..';
import Conclusions from '@/Modals/Conclusions';

const ModalContainer = () => {
   const { activeModal, modalProps, closeModal } = useModal();
   console.log(activeModal)

   const renderModal = () => {
      switch (activeModal) {
         case 'historyConclusions':
            console.log(1111)
            return <Modal
               active={true}
               setActive={closeModal}
            >
               <Conclusions />
            </Modal>

         default:
            return null;
      }
   };

   return (
      <>
         {renderModal()}
      </>
   );
};

export default ModalContainer;