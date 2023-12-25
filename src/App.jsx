import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound/NotFound"
import LandingPage from "./Pages/MainLandingPage/LandingPage"
import ContactUs from "./Pages/ContactUs/ContactUs"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Gallery from "./Pages/Gallery/Gallery"
import FAQ from "./Pages/FAQ/FAQ"


function App() {
 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="aboutus" element={<AboutUs /> } />
        <Route path="contactus" element={<ContactUs /> } />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="*" element = {< NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
