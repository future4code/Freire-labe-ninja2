import React, { useState, useEffect } from "react";
import './HeaderBox.css';

/*Icons*/
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi';
import { SiCodingninjas } from 'react-icons/si';

/*Components*/
import { CartModal } from "../Cart/CartModal";

export const HeaderBox = ({quantItensCart, setQuantItensCart, cartList, setCartList, setPage}) => {

    useEffect(() => {
        let icon = document.getElementById('cart-box')

        if (quantItensCart === 0) {
            icon.style.marginRight = '-24px';
        } else {
            icon.style.marginRight = '0';
        }
    })

    return (
        <header>
            <SiCodingninjas className="header-logo"/>

            <nav>
                <span onClick={() => setPage("how")}>Como funciona?</span>
                <span onClick={() => setPage("services")}>Serviços</span>

                <div className="cart-icon-counter" id="cart-box">
                    <HiOutlineShoppingCart className="cart-icon"/>
                    <span>{quantItensCart}</span>
                </div>  
            </nav>

            <input type="checkbox" className="trigger-cart-modal"/>
            <CartModal
                className="cart-modal"
                quantItensCart={quantItensCart} 
                setQuantItensCart={setQuantItensCart} 

                cartList={cartList}
                setCartList={setCartList}
            />            
        </header>
    )
}