import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Image } from '../../../assets/img/logo.svg';

const Logo = () => ( 
    <Link className = "logo" to = "/" >
        <Image />
    </Link>
)

export default Logo;