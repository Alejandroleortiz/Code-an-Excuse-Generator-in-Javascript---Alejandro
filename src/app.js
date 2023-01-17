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
  let pronoun = ["El", "Un"];
  let subject = ["perro", "gato", "loro", "policía", "cocodrilo", "perro"];
  let action = ["robó", "tomó", " agarró", " desapareció"];
  let possetion = ["la llave", "mi celular", "mi ID", "mi ropa"];
  let where = ["en la calle", "en mi casa", "en el autobús"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
