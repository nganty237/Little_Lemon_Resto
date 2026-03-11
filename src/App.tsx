import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'

import Order from './pages/OrderOnline'
import Login from './pages/Login'


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Les routes about, menu, reservations redirigent vers Home avec l'ancre */}
          <Route path="/about" element={<Home />} />
          <Route path="/menu" element={<Home />} />
          <Route path="/reservations" element={<Home />} />
          
          {/* Les vraies pages séparées */}
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
