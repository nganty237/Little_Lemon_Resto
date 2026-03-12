import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Order from './pages/OrderOnline'
import Login from './pages/Login'
import Reservation from './pages/Reservation'


function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Les routes about, menu, reservations redirigent vers Home avec l'ancre */}
          <Route path="/about" element={<Home />} />
          <Route path="/menu" element={<Home />} />
          <Route path="/reservations" element={<Reservation />} />
          
          {/* Les vraies pages séparées */}
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
