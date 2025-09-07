import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Top from './pages/Top'
import Profile from './pages/Profile'
import Works from './pages/Works'
import Contact from './pages/Contact'
import './styles/reset.css'
import './styles/common.css'

function ContentWrapper() {
  const location = useLocation()

  // パスに応じたクラス名を決定
  const getPageClass = () => {
    const path = location.pathname.replace(/\/$/, '') || '/'
    switch (path) {
      case '/':
        return 'top'
      case '/profile':
        return 'profile'
      case '/works':
        return 'works'
      case '/contact':
        return 'contact'
      default:
        return ''
    }
  }

  return (
    <div id="content-wrapper" className={getPageClass()} key={location.pathname}>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ContentWrapper />
    </Router>
  )
}

export default App
