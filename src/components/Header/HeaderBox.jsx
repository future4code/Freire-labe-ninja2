import React from "react";
import './HeaderBox.css';

/*Icons*/
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi';

export const HeaderBox = ({quantItensCart, setQuantItensCart}) => {



    return (
        <header>
            <img src="https://cdn-icons.flaticon.com/png/512/1126/premium/1126816.png?token=exp=1656358537~hmac=c22c0306d95a7190fb69f1b6b6f65454" alt=""/>

            <nav>
                <h1>Como funciona?</h1>
                <h1>Serviços</h1>
                <HiOutlineShoppingCart/>
            </nav>
        </header>
    )
}