/*
  Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
       restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
        
  - Home untuk pasien yang sudah login
  - Dashboard untuk admin & superadmin yang sudah login
*/

import AppContainer from "../components/AppContainer";
import ErrorPage from "../pages/404Pages/ErrorPage";
import AboutPage from "../pages/about";
import AcademicPage from "../pages/academic";
import NewsDetailPage from "../pages/news";

export const APP_ROUTE = [
  {
    name: "Home",
    path: "/",
    // exact: true, //di false karena ada nested Switch di dalamnya AppContainer
    element: AppContainer,
    private: true,
    isPasien: true,
  },
  {
    name: "About Page",
    path: "/about",
    element: AboutPage,
    private: true,
    isPasien: true,
  },
  {
    name: "Academic Page",
    path: "/academic",
    element: AcademicPage,
    private: true,
    isPasien: true,
  },
  {
    name: "News Detail",
    path: "/news/:id",
    element: NewsDetailPage,
    private: true,
    isPasien: true,
  },
  {
    name: "Error Page not found",
    path: "/*",
    element: ErrorPage,
    private: true,
    exact: true,
    isNotFound: true,
  },
  {
    name: "Error Page not found",
    path: "/error",
    element: ErrorPage,
    private: true,
    exact: true,
    isNotFound: true,
  }
];
