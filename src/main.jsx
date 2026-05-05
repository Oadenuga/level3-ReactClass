import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Landpage } from "./pages/Landpage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Newcomponent } from './Components/Newcomponet.jsx';

// import Buttons from "./Components/buttons.jsx"
// import StaticExample from './Components/Modal.jsx';
// import Example from './Components/Modal2.jsx';
// import { Hero2 } from './Components/Hero2.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Newcomponent />
      {/* <Landpage /> */}
  </StrictMode>,
)
