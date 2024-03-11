import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Tengah from "./pages/tengah.jsx";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Contact from "./pages/contact.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  
  {
    path: "contact",
    element: <Contact />
  }

])


ReactDOM.createRoot(document.getElementById("tengah")).render(
  <React.StrictMode>
    <Tengah />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('card')).render(
  <RouterProvider router={router} />
)
