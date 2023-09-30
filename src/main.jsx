import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Countries from './components/Countries/Countries.jsx';
import About from './components/About/About.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import CountryDetail from './components/CountryDetail/CountryDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'countries',
        element: <Countries></Countries>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: "country/:countryCca3",
        element: <CountryDetail></CountryDetail>,
        loader: ({ params }) => fetch(`https://restcountries.com/v3.1/all/${params.countryCca3}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
