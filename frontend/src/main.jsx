import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Shop from './pages/Home/home.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shop />
  </StrictMode>,
)
