import React from 'react';

const Modal = ({onClose, currentPhoto}) => {
    const {name, description, index} = currentPhoto;


    return (
        <div className="modalBackgrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/images/gallery/${index}.jpg`)} alt="Sample of our shop" />
                <p> {description} </p>
                <button onClick={onClose} type="button">
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;