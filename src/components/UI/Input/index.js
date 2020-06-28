import React from 'react';
import "./styles.css";


class Input extends React.Component {

    render = () => {
        const { label, id, placeholder, type, name, error,value, onChange } = this.props;
        return (<>
            {label && <label className="form-label" htmlFor={id}>{label}</label>}

            <input className="form-input"
                id={id}
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
                value={value}
            />

            {error && <p className="form-input__error">{error}</p>}
        </>)
    }
}

export default Input;