import {createGlobalStyle} from "styled-components";
import background from "../assets/hearder.jpg";


export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  height: 100vh;

}

`
