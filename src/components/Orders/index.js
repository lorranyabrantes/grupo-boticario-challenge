import React from 'react';
import Button from '../UI/Button';
import Select from '../UI/Select';
import Modal from '../UI/Modal';

import RegisterForm from './Register';
import Card from './Card';

import api from "../../services/api";

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
            errorMessage: false
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
            this.setState({ errorMessage: true });

            console.log(error)
        }
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
        const { orders, ordersModal, errorMessage } = this.state;
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
                                <Card order={order} key={index} />
                            ))
                            : orders != null ?
                                <p className="orders__empty">Você ainda não tem nenhum pedido cadastrado :(</p>
                                : (null)
                        }

                        {errorMessage && <p className="orders__error">Houve um problema o carregar suas compras</p>}
                    </ul>
                </div>

                <Modal title="Cadastre suas compras :)"
                    isActive={ordersModal}
                    onClick={this.handleCloseOrdersModal} >
                    <RegisterForm />
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