import styled from "styled-components";
export const Container = styled("div")`

button{
  background-color: transparent;
  padding: 0;
}
`
export const Box = styled("div")`
height: 100%;
display: flex;

form{
background-color: #04aa6d;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 200px;
margin: auto;
padding: 10px; 
gap: 12px;

h1{
  font-size: 16px;
  color: #d1fac9;
}

input{
  padding: 9px;
  width: 140px;
  border-radius: 5px;
  border: none;

}

button{
    background: #d1fac9;
    border: none;
    border-radius: 5px;
    padding: 9px;
    cursor: pointer;
}
}

`
 