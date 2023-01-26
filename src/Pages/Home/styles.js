import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 400px;
    position: absolute;
    left: 0;
    top: 200px;
  }
  h1 {
    color:  #04aa6d;
    display: flex;
    align-items: center;
    margin: 40px 0;
  }

  input {
    padding: 12px 20px;

    background: #f5f3f3;
    border-radius: 5px;
    border: none;

    font-size: 10px;
  }

  input[type="number"] {
    width: 70px;
  }
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}

  button {
    width: 10%;
    padding: 12px;
    font-weight: 700;

    background: #04aa6d;
    color: #d1fac9;

    border-radius: 5px;
    margin: 12px 0;
    border: none;

    cursor: pointer;
    transition: filter 0.2s;
    font-size: 10px;
    text-align: center;
  }

  button:hover {
    filter: brightness(0.9);
  }

  .container-form {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;
    margin-bottom: 10px;
  }

  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
  

  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
   
  }

  tr {
    background-color: #f2f2f2;
    
  }

  tr:hover {
    background-color: #ddd;
  }

  td:first-child,
  th:first-child {
    width: 400px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }

  td .delete {
    padding: 0;
    background-color: transparent;
  }

  .table-scroll {
    overflow-y: scroll;
    max-height: 400px;
  

    /* width */
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #19212b;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background-color: #323941;
      border-radius: 4px;
    }
  }
`;
