import React from 'react';
import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import UserDetails from '../../components/User/Details';
import OrdersList from '../../components/Orders/List';


//import { Link } from 'react-router-dom';



import "./styles.css";

const Account = () => (
    <>
        <Header />
        <main className="main">
            <div className="account container">
                <UserDetails />
                <OrdersList/>
            </div>
        </main>
        <Footer />
    </>
)

export default Account;