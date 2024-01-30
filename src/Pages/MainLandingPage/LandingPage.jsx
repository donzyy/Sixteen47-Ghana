import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { Link } from 'react-router-dom'
import LogoCloud from '../../Components/LogoCloud'
import FAQ2 from '../FAQ/FAQ2'
import AboutUsLanding from '../../Components/AboutUsLanding'
import StatsboardLanding from '../../Components/StatsboardLanding'
import GalleryLanding from '../../Components/GalleryLanding'
import CorporateResponsibilityLanding from '../../Components/CorporateResponsibilityLanding'
import HeroLanding from '../../Components/HeroLanding'
import NewsLanding from '../../Components/NewsLanding'


function LandingPage() {

  

  return (
    <DefaultLayout>

    {/* Hero Section */}
      <HeroLanding />
    {/* Hero Section */}

    {/* Corporate Responsibility Landing */}
    <CorporateResponsibilityLanding />
    {/* Corporate Responsibility Landing */}

    {/* Gallery Section */}
    <GalleryLanding /> 
    {/* Gallery Section */}

    {/* Stat Board */}
    <StatsboardLanding/>
    {/* Stat Board */}

      {/* About Us Landing */}
      <AboutUsLanding />
      {/* About Us Landing */}

      {/* FAQ */}
      {/* <FAQ2/> */}
      {/* FAQ */}

      {/* LogoCloud */}
      <LogoCloud />
      {/* LogoCloud */}

      {/*  */}
      <NewsLanding/>
      {/*  */}
   
    </DefaultLayout>
  )
}

export default LandingPage
