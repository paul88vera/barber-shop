import React from 'react';

const Modal = ({onClose, currentPhoto}) => {
    const {name, description, index} = currentPhoto;


    return (
        <div className="modalBackgrop bg-black bg-opacity-25">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/images/gallery/${index}.jpg`).default} className="img-fluid" alt="Sample of our shop" />
                <p className="text"> {description} </p>
                <button className="btn-close" aria-label="Close" onClick={onClose} type="button">
                </button>
            </div>
        </div>
    );
}

export default Modal;