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
            <form className="form-orders">
                <Input label={"Código"} type="text" name="email" id="email" placeholder="#9999999999999-01" />

                <Input label={"Valor"} type="text" name="email" id="email" placeholder="R$ 50,00" />

                <Input label={"Data"} type="text" name="password" id="password" placeholder="08/03/2020" />

                <Button>Cadastrar</Button>
            </form>
        )
    }
}

export default RegisterForm;