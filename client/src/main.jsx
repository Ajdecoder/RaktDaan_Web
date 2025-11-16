import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RaktDaanProvider } from './context/RaktDaanContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RaktDaanProvider>
      <App />
    </RaktDaanProvider>
  </StrictMode>,
)
