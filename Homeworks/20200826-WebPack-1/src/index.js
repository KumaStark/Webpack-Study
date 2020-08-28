import logo from "./images/logo.png";
import fnValue from "./fn";
import css from "./css/css.css";

let logoImg = new Image();
logoImg.src = logo;
document.body.appendChild(logoImg);

console.log("value exported from 'fn.js': ",fnValue);