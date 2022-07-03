import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


import MainHowWork from './components/How we work/MainHowWork';
import { HeaderBox } from "./components/Header/HeaderBox";
import FormJob from './components/Form/FormJob';
import { BASE_URL, headers } from './constants/urls';

/*Pages*/
import { Services } from "./pages/Services";

function App() {
  const [quantItensCart, setQuantItensCart] = useState(0);

  /*Armazena o valor referente a qual págian deve ser renderizada (home-how-services-form)*/
  const [page, setPage] = useState ("home")

  /*Armazena todos os produtos da loja*/
  const [jobsList, setJobsList] = useState([])

  /*Armazena os produtos adicionados ao carrinho*/
  const [cartList,setCartList] = useState([])

  const [selectedBrand, setSelectedBrand] = useState("MENOR");
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(1000);
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    const getJobs = async () => {
      await axios.get(`${BASE_URL}/jobs`, headers)
      .then((response) => {
        setJobsList(response.data.jobs);
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    getJobs();
  }, []);
  
  return (
    <div className="App">
      <HeaderBox
        quantItensCart={quantItensCart}
        setQuantItensCart={setQuantItensCart}

        cartList={cartList}
        setCartList={setCartList}

        setPage={setPage}
      />

      <div className="Main">
        

        {page === "home" && <div></div>}
        {page === "how" && <MainHowWork />}
        {page === "services" && 
          <Services
            jobsList={jobsList}
            setJobsList={setJobsList}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            minimo={minimo}
            setMinimo={setMinimo}
            maximo={maximo}
            setMaximo={setMaximo}
            query={query}
            setQuery={setQuery}

            cartList={cartList}
            setCartList={setCartList}

            quantItensCart={quantItensCart}
            setQuantItensCart={setQuantItensCart}
          />
        }
        {page === "form" && <div></div>}
        
      </div>

    </div>
  );
}

export default App;
