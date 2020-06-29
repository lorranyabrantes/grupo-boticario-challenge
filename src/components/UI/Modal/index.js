import React from 'react';
import "./styles.css";


class Modal extends React.Component {
    render = () => {
        const { className, title, children, onClick, isActive } = this.props;

        const htmlClass = className ? className : "";
        const openClass = isActive ? "modal--open" : "";

        return (
        <div className={"modal__box " + openClass}>
            <div className={"modal " + htmlClass}>
                <h2 className="modal__title">{title}</h2>
                <button onClick={onClick} className="modal__close"></button>
                <div className="modal__content">
                    {children}
                </div>
            </div>
            <span onClick={onClick} className={"modal__overlay " + htmlClass}></span>
        </div>)
    }
}

export default Modal;