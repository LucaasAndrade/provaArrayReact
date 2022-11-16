
import { useState } from 'react';
import { Inverter } from '../../assets/inverterVetor';
import './App.css';

function App() {
  const [numero, setNumero] = useState();
  const [numeros, setNumeros] = useState([]);

  function add() {
    let atual = [...numeros, numero];
    setNumeros(atual);
  }

  function invert() {
    let atual = Inverter(numeros);
    setNumeros(atual);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2> Adicione Números </h2>
          <h5> Exercicío 1</h5>
        </div>
        <div>
          <input type='number' value={numero} onChange={ e => setNumero(e.target.value) } />
          <button onClick={add}> Add </button>
          <div>
            <button onClick={invert}> Invert </button>
          </div>
        </div>
        <div>
          {
            numeros.map(item =>
              <p> {item} </p>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
