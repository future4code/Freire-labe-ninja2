import React from "react";
import './Cart.css';

/*Icons*/
import { BsTrash } from "react-icons/bs";

export const CartItem = ({item, cartList, setCartList, quantItensCart, setQuantItensCart}) => {

    /*Apaga o item do carrinho*/
    const handleDelete = () => {
        if(window.confirm("Deseja realmente apagar o item do carrinho?")){
            setCartList(cartList.filter(cartItem => cartItem.id !== item.id));
            setQuantItensCart(quantItensCart - 1);
        }
    }

    return (
        <div className="cart-item">
            <button onClick={() => handleDelete()}>
                <BsTrash />
            </button>

            <div className="cart-item-info">
                <h2>{item.title}</h2>

                <div>
                    <h5>{item.paymentMethods.join(" - ")}</h5>
                    <h5>Vencimento: {item.dueDate}</h5>
                    <h1>R$ {item.price.toFixed(2).replace('.',',')}</h1>
                </div>                
            </div>
        </div>
    )
}