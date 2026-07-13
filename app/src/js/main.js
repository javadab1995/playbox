import "../style/scss/main.scss";

import Header from "../../components/Header";

import Footer from "../../components/Footer";
import { render } from "../../router";

document.querySelector("#app").innerHTML = `
  <div class="container">
   ${Header}

   <main class="main" id="view" ></main>

   <footer class="footer">${Footer}</footer>
  </div>
  
`;

render();

window.addEventListener("popstate", render);
