import React from 'react';

import Modal from "../../UI/Modal";
import UserImage from "../Image";

import helper from '../../../app/helpers';
import api from "../../../services/api";

import "./styles.css";

import { connect } from 'react-redux';

class UserDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            modalMessage: "",
            errorModal: false
        };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = async () => {
        try {
            const response = await api.get("/user");
            this.setState({ user: response.data })
        } catch (error) {
            this.setState({
                modalMessage: "Houve um erro ao buscar seus dados",
                errorModal: true
            })
        }
    }

    handleCloseModal = () => {
        this.setState({ errorModal: false })
    }

    render = () => {
        const { user, errorModal, modalMessage } = this.state;
        const { cashback } = this.props;

        return (
            <>
                {user && <div className="user">
                    <UserImage src={user.image} />
                    <div className="user__data">
                        <p className="user__name">{user.name}</p>
                        <p className="user__cashback">Seu valor de cashback acumulado até o momento é de: 
                            {cashback && <span className="user__cashback--highlight">{helper.formatMoney(cashback)}</span>}
                        </p>
                    </div>
                </div>}

                <Modal title="Oops, algo deu errado."
                    isActive={errorModal}
                    onClick={this.handleCloseModal} >
                    <p>{modalMessage}</p>
                </Modal>
            </>
        )
    }
}


const mapStateToProps = store => ({
    cashback: store.cashbackState.cashback
});

export default connect(mapStateToProps)(UserDetails);