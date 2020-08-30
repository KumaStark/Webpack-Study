import logo from "./images/logo.png";
import showName from "./js/fn";
import "./css/css.css";

let logoPlaceHolder = document.querySelector("#logo-placeholder");
let logoImg = new Image();
logoImg.src = logo;
logoPlaceHolder.appendChild(logoImg);

let showNameBtn = document.querySelector("#console-log");
showNameBtn.onclick = showName;

if (module.hot) {
    module.hot.accept("./js/fn", function () {
        showNameBtn.onclick = showName;
    });
}