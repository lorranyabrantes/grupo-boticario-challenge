import React from 'react';

import Loading from '../../UI/Loading';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Form from '../../UI/Form';

import api from "../../../services/api";
import { login } from "../../../services/auth";
import { withRouter } from "react-router-dom";

import helper from '../../../app/helpers';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: {
                value: "",
                error: null
            },
            password: {
                value: "",
                error: null
            },
            formError: null,
            showLoading: false
        };
    }

    handleLogin = (element) => {
        element.preventDefault();

        const { email, password } = this.state;
        let error = false;

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

        this.requestLogin();
    };

    requestLogin = async () => {
        this.setState({ showLoading: true });

        const { email, password } = this.state;
        try {
            const response = await api.post("/login",
                {
                    email: email.value,
                    password: password.value
                }
            );

            login(response.data.token);
            this.setState({ showLoading: false });

            this.props.history.push("/account");
        } catch (error) {
            this.setState({
                formError: "Email ou senha incorretos :(",
                showLoading: false
            });
        }
    }

    render() {
        return (
            <>
                <Form className="form-login" onSubmit={this.handleLogin}>
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

                    <Button type={"submit"}>Entrar</Button>
                </Form>

                <Loading isActive={this.state.showLoading} />
            </>
        )
    }
}

export default withRouter(LoginForm);