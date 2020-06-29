import React from 'react';
import "./styles.css";


class Select extends React.Component {
    render = () => {
        
        const { className, children, label, id, onChange } = this.props;
        
        const htmlClass = className ? className : "";
        
        return (
            <>
            {label && <label className="form-label" htmlFor={id}>{label}</label>}
            <div className={"form-select " + htmlClass}>
                <select defaultValue="default" onChange={onChange}>
                    {children}
                </select>
            </div>
            </>
        )
    }
}

export default Select;