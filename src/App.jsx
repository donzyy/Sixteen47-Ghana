import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound/NotFound"
import LandingPage from "./Pages/MainLandingPage/LandingPage"
import ContactUs from "./Pages/ContactUs/ContactUs"
import AboutUs from "./Pages/AboutUs/AboutUs"


function App() {
 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="aboutus" element={<AboutUs /> } />
        <Route path="contactus" element={<ContactUs /> } />
        

        <Route path="*" element = {< NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
