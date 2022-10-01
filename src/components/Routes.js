/*
    Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login, restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
*/

import Login from ".././pages/lojin/Login";
import Dashboard from ".././pages/dashboard/Dashboard";

export const APP_ROUTE = [
    {
        name: "Login",
        path: "/login",
        exact: true,
        component: Login,
        restricted: true,
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        exact: true,
        component: Dashboard,
        private: true,
    },
];
