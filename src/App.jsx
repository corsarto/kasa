import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Error from './pages/Error/Error'
import Footer from './components/Footer/Footer'
import Location from './pages/Location/Location'
import './assets/style/main.scss'
import '../src/components/Header/header.scss'
import '../src/components/Footer/footer.scss'
import '../src/components/Banner/banner.scss'
import '../src/components/Card/card.scss'
import '../src/pages/About/about.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/id?" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
