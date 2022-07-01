import React, { useState } from "react";
import './HeaderBox.css';

/*Icons*/
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi';
import { SiCodingninjas } from 'react-icons/si';

/*Components*/
import { CartModal } from "../Cart/CartModal";

export const HeaderBox = ({quantItensCart, setQuantItensCart}) => {
    return (
        <header>
            <SiCodingninjas className="header-logo"/>

            <nav>
                <h3>Como funciona?</h3>
                <h3>Serviços</h3>
                <HiOutlineShoppingCart className="cart-icon"/>

                {quantItensCart > 0 && <h2>{quantItensCart}</h2>}                
            </nav>

            <input type="checkbox" className="trigger-cart-modal"/>
            <CartModal
                className="cart-modal"
                quantItensCart={quantItensCart} 
                setQuantItensCart={setQuantItensCart} 
            />            
        </header>
    )
}