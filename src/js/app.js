import $ from 'dom7';
import Framework7 from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7.html';

// IMPORTACION DE METHODS
import Methods from './methods.js';

// PARA USAR $$ = DOM7
//var $$ = Dom7;
import $$ from 'dom7';

var app = new Framework7({
  name: 'prueba', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,

  // INSTANCIA DE METHODS
  Methods: Methods,


  // INSTANCIA DE COMPONENTES A UTILIZAR
  card:{
    hideNavbarOnOpen: false,
    closeByBackdropClick: false,
    swipeToClose: true,
    animate: false
  },

  //ACTION SHEETS
  actions:{
    covertToPopover: false,
    grid: true,
    backdrop: false
  },  

  

});

// ALERTA MANIPULANDO DOM
// $(document).on("click",".alert-text-title",function() {
//   alert("Evento desde elemento de formulario");
// });

$$(document).on("click", ".btnAlert", function(){
  alert("Alerta desde app.js, mostrado en página");
});

//DESCARGA JS btnDownloadJson
const jsonData = {
  name: "Edward",
  email: "edward@mail.com",
  website: "https://github.com/dwaxgio"
 };
 
 function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
 }

$$(document).on("click", ".btnDownloadJson", function(){
  download(JSON.stringify(jsonData), "DownloadedJson.json", "text/plain");
});