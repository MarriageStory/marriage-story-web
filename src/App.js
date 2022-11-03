import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes/Routes'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Appbar from './components/ResponsiveAppBar'
import Client from "./pages/clients/Clients";
import Analytics from "./pages/analytics/Analytics";
import Profile from "./pages/profile/Profile";
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>}
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Appbar />
                <Dashboard />
              </PrivateRoute>} />
          <Route
            path="/clients"
            element={
              <PrivateRoute>
                <Appbar />
                <Client />
              </PrivateRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <PrivateRoute>
                <Appbar />
                <Analytics />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Appbar />
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
