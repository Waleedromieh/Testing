import './App.css'
import About from './Components/About/About';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import Layout from './Components/Layout/Layout';
import { Children } from 'react';
import Parent from './Components/Parent/Parent';
import Web from './Components/Web/Web';
import Mobile from './Components/Mobile/Mobile';
import Notfound from './Components/Notfound/Notfound';


let x= createBrowserRouter([
  {path:'' ,element: <Layout/> ,children:[
    {index:true , element: <Home/>},
    {path:'about' , element: <About/>},
    {path:'gallery' , element: <Gallery/>,children:[
      {path:'web',element:<Web/>},
      {path:'Mobile',element:<Mobile/>},
    ]},
    {path:'parent' , element: <Parent/>},
    {path:'*' , element: <Notfound/>},
  ]}, 

])


function App() {

  return <RouterProvider router={x}></RouterProvider>
}

export default App
