import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound/NotFound"
import LandingPage from "./Pages/MainLandingPage/LandingPage"
import ContactUs from "./Pages/ContactUs/ContactUs"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Gallery from "./Pages/Gallery/Gallery"
import FAQ from "./Pages/FAQ/FAQ"
import NewsMain from "./Pages/News/NewsMain"
import NewsDetails from "./Pages/News/NewsDetails"
import CorporateResponsibility from "./Pages/CorporateResponsibility/CorporateResponsibility"
import Team from "./Pages/Team/Team"
import GetQuote from "./Pages/GetQuote/GetQuote"
import Future from "./Pages/FutureOfSixteen47/Future"
import NewsDetails2 from "./Pages/News/NewsDetails2"
import NewsMain2 from "./Pages/News/NewsMain2"


function App() {
 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs /> } />
        <Route path="/contactus" element={<ContactUs /> } />
        {/* <Route path="/faq" element={<FAQ />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<NewsMain2/>} /> 
        <Route path="/newsdetail/:id" element={<NewsDetails2/>} />
        <Route path="/corporateresponsibility" element={<CorporateResponsibility/>}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/quote" element={<GetQuote />}/>
        <Route path="/future" element= {<Future />} />
        

        <Route path="*" element = {< NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
