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
  }
});