import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input'; 
import Form from '../../UI/Form';

import api from "../../../services/api";
import helper from '../../../app/helpers';

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            code: { value: "", error: null },
            price: { value: "", error: null },
            date: { value: "", error: null },
            formError: null,
            formSuccess: null
        };
    }

    handleRegister = (element) => {
        element.preventDefault();
        const { code, price, date } = this.state;

        let error = false;

        if (code.value === "") {
            code.error = "Preencha o código"
            this.setState({ code: code });
            error = true;
        }

        if (code.value !== "" && code.value.length < 17) {
            code.error = "Preencha com um código válido"
            this.setState({ code: code });
            error = true;
        }

        console.log(price.value, isNaN(price.value))
        if (price.value === "") {
            price.error = "Preencha o valor"
            this.setState({ price: price });
            error = true;
        }
        if (price.value !== "" && isNaN(parseInt(price.value))) {
            price.error = "Preencha com um valor válido"
            this.setState({ price: price });
            error = true;
        }

        if (date.value === "") {
            date.error = "Preencha a data"
            this.setState({ date: date });
            error = true;
        }

        if (date.value !== "" && code.value.length < 10) {
            date.error = "Preencha a data"
            this.setState({ date: date });
            error = true;
        }

        if (error) return;

        this.requestRegister();
    };

    requestRegister = async () => {
        const { code, price, date } = this.state;

        try {
            const response = await api.post("/orders", {
                code: code.value,
                price: price.value,
                date: date.value
            });

            if (response) {
                this.setState({
                    formSuccess: response.data.message
                });

                this.clearInputs();
            }
        } catch (error) {
            this.setState({
                formError: "Ops, algo deu errado no seu cadastro."
            });
        }
    }

    clearInputs = () => {
        this.setState({
            code: { value: "", error: null },
            price: { value: "", error: null },
            date: { value: "", error: null },
            successModal: true
        });
    }

    render() {
        return (
            <>
                <Form className="form-orders" onSubmit={this.handleRegister}>
                    <Input
                        label={"Código"}
                        type="text"
                        name="code"
                        id="code"
                        placeholder={"#9999999999999-01"}
                        error={this.state.code.error}
                        value={this.state.code.value}
                        onChange={element => this.setState({ code: { value: helper.orderCodeMask(element.target.value), error: "" } })}
                    />

                    <Input
                        label={"Valor"}
                        type="text"
                        name="price"
                        id="price"
                        placeholder={"50,00"}
                        error={this.state.price.error}
                        value={this.state.price.value}
                        onChange={element => this.setState({ price: { value: helper.numberMask(element.target.value), error: "" } })}
                    />

                    <Input
                        label={"Data"}
                        type="text"
                        name="date"
                        id="date"
                        placeholder="25/06/2020"
                        error={this.state.date.error}
                        value={this.state.date.value}
                        onChange={element => this.setState({ date: { value: helper.dateMask(element.target.value), error: "" } })}
                    />

                    {this.state.formError && <p className="form-error">{this.state.formError}</p>}

                    {this.state.formSuccess && <p className="form-success">{this.state.formSuccess}</p>}

                    <Button type={"submit"}>Cadastrar</Button>
                </Form>
            </>
        )
    }
}

export default RegisterForm;