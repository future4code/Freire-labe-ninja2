import React, { useState } from "react";
import axios from "axios";
import './FormJob.css';


export const FormJob = () => {

    const [createJob, setCreatJob]=useState({
        title:"",
        description:"",
        price:"",
        paymentMethods:[],
        dueDate:""
    })

    // requestJob = () =>{
    //     const url = "https://labeninjas.herokuapp.com/jobs"
    //     const body = {
    //         title:createJob.title,
    //         description:createJob.description,
    //         price:createJob.price,
    //         paymentMethods:createJob.paymentMethods,
    //         dueDate:createJob.dueDate
    //     }
    //     axios.post(url,body,{
    //         headers: {Authorization: "2d88d553-bd93-447d-871c-2849315c7ded"}
    //     })
    //         .then((res)=>{
    //             alert(res.message)
    //         })
    //         .catch((err)=>{
    //             alert(err.message)
    //         })
    // }

   

    return (
        <form>
            
                <label>Titulo</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Titulo"
                    value={createJob.title}
                    onChange = {(e)=> setCreatJob(e.target.value)}
                />
                <label>Descrição</label>
                <input
                    type="textarea"
                    id="description"
                    name="description"
                    placeholder="Descrição"
                    value={createJob.description}
                    onChange= {(e)=> setCreatJob(e.target.value)}
                />
                <label>Preço</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Preço"
                    value={createJob.price}
                    onChange = {(e)=> setCreatJob(e.target.value)}
                />
                <label>Metodo de Pagamento</label>
                <select
                    id= "paymentMethods"
                    multiple
                    value={createJob.paymentMethods}
                    
                    placeholder="Selecione um ou mais"
                    options={[
                        {value:"pix", name:"Pix"},
                        {value:"payPal", name:"PayPal"},
                        {value:"dinheiro", name:"Dinheiro"}
                    ]}
                />
                <label>Data de Vencimento</label>
                <input
                    type="date"
                    id="dueDate"
                    name="date"
                    value={createJob.dueDate}
                    onChange = {(e) => setCreatJob(e.target.value)}

                />
                <button>Enviar</button>
            
        </form>
    )


}