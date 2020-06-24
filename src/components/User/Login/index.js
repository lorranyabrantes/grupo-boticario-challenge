import React from 'react';
import "./styles.css";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="login">
                <form>
                    <label for="user">Usuário</label>
                    <input type="text" name="user" id="user"/>

                    <label for="password">Senha</label>
                    <input type="text" name="password" id="password"/>

                    <button type="submit">Entrar</button>
                </form>
            </div>
        )
    }
}

export default Login;