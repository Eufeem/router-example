import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import FooterPers from './FooterPers'

const Layout = () => {
  return (
    <>
      <Navbar className='mb-2' />

      <div className="container mt-3 mb-3">

        <Outlet />
      </div>

      <FooterPers />
    </>

  )
}

export default Layout