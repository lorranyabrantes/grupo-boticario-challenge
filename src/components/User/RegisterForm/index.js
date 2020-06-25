import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';


//import "./styles.css";

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <form className="form-login">
                <Input label={"Nome completo"} type="text" name="email" id="email"/>

                <Input label={"CPF"} type="text" name="email" id="email" placeholder="999.999.999-99" />

                <Input label={"Email"} type="text" name="email" id="email" placeholder="email@email.com.br" />

                <Input label={"Senha"} type="text" name="password" id="password" placeholder="•••••••••" />

                <Button>Cadastrar</Button>
            </form>
        )
    }
}

export default RegisterForm;