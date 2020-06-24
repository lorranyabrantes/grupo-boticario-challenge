import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';


import "./styles.css";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <form className="form-login">
                <Input label={"Usuário"} type="text" name="user" id="user" placeholder="Ex.: loabrantes" />

                <Input label={"Senha"} type="text" name="password" id="password" placeholder="•••••••••" />

                <Button>Entrar</Button>
            </form>
        )
    }
}

export default Login;