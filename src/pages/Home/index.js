import React from 'react';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import Login from '../../components/User/Login';

import { Link } from 'react-router-dom';

import "./styles.css";

const Home = () => (
    <>
        <Header />
        <main className="main">
            <div className="home">
                <div className="welcome">
                    <h2 className="welcome__title">
                        Seja bem-vindo(a) ao
                        portal dos revendedores!
                    </h2>

                    <Login />

                    <p className="welcome__register">Ainda não tem acesso? <Link className="welcome__link" to={"/cadastre-se"}>Faça seu cadastro</Link></p>
                </div>
            </div>
        </main>
        <Footer />
    </>
)

export default Home;