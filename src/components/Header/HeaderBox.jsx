import React, { useEffect } from "react";
import './HeaderBox.css';

/*Icons*/
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi';
import { SiCodingninjas } from 'react-icons/si';

/*Components*/
import { CartModal } from "../Cart/CartModal";

export const HeaderBox = ({quantItensCart, setQuantItensCart, cartList, setCartList, setPage}) => {

    useEffect(() => {
        let icon = document.getElementById('cart-box')
        let checkbox = document.getElementById('trigger-cart')

        if (quantItensCart === 0) {
            icon.style.marginRight = '-24px'
            checkbox.style.marginRight = '-24px'
        } else {
            icon.style.marginRight = '0'
            checkbox.style.marginRight = '0'
        }
    })

    const closeCart = (pageGoTo) => {
        document.getElementById('trigger-cart').checked = false

        setPage(pageGoTo)
    }

    return (
        <header>
            <SiCodingninjas className="header-logo"/>

            <nav>
                <span onClick={() => closeCart('form')}>Cadastro</span>
                <span onClick={() => closeCart('how')}>Como funciona?</span>
                <span onClick={() => closeCart('services')}>Serviços</span>

                <div className="cart-icon-counter" id="cart-box">
                    <HiOutlineShoppingCart className="cart-icon"/>
                    <span>{quantItensCart}</span>
                </div>  
            </nav>

            <input type="checkbox" className="trigger-cart-modal" id="trigger-cart"/>
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