import React from 'react';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import Button from '../../components/UI/Button';

import { withRouter } from "react-router-dom";

import "./styles.css";

const NotFound = (props) => (
    <>
        <Header />
        <main className="main">
            <div className="not-found container">
                <h1 className="not-found__text">
                    Página não encontrada :(
                </h1>

                <Button type={"button"} onClick={() => props.history.push("/account")}>Voltar para minha conta</Button>
            </div>
        </main>
        <Footer />
    </>
)

export default withRouter(NotFound);