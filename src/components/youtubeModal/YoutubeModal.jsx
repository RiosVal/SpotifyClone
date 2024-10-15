import React from "react";
import Modal from 'react-modal';
import './YoutubeModal.scss';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '80%',
    },
  };

Modal.setAppElement('#root');

export function YoutubeModal(props) {
    const { modalIsOpen, onRequestClose, closeModal, videoURL } = props;

    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Video Modal"
        >
            <button onClick={() => closeModal}>Cerrar</button>
            <div>
                <iframe
                    width="90%"
                    height="90%"
                    src={videoURL}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                ></iframe>
            </div>
        </Modal>
    );
}