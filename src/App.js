import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


import MainHowWork from './components/How we work/MainHowWork';
import { HeaderBox } from "./components/Header/HeaderBox";
import { JobsList } from "./components/List/JobsList";
import { SearchInput } from "./components/Search/SearchInput";
import { JobFilter } from "./components/Filter/JobFilter";
import FormJob from './components/Form/FormJob';
import { BASE_URL, headers } from './constants/urls';

function App() {
  const [quantItensCart, setQuantItensCart] = useState(0);

  /*Armazena o valor referente a qual págian deve ser renderizada (home-how-services-form)*/
  const [page, setPage] = useState ("home")

  /*Armazena todos os produtos da loja*/
  const [jobsList, setJobsList] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState("MENOR");
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(1000);
  const [query, setQuery] = useState("");

  
  useEffect(() => {
    const getJobs = async () => {
      await axios.get(`${BASE_URL}/jobs`, headers)
      .then((response) => {
        console.log(response.data.jobs);
        // essa linha não funciona
        setJobsList(response.data.jobs);
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    getJobs();
  }, []);
  

  // useEffect(() => {
  //   axios.get(`${BASE_URL}/jobs`, headers)
  //     .then(res => {
  //       setJobsList(res.data)
  //     }).catch(err => {
  //       alert("Deu ruim")
  //     })
  // },[])
  
  return (
    <div className="App">
      <HeaderBox
        quantItensCart={quantItensCart}
        setQuantItensCart={setQuantItensCart}
      />
      <div className="Main">
        <SearchInput
          query={query}
          setQuery={setQuery}
        />

        <JobFilter
          setJobsList={setJobsList}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          minimo={minimo}
          setMinimo={setMinimo}
          maximo={maximo}
          setMaximo={setMaximo}
          query={query}
          setQuery={setQuery}
        />

        <JobsList
          jobsList={jobsList}
          minimo={minimo}
          maximo={maximo}
          query={query}
          selectedBrand={selectedBrand}
        />

        {page === "home" && <div></div>}
        {page === "how" && <div></div>}
        {page === "services" && <div></div>}
        {page === "form" && <div></div>}
        
      </div>

    </div>
  );
}

export default App;
