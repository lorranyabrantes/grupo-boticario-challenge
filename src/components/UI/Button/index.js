import React from 'react';
import "./styles.css";


class Button extends React.Component {
    render = () => {
        const { className, children, onClick, type, id } = this.props;
        const htmlClass = className ? className : "";
        
        return (
            <button className={"button " + htmlClass} onClick={onClick} type={type} id={id}>
                {children}
            </button>
        )
    }
}

export default Button;