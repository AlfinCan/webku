import { Routes, Route } from "react-router-dom"

import NavCom from "./components/NavCom"
import FooterCom from "./components/FooterCom"

import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import TestimonialPage from "./pages/TestimonialPage"
import FaqPage from "./pages/FaqPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"




function App() {
  return (
  <div>
    <NavCom />

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/kelas" Component={KelasPage} />
      <Route path="/testimonial" Component={TestimonialPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/syaratketen" Component={SyaratKetenPage} />
    </Routes>

    <FooterCom />
  </div>
  )
}

export default App
