import React from 'react';
import "./styles.css";

const Input = (props) => (
    <> 
        {props.label ? <label className="form-label" htmlFor={props.id}>{props.label}</label> : (null)}
        <input className="form-input" placeholder={props.placeholder} type={props.type} name={props.name} id={props.id}/>
    </>
)

export default Input;