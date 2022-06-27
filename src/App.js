import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

/*Components*/
import { HeaderBox } from './components/Header/HeaderBox'

function App() {

    const [quantItensCart, setQuantItensCart] = useState(0);

    return (
        <div className="App">
            <HeaderBox 
                quantItensCart={quantItensCart}
                setQuantItensCart={setQuantItensCart}
            />
        </div>
    );
}

export default App;