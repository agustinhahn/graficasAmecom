import React, { useState } from 'react';
import Modal from 'react-modal';

const ImageViewer = ({ imageUrl }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <img src={imageUrl} alt="Imagen" onClick={openModal} style={{ cursor: 'pointer' }} />
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <img src={imageUrl} alt="Imagen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </div>
    );
};

export default ImageViewer;
