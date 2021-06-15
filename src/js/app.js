import $ from "dom7";
import Framework7 from "framework7/bundle";

// Import F7 Styles
import "framework7/framework7-bundle.css";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.css";

// Import Routes
import routes from "./routes.js";
// Import Store
import store from "./store.js";

// Import main app component
import App from "../app.f7.html";

// IMPORTACION DE METHODS
import Methods from "./methods.js";

// PARA USAR $$ = DOM7
//var $$ = Dom7;
import $$ from "dom7";

// PARA USAR FILE SYSTEM
//import fs from "fs";
//var fs = require('file-system');
//import fs from "file-system";
//const fs = require('fs-extra');
//import fs from 'fs-extra';

// var file = require('file-system');
// var fs = require('fs');
// file.readFile === fs.readFile;

var app = new Framework7({
  name: "prueba", // App name
  theme: "auto", // Automatic theme detection
  el: "#app", // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,

  // INSTANCIA DE METHODS
  Methods: Methods,

  // INSTANCIA DE COMPONENTES A UTILIZAR
  card: {
    hideNavbarOnOpen: false,
    closeByBackdropClick: false,
    swipeToClose: true,
    animate: false,
  },

  //ACTION SHEETS
  actions: {
    covertToPopover: false,
    grid: true,
    backdrop: false,
  },
});

// ALERTA MANIPULANDO DOM

$$(document).on("click", ".btnAlert", function () {
  alert("Alerta desde app.js, mostrado en página");
});

// ALERTA MANIPULANDO DOM /

// IMPRIMIR VALOR INPUT
var linkFromInput;
function obtenerInput() {
  linkFromInput = $$(".inpDownloadJson").val();
  alert(linkFromInput);
}
// IMPRIMIR VALOR INPUT

// EJEMPLO URL
var jsonUrl =
  "https://prod.bdroppy.com/restful/export/api/products.json?acceptedlocales=en_US,it_IT,fr_FR,de_DE,es_ES,pt_PT&user_catalog=607591f119b28677983ca600&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDc1ODc5NGU5Y2Q3OTc2ZDA0NjJjM2UiLCJpYXQiOjE2MjI4MTY1NTMsImV4cCI6MTYyNTQ5NDk1MywiaXNzIjoiUmVQcm94eSJ9.rcxgvHHa9FcCZF_GiY3BVwzv6t-Dw-rJo8nxHsojYRA";

var jsonUrl2 = "http://api.open-notify.org/astros.json";

//var jsonUrl3 = linkFromInput;

function requestJSON() {
  fetch(linkFromInput)
    .then((response) => response.json())
    .then((data) => console.log(data));

  fetch(linkFromInput)
    .then((response) => response.json())
    //.then(data => download(JSON.stringify(data), "DownloadedJson.json", "text/plain")); // FUNCIONA
    .then((data) =>
      download(
        JSON.stringify(data),
        "./CarpetaDescarga/plyo.json",
        "text/plain"
      )
    );
}

$$(document).on("click", ".btnDownloadJson", function () {
  obtenerInput();
  requestJSON();
  //download(linkFromInput, "DownloadedJson.json", "text/plain");
});

// EJEMPLO URL /

function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// EJEMPLO SEARCHBAR
// var searchbar = app.searchbar.create({
//   el: ".searchbar",
//   searchContainer: ".list",
//   searchIn: ".item-title",
//   on:{
//     search(sb, query, previousQuery){
//       console.log(query, previousQuery);
//     }
//   }
// })

// // PRUEBA SEARCHBAR 2
// // const characterList = document.getElementById("charactersList");
// // const searchBar = document.getElementById("SearchBar");

// const characterList = $$("#charactersList");
// const searchBar = $$("SearchBar");
// searchBar.addEventListener("KeyUp", (e)=>{
//   console.log(e);
// });

// const loadCharacters = async () => {
//   try {
//     const res = await fetch("http://hp-api.herokuapp.com/api/characters");
//     let hpCharacters = await res.json();
//     displayCharacters(hpCharacters);
//     console.log(hpCharacters);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const displayCharacters = (characters) => {
//   const htmlString = characters
//     .map((characters) => {
//       return `<li class="character">
//       <h2>${character.name}</h2>
//       <p>House: ${character.house}</p>
//       <img src="">${character.image}</img>
//     </li>`;
//     })
//     .join(``);
//   characterList.innerHTML = htmlString;
// };

// loadCharacters();
