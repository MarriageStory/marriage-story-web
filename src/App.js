import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import { PublicRoute, PrivateRoute } from './routes/Routes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute>
          <Login />
        </PublicRoute>} />
          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
