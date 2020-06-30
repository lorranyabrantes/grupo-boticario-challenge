import React from 'react';

import helper from '../../../app/helpers';

import "./styles.css";


class Card extends React.Component {
    render = () => {
        const { order } = this.props;

        return (
            <li className={`orders__item ${!order.isActive ? "orders__item--hidden" : ""}`}>
                <div className={`orders__status orders__status--${order.status}`}>
                    <i className={`icon icon-${order.status}`}></i>
                    <h3>{order.status === "approved" ? "Aprovado" :
                        order.status === "refused" ? "Reprovado" :
                            order.status === "progress" ? "Em validação" : (null)}
                    </h3>
                </div>

                <div className="orders__details">
                    <h4 className="orders__code">{order.id}</h4>
                    <span className="orders__date">{order.date}</span>
                    <p className="orders__cashback">Você pode receber um cashback nessa compra de <b>{order.cashback_percentage}%</b> no valor de <b>{helper.formatMoney(order.cashback_value)}</b>.</p>
                    <h4 className="orders__price">{helper.formatMoney(order.value)}</h4>
                </div>
            </li>
        )
    }
}

export default Card;