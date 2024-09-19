import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularImc = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);

    if (isNaN(alturaMetros) || isNaN(pesoKg)) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const imc = (pesoKg / Math.pow(alturaMetros, 2)).toFixed(2);

    let classificacao;
    if (imc < 18.5) {
      classificacao = 'Você está abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'Seu peso está normal';
    } else if (imc >= 25.01 && imc < 30) {
      classificacao = 'Você está com sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      classificacao = 'Você está com obesidade grau 1';
    } else {
      classificacao = 'Você está com obesidade grau 2';
    }

    setResultado(`O seu resultado foi ${imc}, ${classificacao}`);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Calculadora IMC</h1>

      <h2 className="mb-2">Digite sua altura</h2>
      <input
        className="mb-2 form-control"
        type="text"
        placeholder="Digite em cm"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <h2 className="mb-2">Digite seu peso</h2>
      <input
        className="mb-2 form-control"
        type="text"
        placeholder="Digite em Kg"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <button onClick={calcularImc} className="btn btn-info m-2">
        Calcular
      </button>

      <div id="resultado" className="mt-3">
        {resultado}
      </div>

      <br />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrV4hIsRO_1Le88wpLpjX4lQWimQ4A7irPg&s"
        alt="Ilustração"
        className="img-fluid mt-3"
      />
    </div>
  );
}

export default App;
