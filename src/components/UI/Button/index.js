import React from 'react';
import "./styles.css";

const Button = (props) => (
    <button className="button">
        {props.children}
    </button>
)

export default Button;