import React from 'react';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import RegisterForm from '../../components/User/RegisterForm';

import { Link } from 'react-router-dom';

import "./styles.css";

const Register = () => (
    <>
        <Header />
        <main className="main">
            <div className="register">
                <div className="register__container">
                    <h2 className="register__title">Faça seu cadastro aqui! :)</h2>

                    <RegisterForm />

                    <p className="register__login">Já tem acesso? <Link className="register__link" to={"/"}>Faça o login</Link></p>
                </div>
            </div>
        </main>
        <Footer />
    </>
)

export default Register;