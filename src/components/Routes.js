/*
    Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login, restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
*/

import Login from ".././pages/login/Login";
import Dashboard from ".././pages/dashboard/Dashboard";
import Clients from ".././pages/clients/Clients";
import Analytics from ".././pages/analytics/Analytics";
import Profile from ".././pages/profile/Profile";

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
    {
        name: "Clients",
        path: "/clients",
        exact: true,
        component: Clients,
        private: true,
    },
    {
        name: "Analytics",
        path: "/analytics",
        exact: true,
        component: Analytics,
        private: true,
    },
    {
        name: "Profile",
        path: "/profile",
        exact: true,
        component: Profile,
        private: true,
    },
];
