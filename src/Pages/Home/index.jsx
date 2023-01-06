import React, { useState } from "react";
import img from '../../assents/images.png'

import "./styles.css";

export function Home() {
  const [produtName, setProdutName] = useState("");
  const [produts, setProduts] = useState([]);
  const [produtValue, setProdutValue] = useState();
  
function handleAddProdut(){
  const newProdut = {
    name: produtName,
    value: produtValue
  };
  
  setProduts((prevState) => [...prevState, newProdut]);
}



  return (
    <div className='container'>
      <header>
      <h1>Lista de Compra</h1>

      </header>
      <img src={img} alt="" />

  <div className="container-form">
  <input value={produtName}
        type="text"
        placeholder="Digite o produto..."
        onChange={(e) => setProdutName(e.target.value)}
      />
     
    <input value={produtValue}
        type="number"
        placeholder="Qtd..."
        onChange={(e) => setProdutValue(e.target.value)}
      />
     
   <button type="button" onClick={handleAddProdut}>
    +
    </button>
     
  </div>

  <table>
    <tr>
      <th>Produto</th>
      <th>Qtd</th>
    </tr>
      {produts.map((produt) => (
        <tr>
          <td>{produt.name}</td>
          <td>{produt.value}</td>
        </tr>
      ))}
  </table>        
   </div>
  );
}

