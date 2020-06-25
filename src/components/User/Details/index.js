import React from 'react';

import UserImage from "../../../assets/img/user-image.jpeg";

import "./styles.css";

const UserDetails = () => (
    <div className="user-details">
        <div className="user-details__image">
            <img src={UserImage} alt=""/>
        </div>
        <p className="user-details__name">Olá, Lorrany!</p>
        <p className="user-details__cash-back">Seu valor de cashback acumulado até o momento é de: <span className="user-details__cash-back--highlight">r$ 50,00</span></p>
    </div>
)

export default UserDetails;