import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Login from './pages/login/Login'
import Navigator from './components/Navigator'
import Paperbase from './components/Paperbase'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Login /> */}
        < Navigator />
        <Paperbase />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
