import React from 'react';
import "./styles.css";

const Modal = (props) => {
    const htmlClass = props.className ? props.className : "";

    return (
        <>
            <div className={"modal " + htmlClass}>
                <h2 className="modal__title">{props.title}</h2>
                <div className="modal__close"></div>
                <div className="modal__content">
                    {props.children}
                </div>
            </div>
            <span className={"modal__overlay " + htmlClass}></span>
        </>
    )
}

export default Modal;