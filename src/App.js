import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

/*Components*/
import { HeaderBox } from "./components/Header/HeaderBox";
import { JobsList } from "./components/List/JobsList";
import { SearchInput } from "./components/Search/SearchInput";
import { JobFilter } from "./components/Filter/JobFilter";


function App() {
  const [quantItensCart, setQuantItensCart] = useState(0);

  /*Armazena todos os produtos da loja*/
  const [jobsList, setJobsList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("MENOR");
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(1000);
  const [query, setQuery] = useState("");

  useEffect = () => {
    axios.get("https://labeninjas.herokuapp.com/jobs", {
      headers: { Authorization: "2d88d553-bd93-447d-871c-2849315c7ded" },
    })
      .then((response) => {
        this.setJobsList({ jobsList: response.data.jobs });
        console.log(response.data.jobs);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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
      </div>
    </div>
  );
}

export default App;
