import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

/*Components*/
import { HeaderBox } from "./components/Header/HeaderBox";
import { JobsList } from "./components/List/JobsList";
import { SearchInput } from "./components/Search/SearchInput";
import { JobFilter } from "./components/Filter/JobFilter";
import FormJob from './components/Form/FormJob';
import { BASE_URL, headers } from './constants/urls';

function App() {
  const [quantItensCart, setQuantItensCart] = useState(0);

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
        this.setJobsList({ jobsList: response.data.jobs });
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
          selectedBrand={selectedBrand}
          minimo={minimo}
          maximo={maximo}
          query={query}
        />

        <FormJob />
      </div>

    </div>
  );
}

export default App;
