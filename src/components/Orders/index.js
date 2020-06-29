import React from 'react';
import Button from '../UI/Button';
import Select from '../UI/Select';
import Modal from '../UI/Modal';

import RegisterForm from './Register';

import api from "../../services/api";
import helper from '../../app/helpers';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCashback } from '../../app/actions';

import "./styles.css";

class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            orders: null,
            modalMessage: "",
            largeView: false,
            ordersModal: false,
            errorModal: false
        };
    }

    componentDidMount() {
        this.getOrders();
    }

    getOrders = async () => {
        try {
            const response = await api.get("/orders");

            const orders = response.data.orders.map(item => { return { ...item, isActive: true } });

            this.props.setCashback(response.data.cashback);
            this.setState({ orders: orders });
        } catch (error) {
            this.setState({ modalMessage: error.data.message, errorModal: true })
        }
    }

    handleErrorCloseModal = () => {
        this.setState({ errorModal: false })
    }

    handleCloseOrdersModal = () => {
        this.setState({ ordersModal: false })
    }

    handleOpenOrdersModal = () => {
        this.setState({ ordersModal: true })
    }

    handleChangeView = () => {
        this.setState({ largeView: !this.state.largeView })
    }

    handleFilterOrders = (element) => {
        let orders = this.state.orders;

        orders.forEach(item => {
            const isDefault = element.target.value === "default";
            const isCurrentFilter = item.status === element.target.value;

            item.isActive = isDefault || isCurrentFilter;
        });

        this.setState({ orders: orders })
    }

    render = () => {
        const { errorModal, modalMessage, orders, ordersModal } = this.state;
        return (
            <>
                <div className="orders">
                    <div className="orders__header">
                        <div className="orders__intro">
                            <h3 className="orders__title">Suas compras</h3>
                            <p className="orders__description">Aqui você pode acompanhar o status dos pedidos cadastrados:</p>
                        </div>
                        <div className="orders__actions">
                            <Select className="form-select--small" onChange={this.handleFilterOrders}>
                                <option value="default">Filtrar:</option>
                                <option value="approved">Aprovado</option>
                                <option value="progress">Em validação</option>
                                <option value="refused">Reprovado</option>
                            </Select>
                            <Button
                                className="button--small button--outline"
                                onClick={this.handleChangeView} >Mudar visualização</Button>
                            <Button
                                className="button--small button--outline"
                                onClick={this.handleOpenOrdersModal} >+ Nova compra</Button>
                        </div>
                    </div>
                    <ul className={`orders__cards ${this.state.largeView ? "orders__cards--large" : ""}`}>
                        {orders && orders.length > 0 ?
                            orders.map((order, index) => (
                                <li className={`orders__item ${!order.isActive ? "orders__item--hidden" : ""}`} key={index}>
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
                            ))
                            : orders != null ?
                                <p className="order__empty">Você ainda não tem nenhum pedido cadastrado :(</p>
                                : (null)}
                    </ul>
                </div>

                <Modal
                    title="Cadastre suas compras :)"
                    isActive={ordersModal}
                    onClick={this.handleCloseOrdersModal}
                >
                    <RegisterForm />
                </Modal>

                <Modal
                    title="Oops, algo deu errado."
                    isActive={errorModal}
                    onClick={this.handleErrorCloseModal}
                >
                    <p>{modalMessage}</p>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = store => ({
    cashback: store.cashbackState.cashback
});

const mapDispatchToProps = dispatch => bindActionCreators({ setCashback }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);