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

//DESCARGA JS btnDownloadJson

// Ejemplo data local
// const jsonData = {
//   name: "Edward",
//   email: "edward@mail.com",
//   website: "https://github.com/dwaxgio"
//  };

//  function download(content, fileName, contentType) {
//   const a = document.createElement("a");
//   const file = new Blob([content], { type: contentType });
//   a.href = URL.createObjectURL(file);
//   a.download = fileName;
//   a.click();
//  }

// $$(document).on("click", ".btnDownloadJson", function(){
//   download(JSON.stringify(jsonData), "DownloadedJson.json", "text/plain");
// });

//DESCARGA JS btnDownloadJson /

// IMPRIMIR VALOR INPUT
var linkFromInput
function obtenerInput(){
  linkFromInput = $$(".inpDownloadJson").val();
        alert(linkFromInput);
}

// $$(document).on("click", ".btnDownloadJson", function(){
//   obtenerInput();
// });

// IMPRIMIR VALOR INPUT

// EJEMPLO URL
var jsonUrl =
  "https://prod.bdroppy.com/restful/export/api/products.json?acceptedlocales=en_US,it_IT,fr_FR,de_DE,es_ES,pt_PT&user_catalog=607591f119b28677983ca600&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDc1ODc5NGU5Y2Q3OTc2ZDA0NjJjM2UiLCJpYXQiOjE2MjI4MTY1NTMsImV4cCI6MTYyNTQ5NDk1MywiaXNzIjoiUmVQcm94eSJ9.rcxgvHHa9FcCZF_GiY3BVwzv6t-Dw-rJo8nxHsojYRA";

var jsonUrl2 = 'http://api.open-notify.org/astros.json';

//var jsonUrl3 = linkFromInput;

function requestJSON() {  
  fetch(linkFromInput)
  .then(response => response.json())
  .then(data => console.log(data));
  
  fetch(linkFromInput)
  .then(response => response.json())
  //.then(data => download(data, "DownloadedJson.json", "text/plain"));   // IMPRIME [object Object]
  .then(data => download(JSON.stringify(data), "DownloadedJson.json", "text/plain"));
}

$$(document).on("click", ".btnDownloadJson", function(){
  obtenerInput();
  requestJSON();
  //download(linkFromInput, "DownloadedJson.json", "text/plain");

});

// EJEMPLO URL /

// // EJEMPLO URL DESCARGA
// const jsonData = {
//   name: "Edward",
//   email: "edward@mail.com",
//   website: "https://github.com/dwaxgio"
//  };

 function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
 }

// $$(document).on("click", ".btnDownloadJson", function(){
//   download(jsonUrl2, "DownloadedJson.json", "text/plain");
// });

// // EJEMPLO URL DESCARGA /

