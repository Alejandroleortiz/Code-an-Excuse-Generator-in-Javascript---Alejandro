/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#la-excusa").innerHTML = generateExcuse();
  console.log("Hola Rigo");
};
let generateExcuse = () => {
  let pronombre = ["El", "Un"];
  let sujeto = ["perro", "gato", "loro", "policía", "cocodrilo", "perro"];
  let accion = ["robó", "tomó", " agarró", " desapareció"];
  let posesion = ["la llave", "mi celular", "mi ID", "mi ropa"];
  let lugar = ["en la calle", "en mi casa", "en el autobús"];

  let pronombreA = Math.floor(Math.random() * pronombre.length);
  let sujetoA = Math.floor(Math.random() * sujeto.length);
  let accionA = Math.floor(Math.random() * accion.length);
  let posesionA = Math.floor(Math.random() * posesion.length);
  let lugarA = Math.floor(Math.random() * lugar.length);

  return (
    pronombre[pronombreA] +
    " " +
    sujeto[sujetoA] +
    " " +
    accion[accionA] +
    " " +
    posesion[posesionA] +
    " " +
    lugar[lugarA]
  );
};
