import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Border from './Tic-toe/Border.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Border />
  </StrictMode>,
)
