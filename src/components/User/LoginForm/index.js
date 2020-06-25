import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';


import "./styles.css";

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <form className="form-register">
                <Input label={"Email"} type="text" name="email" id="email" placeholder="email@email.com.br" />
                
                <Input label={"Senha"} type="text" name="password" id="password" placeholder="•••••••••" />

                <Button>Entrar</Button>
            </form>
        )
    }
}

export default LoginForm;