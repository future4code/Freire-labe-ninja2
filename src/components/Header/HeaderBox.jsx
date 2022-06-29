import React from "react";
import './HeaderBox.css';

/*Icons*/
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi';
import { SiCodingninjas } from 'react-icons/si';

export const HeaderBox = ({quantItensCart, setQuantItensCart}) => {

    return (
        <header>
            <SiCodingninjas className="header-logo"/>

            <nav>
                <h1>Como funciona?</h1>
                <h1>Serviços</h1>
                <HiOutlineShoppingCart className="cart-icon"/>

                {quantItensCart > 0 && <h2>{quantItensCart}</h2>}                
            </nav>

            <input type="checkbox" className="trigger-cart-modal"/>
            <div className="cart-modal">

            </div>
        </header>
    )
}