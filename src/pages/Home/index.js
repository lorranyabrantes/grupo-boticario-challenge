import React from 'react';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import Login from '../../components/User/Login';

import { Link } from 'react-router-dom';

import "./styles.css";

const Home = () => (
    <>
        <Header />
        <main className="main container">
            <div className="welcome">
                <h2 className="welcome__title">Olá!</h2>

                <Login />

                <p className="welcome__register">Ainda não tem acesso? <Link to={"/cadastre-se"}>Faça seu cadastro</Link></p>
            </div>
        </main>
        <Footer />
    </>
)

export default Home;