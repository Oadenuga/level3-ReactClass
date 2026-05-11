import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Landpage } from "./pages/Landpage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Newcomponent } from './Components/Newcomponet.jsx';
import Button from './Components/props.jsx'
import Images  from './Components/Images.jsx';
import image1 from './assets/bg-header-sqi-1.png'
import image2 from './assets/certificate 3.jpg'
import image3 from './assets/college 1.jpg'



import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>
)
