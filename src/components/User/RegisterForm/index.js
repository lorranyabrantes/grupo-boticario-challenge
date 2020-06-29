import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Modal from '../../UI/Modal';
import Form from '../../UI/Form';

import api from "../../../services/api";
import { withRouter } from "react-router-dom";

import helper from '../../../app/helpers';

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: { value: "", error: null },
            cpf: { value: "", error: null },
            email: { value: "", error: null },
            password: { value: "", error: null },
            formError: null,
            successModal: false
        };
    }

    handleRegister = (element) => {
        element.preventDefault();
        const { name, cpf, email, password } = this.state;

        let error = false;

        if (name.value === "") {
            name.error = "Preencha o nome"
            this.setState({ name: name });
            error = true;
        }

        if (cpf.value === "") {
            cpf.error = "Preencha o CPF"
            this.setState({ cpf: cpf });
            error = true;
        }

        if (cpf.value !== "" && cpf.value.length < 14) {
            cpf.error = "Preencha com um CPF válido"
            this.setState({ cpf: cpf });
            error = true;
        }

        if (email.value === "") {
            email.error = "Preencha o e-mail"
            this.setState({ email: email });
            error = true;
        }

        if (email.value !== "" && !helper.isEmail(email.value)) {
            email.error = "Preencha com um e-mail válido"
            this.setState({ email: email });
            error = true;
        }

        if (password.value === "") {
            password.error = "Preencha a senha"
            this.setState({ password: password });
            error = true;
        }

        if (error) return;

        this.requestRegister();
    };

    requestRegister = async () => {
        const { name, cpf, email, password } = this.state;

        try {
            const response = await api.post("/user",
                {
                    name: name.value,
                    cpf: cpf.value,
                    email: email.value,
                    password: password.value
                }
            );

            if (response) {
                this.setState({
                    name: { value: "", error: null },
                    cpf: { value: "", error: null },
                    email: { value: "", error: null },
                    password: { value: "", error: null }, successModal: true
                });
            }
        } catch (error) {
            this.setState({
                formError: "Ops, algo deu errado no seu cadastro."
            });
        }
    }

    handleCloseModal = () => {
        console.log("oi")
        this.setState({ successModal: false })
    }

    render() {
        return (
            <>
            <Form className="form-register" onSubmit={this.handleRegister}>
                <Input
                    label={"Nome completo"}
                    type="text"
                    name="name"
                    id="name"
                    error={this.state.name.error}
                    value={this.state.name.value}
                    onChange={element => this.setState({ name: { value: element.target.value, error: "" } })}
                />

                <Input
                    label={"CPF"}
                    type="text"
                    name="cpf"
                    id="cpf"
                    placeholder="999.999.999-99"
                    error={this.state.cpf.error}
                    value={this.state.cpf.value}
                    onChange={element => this.setState({ cpf: { value: helper.cpfMask(element.target.value), error: "" } })}
                />

                <Input
                    label={"Email"}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email@email.com.br"
                    error={this.state.email.error}
                    value={this.state.email.value}
                    onChange={element => this.setState({ email: { value: element.target.value, error: "" } })}
                />

                <Input
                    label={"Senha"}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="•••••••••"
                    error={this.state.password.error}
                    value={this.state.password.value}
                    onChange={element => this.setState({ password: { value: element.target.value, error: "" } })}
                />

                {this.state.formError && <p className="form-error">{this.state.formError}</p>}

                <Button type={"submit"}>Cadastrar</Button>
            </Form>
            <Modal
                title="Cadastro realizado :)"
                isActive={this.state.successModal}
                onClick={this.handleCloseModal}
            >
                <Button type={"button"} onClick={() => this.props.history.push("/")}>Fazer login</Button>
            </Modal>
            </>
        )
    }
}

export default withRouter(RegisterForm);