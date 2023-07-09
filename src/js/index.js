import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/home.jsx";
 // Asegúrate de importar el componente SecondsCounter desde la ubicación correcta

let counter = 0;
setInterval(() => {
    ReactDOM.render(<SecondsCounter counter={counter} />, document.querySelector("#app"));
    counter++;
}, 1000);