import React from 'react';
import "./styles.css";

class Loading extends React.Component {
    render = () => {
        const { isActive } = this.props;

        return (<>
            {isActive && <div className="loading">
                <span className="loading__text">Carregando...</span>
                <span className="loading__icon"></span>
            </div>}
        </>)
    }
}

export default Loading;