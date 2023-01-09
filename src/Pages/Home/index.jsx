import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import img from "../../assets/images.png";

import "./styles.css";

export function Home() {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    api.get("products").then(({ data }) => {
      setProducts(data);
    });
  }, [products]);

  const createProduct = (e) => {
    e.preventDefault();
    api.post("products", {
      products: productName,
      amount: amount,
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Lista de Compra</h1>
      </header>
      <img src={img} alt="" />

      <form className="container-form" onSubmit={createProduct}>
        <input
          value={productName}
          type="text"
          placeholder="Digite o produto..."
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          value={amount}
          type="number"
          placeholder="Qtd..."
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">+</button>
      </form>

      <table>
        <tr>
          <th>Produto</th>
          <th>Qtd</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.products}</td>
            <td>{product.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
