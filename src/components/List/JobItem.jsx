import React from "react";
import './List.css';

/*Icons*/
import { IoBagAdd } from "react-icons/io5";

export const JobItem = ({job, setCartList, quantItensCart, setQuantItensCart}) => {

    const formatDate = (date) => {
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);

        return `${day}/${month}/${year}`;
    }

    const formatPaymentMethods = (paymentMethods) => {
        let paymentMethodsArray = [];

        paymentMethods.forEach(paymentMethod => {
            paymentMethodsArray.push(paymentMethod);
        })

        return paymentMethodsArray.join(" - ");
    }

    const formatPrice = (price) => {
        return `R$ ${price.toFixed(2).replace(".", ",")}`;
    }

    const addToCart = (job) => {
        let cartList = JSON.parse(localStorage.getItem("cartList"));
        let jobExists = false;

        cartList.forEach(item => {
            if (item.id === job.id) {
                jobExists = true;
                alert("O item já está no carrinho!");
            }
        });

        if (!jobExists) {
            cartList.push(job);
            localStorage.setItem("cartList", JSON.stringify(cartList));

            setCartList(cartList);
            setQuantItensCart(cartList.length);
        }          
    }

    return (
        <div className="job-item">
            <span className="title">{job.title}</span>
            <span className="description">{job.description}</span>

            <div className="infos">
                <span className="paymentMethods">{formatPaymentMethods(job.paymentMethods)}</span>
                <span className="dueDate">{formatDate(job.dueDate)}</span>
            </div>

            <div className="value">
                <span className="price">{formatPrice(job.price)}</span>

                <button onClick={() => addToCart(job)}>
                    <IoBagAdd />
                </button>
            </div>
        </div>
    )
}