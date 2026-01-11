import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import Login from './Login.jsx'
import Signup from "./Signup.jsx";
import Courses from './Courses.jsx'
import Subjects from './Subjects.jsx'
import Degrees from './Degrees.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/'/>
        <Route element={<Login />} path='/login'/>
        <Route element={<Signup />} path='/signup'/>
        <Route element={<Courses />} path='/courses'/>
        <Route element={<Subjects />} path='/subjects'/>
        <Route element={<Degrees />} path='/degrees'/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
