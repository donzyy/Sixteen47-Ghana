import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const DefaultLayout = ({children}) => {
  return (
    <>
    <Header />
    <div> {children} </div>
    <Footer />
    </>
  )
}

export default DefaultLayout

