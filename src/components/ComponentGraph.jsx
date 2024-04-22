import React, { useState } from 'react';
import Modal from 'react-modal';

const ComponentGraph = ({titulo, link}) => {

    //

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    //
    
    const handleImageError = (event) =>{
        event.target.src="https://via.placeholder.com/300x200"
    }

    return (
        <div className='componentGraph'>
            <h2>{titulo}</h2>
            <img className='imgGraph' onClick={openModal} src={link} alt='imagen' onError={handleImageError}/>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modalImg">
                <img src={link} alt="Imagen" className='imgModal' />
                <button onClick={closeModal} className='botonCerrarModal'>Cerrar</button>
            </Modal>
        </div>
    )
}

export default ComponentGraph