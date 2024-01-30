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


function App() {
 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="aboutus" element={<AboutUs /> } />
        <Route path="contactus" element={<ContactUs /> } />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<NewsMain/>} /> 
        <Route path="/newsdetail" element={<NewsDetails/>} />
        

        <Route path="*" element = {< NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
