import React from 'react'
import Header from './component/Header.jsx'
// import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import {Link,NavLink} from 'react-router-dom' //a tage refresh whole page so we use Link
function LayoutR() {
  
  return (
    <>
      {/* <Header/> */}
      <Header/>
      <Outlet/>
      {/* <Footer/> */}

    </>
  )
}

export default LayoutR