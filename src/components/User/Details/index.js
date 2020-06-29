import React from 'react';

import Modal from "../../UI/Modal";
import UserImage from "../Image";

import api from "../../../services/api";

import "./styles.css";

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
                modalMessage: error.data.message,
                errorModal: true
            })
        }
    }

    handleCloseModal = () => {
        this.setState({ errorModal: false })
    }

    render = () => {
        const { user, errorModal, modalMessage } = this.state;

        return (
            <>
                {user && <div className="user">
                    <UserImage src={user.image} />
                    <div className="user__data">
                        <p className="user__name">{user.name}</p>
                        <p className="user__cashback">Seu valor de cashback acumulado até o momento é de: <span className="user__cashback--highlight">r$ 50,00</span></p>
                    </div>
                </div>}

                <Modal
                    title="Oops, algo deu errado."
                    isActive={errorModal}
                    onClick={this.handleCloseModal}
                >
                    <p>{modalMessage}</p>
                </Modal>
            </>
        )
    }
}

export default UserDetails;