import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Container } from "./styles";
import ModalEdit from "../../components/ModalEdit";
export function Home() {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);
  const [createProducts, setCreateProducts] = useState();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    api.get("products").then(({ data }) => {
      setProducts(data);
    });
  }, [createProducts]);

  async function createProduct(e) {
    e.preventDefault();
    await api
      .post("products", {
        products: productName,
        amount: amount,
      })
      .then(({ data }) => {
        setCreateProducts(data);
      });
  }

  const deleteProduct = (id) => {
    api.delete(`products/${id}`);
    setProducts(
      products.filter((product) => {
        return product.id !== id;
      })
    );
  };

  const updateProduct = (id) => {
    api.put(`products/${id}`, {
      products: productName,
      amount: amount,
    });
    setProducts(
      products.filter((product) => {
        return product.id !== id;
      })
    );
  };

  return (
    <Container>
      <header>
        <h1>Lista de Compra</h1>
      </header>

      <form className="container-form" onSubmit={createProduct}>
        <input
          value={productName}
          type="text"
          placeholder="Digite o produto..."
          required="required"
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          value={amount}
          type="number"
          placeholder="Qtd..."
          required="required"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">+</button>
      </form>
      <div className="table-scroll">
        <table>
          <tr>
            <th>Produto</th>
            <th>Qtd</th>
            <th colspan="2"></th>
          </tr>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.products}</td>
              <td>{product.amount}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteProduct(product.id)}
                >
                  <RiDeleteBin6Line size={20} color="red" />
                </button>
              </td>
              <td>
                <ModalEdit />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  );
}
