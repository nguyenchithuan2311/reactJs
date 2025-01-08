import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Title from './Titile.jsx'
import Button from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title/>
    <Button/>
  </StrictMode>,
)
