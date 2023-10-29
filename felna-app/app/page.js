import React from 'react'
import Header from './components/Header/page'
import Navbar from './components/Navbar/navbar'

const Page = () => {
  return (
    <div>
      {/* ====== Header Start ===== */}
      <Header/>
      {/* ====== Header End ===== */}
      {/* ==== Navbar Start ==== */}
      <Navbar/>
      {/* ==== Navbar End ==== */}
    </div>
  )
}

export default Page
