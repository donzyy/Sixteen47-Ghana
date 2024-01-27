import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Footer2 from '../Components/Footer2'
import Footer3 from '../Components/Footer3'

const DefaultLayout = ({children}) => {
  return (
    <>
    <Header />
    <div> {children} </div>
    <Footer3 />
    </>
  )
}

export default DefaultLayout

