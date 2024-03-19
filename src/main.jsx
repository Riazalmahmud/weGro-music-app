import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeComponent from './component/HomeComponet/HomeComponent';
import LoginComponent from './component/AuthenticationComponent/loginComponent/LoginComponent.jsx';
import RegistrationComponent from './component/AuthenticationComponent/RegistrationComponent/RegistrationComponent.jsx';
import AuthProvider from './Provider/AuthProvider';
import MusicDetailsComponent from './component/all-music/MusicDetails/MusicDetailsComponent.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomeComponent/>,
      },
      {
        path: "detailsMusic/:id",
        element: <MusicDetailsComponent/>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginComponent/>,
  },
  {
    path: "/register",
    element: <RegistrationComponent/>,
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
