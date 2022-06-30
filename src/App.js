import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

/*Components*/
import { HeaderBox } from "./components/Header/HeaderBox";
import JobList from "./components/List/JobsList";

function App() {
  const [quantItensCart, setQuantItensCart] = useState(0);

  return (
    <div className="App">
      <HeaderBox
        quantItensCart={quantItensCart}
        setQuantItensCart={setQuantItensCart}
      />

      <JobList />
    </div>
  );
}

export default App;
