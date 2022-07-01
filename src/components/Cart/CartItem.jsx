import React from "react";
import './Cart.css';

export const CartItem = ({key,job}) => {
    return (
        <div className="cart-item">
            <h3>{job.title}</h3>
            <span>{job.price}</span>
        </div>
    )
}