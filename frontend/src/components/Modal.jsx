import React from 'react';
import { useSelector } from 'react-redux';
import AddModal from './AddModal.jsx';
import RemoveModal from './RemoveModal.jsx';
import RenameModal from './RenameModal.jsx';

const modalComponents = {
  adding: AddModal,
  removing: RemoveModal,
  renaming: RenameModal,
};

const Modal = () => {
  const modalType = useSelector(({ modals }) => modals.modalType);
  if (!modalType) {
    return null;
  }
  const ModalComponent = modalComponents[modalType];
  return <ModalComponent />;
};

export default Modal;
