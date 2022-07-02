import React from "react";
import './List.css';

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

        if (cartList !== null) {
            let jobExists = false;
            cartList.forEach(item => {
                if (item.id === job.id) {
                    jobExists = true;
                } else {
                    jobExists = false;
                }
            }
            );

            if (!jobExists) {
                cartList.push(job);
                localStorage.setItem("cartList", JSON.stringify(cartList));
            } else {
                cartList.forEach(item => {
                    if (item.id === job.id) {
                        item.quantity += 1;
                    } else {
                        jobExists = false;
                    }
                }
                );
            }            
        }

        setCartList(cartList);
        setQuantItensCart(cartList.length);
    }

    /*Verifica se o job já está no carrinho*/
    const isInCart = (job) => {
        let cartList = JSON.parse(localStorage.getItem("cartList"));

        if(cartList.length > 0) {
            for(let i = 0; i < cartList.length; i++) {
                if(cartList[i].id === job.id) {
                    console.log("Job já está no carrinho");
                } else {
                    console.log("Job não está no carrinho");
                } 
            }
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
                    <span className="little">Adicionar ao</span>
                    <span className="big">Carrinho</span>
                </button>
            </div>
        </div>
    )
}