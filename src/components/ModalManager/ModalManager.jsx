import React, { useState } from 'react';
import UploadModal from './UploadModal';
import PublicationModal from './PublicationModal';

export default function ModalManager({ closeModal }) {
  const [activeModal, setActiveModal] = useState('upload');

  const openUploadModal = () => {
    setActiveModal('upload');
  };

  const openPublicationModal = () => {
    setActiveModal('publication');
  };

  // Modificar closeModal para cerrar ambos modales
  const handleCloseModal = () => {
    setActiveModal(null);
    closeModal();
  };

  return (
    <div>
      {activeModal === 'upload' && <UploadModal openPublicationModal={openPublicationModal} />}
      {activeModal === 'publication' && <PublicationModal closeModal={handleCloseModal} />}
    </div>
  );
}
