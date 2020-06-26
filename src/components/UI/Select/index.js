import React from 'react';
import "./styles.css";

const Select = (props) => {
    const htmlClass = props.className ? props.className : "";

    return (<>
        {props.label ? <label className="form-label" htmlFor={props.id}>{props.label}</label> : (null)}
        <div className={"form-select " + htmlClass}>
            <select defaultValue="default">
                {props.children}
            </select>
        </div>
    </>
    )
}

export default Select;