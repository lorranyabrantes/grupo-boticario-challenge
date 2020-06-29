import React from 'react';
import "./styles.css";


class Form extends React.Component {

    render = () => {
        const { children, className, onSubmit } = this.props;

        const htmlClass = className ? className : "";

        return (<form className={"form " + htmlClass} onSubmit={onSubmit}>
            {children}
        </form>)
    }
}

export default Form;