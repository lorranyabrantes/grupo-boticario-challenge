import React from 'react';

import UserImage from "../../../assets/img/user-image.jpeg";

import "./styles.css";

const UserDetails = () => (
    <div className="user">
        <div className="user__image">
            <div className="user__box-image">
                <img src={UserImage} alt="" />
            </div>
            <button className="user__add-image">+</button>
        </div>
        <div className="user__data">
            <p className="user__name">Olá, Lorrany!</p>
            <p className="user__cashback">Seu valor de cashback acumulado até o momento é de: <span className="user__cashback--highlight">r$ 50,00</span></p>
        </div>
    </div>
)

export default UserDetails;