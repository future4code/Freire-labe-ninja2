import React from "react";
import { useState, useEffect } from "react";
import './Cart.css';

/*Components*/
import { CartItem } from "../Cart/CartItem";

export const CartModal = ({quantItensCart, setQuantItensCart}) => {

    const [cartList,setCartList] = useState([{
        id: "efed9385-cf87-4f0e-a121-465384b3f2e5",
        title: "Cortar a grama",
        description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
        price: 40,
        paymentMethods: [
            "PayPal",
            "boleto"
        ],
        dueDate: "2020-01-01",
        taken: false
    },{
        id: "efed9385-cf87-4f0e-a121-465384b3f2e6",
        title: "Cortar a grama 2",
        description: "Manutenção em áreas verdes de até 2000 metros quadrados.",
        price: 40,
        paymentMethods: [
            "PayPal",
            "boleto",
            "cartão"
        ],
        dueDate: "30/12/2021",
        taken: false
    },{
        id: "efed9385-cf87-4f0e-a121-465384b3f2e4",
        title: "Cortar a grama 3",
        description: "Manutenção em áreas verdes de até 3000 metros quadrados.",
        price: 40,
        paymentMethods: [
            "debito",
            "boleto",
            "pix"
        ],
        dueDate: "30/12/2021",
        taken: false
    },{
        id: "efed9385-cf87-4f0e-a121-465384b3f2e8",
        title: "Cortar a grama 2",
        description: "Manutenção em áreas verdes de até 2000 metros quadrados.",
        price: 40,
        paymentMethods: [
            "PayPal",
            "boleto",
            "cartão"
        ],
        dueDate: "30/12/2021",
        taken: false
    },{
        id: "efed9385-cf87-4f0e-a121-465384b3f2e7",
        title: "Cortar a grama 3",
        description: "Manutenção em áreas verdes de até 3000 metros quadrados.",
        price: 40,
        paymentMethods: [
            "debito",
            "boleto",
            "pix"
        ],
        dueDate: "30/12/2021",
        taken: false
    },{
        id: "efed9385-cf87-4f0e-a121-465384b3f2e1",
        title: "Cortar a grama 2",
        description: "Manutenção em áreas verdes de até 2000 metros quadrados.",
        price: 40,
        paymentMethods: [
            "PayPal",
            "boleto",
            "cartão"
        ],
        dueDate: "30/12/2021",
        taken: false
    },{
        id: "efed9385-cf87-4f0e-a121-465384b3f2e3",
        title: "Cortar a grama 3",
        description: "Manutenção em áreas verdes de até 3000 metros quadrados.",
        price: 40,
        paymentMethods: [
            "debito",
            "boleto",
            "pix"
        ],
        dueDate: "30/12/2021",
        taken: false
    }]);

    /*useEffect para atualizar a quantidade de itens no carrinho*/
    useEffect(() => {
        setQuantItensCart(cartList.filter(item => !item.taken).length);
    })

    return (
        <div className="cart-modal">
            <div className="cart-modal-itens">
                {cartList.map(item => (
                    <CartItem 
                        key={item.id} 
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