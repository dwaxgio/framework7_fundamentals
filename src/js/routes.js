import HomePage from "../pages/home.f7.html";
import AboutPage from "../pages/about.f7.html";
import FormPage from "../pages/form.f7.html";
// PAGINA PERSONAL
//import pagina from '../pages/pagina.html';
import initPage from "../AppPage/init.f7.html";

import DynamicRoutePage from "../pages/dynamic-route.f7.html";
import RequestAndLoad from "../pages/request-and-load.f7.html";
import NotFoundPage from "../pages/404.f7.html";

var initExterno = "https://checkout.stripe.com/pay/cs_live_b1aB6oR4uUKdEyKkK9IvQDoLKYs0QMEMzRQNCcTKwmuvxENtFdcgkpkOO1#fidkdWxOYHwnPyd1blppbHNgWjA0TE9uSUdERk1ifH8wNGBXR0RLQnQ0U1VjPDZ0QDdAV1RtdXBRYm9Id0gzcXV3cTRIZkxKamxkS3VkQH9dcDxRNF1JYU9rQD1VV0JQUW98RmBtakNqdGBMNTU9c2dmanM0MCcpJ2hsYXYnP34nYnBsYSc%2FJzc9Z2c0YGE2KGc8NWQoMTc3PSg8ZmExKGQyNDBmNz09ZjZgPT1jMGE3ZycpJ2hwbGEnPyc0ZGQ8MGQ2NihjNGA3KDE2MGAoZDU2PSgwYTZjM2RkYWBnMDQ8ZjZgPDInKSd2bGEnPydhYGAxZGQxMChkMTVhKDE8YDMoZDVjMShjMDw3YDwwMD01ZGNhY2NkYTEneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8naHBpcWxabHFgaCcpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdXY%2FKip1aXxqK3ZtanUneCUl";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  // {
  //   path: '/',
  //   component: initPage,
  // },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/form/",
    component: FormPage,
  },
  // {
  //   path: '/init/',
  //   component: initPage,
  // },

  {
    path: "/init/",
    async: function({router, resolve}) {
      // Instancia de app
      var app = router.app;

      // Mostrar preloader
      app.preloader.show();

      // Simular solicitud ajax
      setTimeout(function () {
        console.log("prueba preloader");

        // Ocultar Preloader
        app.preloader.hide();

        // Resolver ruta para cargar página
        resolve({
          component: initPage,
        });
      }, 1000);
    },
  },

  {
    path: "/initExterno/",
    async: function({router, resolve}) {
      // Instancia de app
      var app = router.app;

      // Mostrar preloader
      app.preloader.show();

      // Simular solicitud ajax
      setTimeout(function () {
        console.log("prueba preloader");

        // Ocultar Preloader
        app.preloader.hide();

        // Resolver ruta para cargar página
        resolve({
          component: initExterno,
        });
      }, 1000);
    },
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
