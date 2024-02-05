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
import LogoCloud2 from '../../Components/LogoCloud2'
import HeroLanding2 from '../../Components/HeroLanding2'


function LandingPage() {

  

  return (
    <DefaultLayout>

      {/* HeroLanding */}
      {/* <HeroLanding /> */}
      <HeroLanding2 />
      {/* HeroLanding */}

      {/* AboutUsLanding */}
      <AboutUsLanding/>
      {/* AboutUsLanding */}

      {/* CorporateLanding */}
      <CorporateResponsibilityLanding/>
      {/* CorporateLanding */}

      {/* StatboardLanding */}
      <StatsboardLanding/>
      {/* StatboardLanding */}

      {/* GalleryLanding */}
      <GalleryLanding/>
      {/* GalleryLanding */}

      {/* LogoCloudLanding */}
      <LogoCloud/>
      {/* LogoCloudLanding */}

      {/* LogoCloud2Landing */}
      <LogoCloud2 />
      {/* LogoCloud2Landing */}
      
    </DefaultLayout>
  )
}

export default LandingPage
