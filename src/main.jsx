import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Tengah from "./pages/tengah.jsx"


ReactDOM.createRoot(document.getElementById("tengah")).render(
  <React.StrictMode>
    <Tengah />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('card')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
