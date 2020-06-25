import React from 'react';
import "./styles.css";

const Button = (props) => {
    const htmlClass = props.className ? props.className : "";

    return (<button className={"button " + htmlClass}>
        {props.children}
    </button>)
}

export default Button;