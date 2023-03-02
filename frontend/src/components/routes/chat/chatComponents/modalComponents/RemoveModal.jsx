import React from 'react';
import {
  Modal, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import socket from '../../../../../socket.js';
import { setModalType } from '../../../../../slices/modalsSlice.js';

const RemoveModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const id = useSelector(({ modals }) => modals.channelId);

  const resetModalType = () => dispatch(setModalType(null));
  const handleRemoveChannel = () => {
    socket.emit('removeChannel', { id });
    resetModalType();
  };

  return (
    <Modal
      centered
      show
      onHide={resetModalType}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {t('modals.removeTitle')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t('modals.removeConfirm')}</p>
        <div className="d-flex justify-content-end">
          <Button
            type="button"
            variant="secondary"
            className="me-2"
            onClick={resetModalType}
          >
            {t('modals.cancelButton')}
          </Button>
          <Button
            type="button"
            variant="danger"
            onClick={handleRemoveChannel}
          >
            {t('modals.removeButton')}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveModal;
