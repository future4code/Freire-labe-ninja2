import React from "react";
import axios from "axios";
import './FormJob.css';
import { BASE_URL, headers } from '../../constants/urls';

class FormJob extends React.Component{

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
        let value = Array.from(e.target.selectedOptions, option => option.value)

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
        })
        .catch((err)=>{
            alert(err.data.message)
        })
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
                    <input
                        type="textarea"
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
                        <option>Cartão de Débito</option>
                        <option>Cartão de Crédito</option>
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
                    
                    <button onClick={this.createJob} >Enviar</button>

                    
                
            </form>
        )
    }


}

export default FormJob