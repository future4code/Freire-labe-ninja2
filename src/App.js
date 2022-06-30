import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";


/*Components*/
import { HeaderBox } from './components/Header/HeaderBox';
import FormJob from './components/Form/FormJob';
import JobList from "./components/List/JobsList";

function App() {
  const [quantItensCart, setQuantItensCart] = useState(0);

  return (
    <div className="App">
      <HeaderBox
        quantItensCart={quantItensCart}
        setQuantItensCart={setQuantItensCart}
      />

    return (
        <div className="App">
            <HeaderBox 
                quantItensCart={quantItensCart}
                setQuantItensCart={setQuantItensCart}
            />

            <FormJob/>

      <JobList />
    </div>
  );
}

export default App;
