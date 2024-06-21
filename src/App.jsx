import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutR from './LayoutR'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {
      path:'/',
      element:<LayoutR/>,
      children:[{path:"",element:<Home/>},{path:"about",element:<About/>},{path:"contact",element:<Contact/>}]
    }
  ])
  return (

       <RouterProvider router={router}/>
  
  )
}

export default App
