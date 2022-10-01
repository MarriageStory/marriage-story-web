import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import { PublicRoute, PrivateRoute } from './routes/Routes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute>
          <Login />
        </PublicRoute>} />
        <Route path="/signup" element={<PublicRoute>
          <Signup />
        </PublicRoute>} />
          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
