import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <form className="form-orders">
                <Input label={"Código"} type="text" name="code" id="code" placeholder="#9999999999999-01" />

                <Input label={"Valor"} type="text" name="value" id="value" placeholder="R$ 50,00" />

                <Input label={"Data"} type="text" name="date" id="date" placeholder="08/03/2020" />

                <Button>Cadastrar</Button>
            </form>
        )
    }
}

export default RegisterForm;