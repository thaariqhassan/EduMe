import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import Login from './Login.jsx'
import Signup from "./Signup.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/'/>
        <Route element={<Login />} path='/login'/>
        <Route element={<Signup />} path='/signup'/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
