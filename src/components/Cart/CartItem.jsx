import React from "react";
import { useState, useEffect } from "react";
import './Cart.css';

/*Icons*/
import { BsTrash } from "react-icons/bs";

export const CartItem = ({item, cartList, setCartList, quantItensCart, setQuantItensCart}) => {

    const formatDate = (date) => {
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);

        return `${day}/${month}/${year}`;
    }

    /*Deleta o item do carrinho*/
    const deleteItem = (item) => {
        let cart = JSON.parse(localStorage.getItem("cartList"));
        let newCart = cart.filter(cartItem => cartItem.id !== item.id);
        localStorage.setItem("cartList", JSON.stringify(newCart));

        setCartList(newCart);
        setQuantItensCart(quantItensCart - 1);
    }

    return (
        <div className="cart-item">
            <button onClick={() => deleteItem(item)}>
                <BsTrash />
            </button>

            <div className="cart-item-info">
                <h2>{item.title}</h2>

                <div>
                    <h5>{item.paymentMethods.join(" - ")}</h5>
                    <h5>Vencimento: {formatDate(item.dueDate)}</h5>
                    <h1>R$ {item.price.toFixed(2).replace('.',',')}</h1>
                </div>                
            </div>
        </div>
    )
}