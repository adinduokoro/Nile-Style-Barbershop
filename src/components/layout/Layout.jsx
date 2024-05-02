import React from 'react'
import styles from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import {Footer } from "../../components"


const Layout = () => {
  return (
    <div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout