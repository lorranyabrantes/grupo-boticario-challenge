import React from 'react';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import LoginForm from '../../components/User/LoginForm';

import { Link } from 'react-router-dom';

import "./styles.css";

const Home = () => (
    <>
        <Header />
        <main className="main">
            <div className="home">
                <div className="home__container">
                    <h2 className="home__title">
                        Seja bem-vindo(a) ao
                        portal dos revendedores!
                    </h2>

                    <LoginForm />

                    <p className="home__register">Ainda não tem acesso? <Link className="home__link" to={"/cadastre-se"}>Faça seu cadastro</Link></p>
                </div>
            </div>
        </main>
        <Footer />
    </>
)

export default Home;