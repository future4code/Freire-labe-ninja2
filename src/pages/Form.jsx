import React from "react";
import axios from "axios";
import './pages.css';
import { BASE_URL, headers } from '../constants/urls';

class Form extends React.Component{

    state ={
        title:"",
        description:"",
        price: "",
        paymentMethods:[],
        dueDate:""
    }

    handleTitle = (e) =>{
        this.setState({title: e.target.value})
    }
    handleDescriptiom = (e) =>{
        this.setState({description: e.target.value})
    }
    handlePrice = (e) =>{
        this.setState({price: e.target.value})
    }
    handlePaymentMethods = (e) =>{        
        let lista = this.state.paymentMethods

        if (lista.includes(e.target.value)){
            lista.splice(lista.indexOf(e.target.value),1)
        } else {
            lista.push(e.target.value)
        }
    }

    handleDueDate = (e) =>{
        this.setState({dueDate: e.target.value})
    }    

    createJob = (e) =>{

        e.preventDefault();
        
        const body = {
            title:this.state.title,
            description:this.state.description,
            price:Number(this.state.price),
            paymentMethods:this.state.paymentMethods,
            dueDate:this.state.dueDate
        }

        if (body.title === "") {
            alert("Preencha o titulo!")
        } else if (body.description === "") {
            alert("Preencha a descrição!")
        } else if (body.price === 0) {
            alert("Preencha o preço!")
        } else if (body.paymentMethods.length === 0) {
            alert("Escolha pelo menos UM metodo de pagamento!")
        } else if (body.dueDate === "") {
            alert("Preencha a data de vencimento!")
        } else {
            axios.post(`${BASE_URL}/jobs`,body, headers)
            .then((res)=>{
                alert(res.data.message)

                this.setState({
                    title:"",
                    description:"",
                    price: "",
                    paymentMethods:[],
                    dueDate:""
                })

                window.location.reload();
            })
            .catch((err)=>{
                alert(err.data.message)
            })
        }
    }
   
    render() {
        return (
            <form>                
                <label>Titulo</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Titulo"
                    value={this.state.title}
                    onChange = {this.handleTitle}
                />

                <label>Descrição</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Descrição"
                    value={this.state.description}
                    onChange= {this.handleDescriptiom}
                />

                <label>Preço</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Preço"
                    value={this.state.price}
                    onChange = {this.handlePrice}
                />
                
                <label>Metodo de Pagamento</label>
                <select
                    multiple
                    size={5}
                    value={this.state.paymentMethods}
                    onChange={this.handlePaymentMethods}
                >
                    <option>Débito</option>
                    <option>Crédito</option>
                    <option>PayPal</option>
                    <option>Boleto</option>
                    <option>Pix</option>
                </select>

                <label>Data de Vencimento</label>
                <input
                    type="date"
                    id="dueDate"
                    name="date"
                    value={this.state.dueDate}
                    onChange = {this.handleDueDate}
                />

                <br />
                    
                <button onClick={this.createJob}>Enviar</button>               
            </form>
        )
    }
}

export default Form