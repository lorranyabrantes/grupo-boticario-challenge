import React from 'react';
import Button from '../../UI/Button';
import Select from '../../UI/Select';

import "./styles.css";

const OrdersList = () => (
    <div className="orders">
        <div className="orders__header">
            <div className="orders__intro">
                <h3 className="orders__title">Suas compras</h3>
                <p className="orders__description">Aqui você pode acompanhar o status dos pedidos cadastrados:</p>
            </div>
            <div className="orders__actions">
                <Select className="form-select--small">
                    <option selected="selected" disabled="disabled">Filtrar:</option>
                    <option value="approved">Aprovado</option>
                    <option value="progress">Em validação</option>
                    <option value="refused">Reprovado</option>
                </Select>
                <Button className="button--small button--outline">Mudar visualização</Button>
                <Button className="button--small button--outline">+ Nova compra</Button>
            </div>
        </div>
        <ul className="orders__cards orders__cards--large">
            <li className="orders__item">
                <div className="orders__status orders__status--progress">
                    <i className="icon icon-progress"></i>
                    <h3>Em validação</h3>
                </div>
                <div className="orders__details">
                    <h4 className="orders__code">#1040730343111-01</h4>
                    <span className="orders__date">08/04/2020</span>
                    <p className="orders__cashback">Você pode receber um cashback nessa compra de <b>50%</b> no valor de <b>R$ 50,00</b>.</p>
                    <h4 className="orders__price">R$ 100,00</h4>
                </div>
            </li>
            <li className="orders__item">
                <div className="orders__status orders__status--refused">
                    <i className="icon icon-refused"></i>
                    <h3>Reprovado</h3>
                </div>
                <div className="orders__details">
                    <h4 className="orders__code">#1040730343111-01</h4>
                    <span className="orders__date">08/04/2020</span>
                    <p className="orders__cashback">Você pode receber um cashback nessa compra de <b>50%</b> no valor de <b>R$ 50,00</b>.</p>
                    <h4 className="orders__price">R$ 100,00</h4>
                </div>
            </li>
            <li className="orders__item">
                <div className="orders__status orders__status--approved">
                    <i className="icon icon-approved"></i>
                    <h3>Aprovado</h3>
                </div>
                <div className="orders__details">
                    <h4 className="orders__code">#1040730343111-01</h4>
                    <span className="orders__date">08/04/2020</span>
                    <p className="orders__cashback">Você pode receber um cashback nessa compra de <b>50%</b> no valor de <b>R$ 50,00</b>.</p>
                    <h4 className="orders__price">R$ 100,00</h4>
                </div>
            </li>
        </ul>
    </div>
)

export default OrdersList;