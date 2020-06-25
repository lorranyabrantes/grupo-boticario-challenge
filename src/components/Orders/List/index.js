import React from 'react';
import "./styles.css";

const OrdersList = () => (
    <div className="orders">
        <h3 className="orders__title">Suas compras:</h3>
        <ul className="orders-list">
            <li className="orders-list__item">
                <div>
                    <span>Código:</span>
                    <h4>#1040730343111-01</h4>
                </div>
                <div>
                    <span>Valor:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Data:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Seu retorno será de:</span>
                    <h4>50%</h4>
                </div>
                <div>
                    <span>No valor de:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Status do cadastro:</span>
                    <h4>Em validação</h4>
                </div>
            </li>
            <li className="orders-list__item">
                <div>
                    <span>Código:</span>
                    <h4>#1040730343111-01</h4>
                </div>
                <div>
                    <span>Valor:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Data:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Seu retorno será de:</span>
                    <h4>50%</h4>
                </div>
                <div>
                    <span>No valor de:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Status do cadastro:</span>
                    <h4>Reprovado</h4>
                </div>
            </li>
            <li className="orders-list__item">
                <div>
                    <span>Código:</span>
                    <h4>#1040730343111-01</h4>
                </div>
                <div>
                    <span>Valor:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Data:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Seu retorno será de:</span>
                    <h4>50%</h4>
                </div>
                <div>
                    <span>No valor de:</span>
                    <h4>R$ 50,00</h4>
                </div>
                <div>
                    <span>Status do cadastro:</span>
                    <h4>Aprovado</h4>
                </div>
            </li>
        </ul>
    </div>
)

export default OrdersList;