import React from "react";
import { useState, useEffect } from "react";
import './Cart.css';

/*Components*/
import { CartItem } from "../Cart/CartItem";

export const CartModal = ({quantItensCart, setQuantItensCart, cartList, setCartList}) => {

    useEffect(() => {
        if (localStorage.getItem("cartList")) {
            let cart = JSON.parse(localStorage.getItem("cartList"));
            setQuantItensCart(cart.length);
            setCartList(cart);
        } else {
            setQuantItensCart(0);
        }
    }, [])

    return (
        <div className="cart-modal">
            <div className="cart-modal-itens">
                {cartList.map((item, index) => (
                    <CartItem
                        key={index}
                        item={item}

                        cartList={cartList}
                        setCartList={setCartList}

                        quantItensCart={quantItensCart}
                        setQuantItensCart={setQuantItensCart}
                    />
                ))}
            </div>
        </div>
    )
}