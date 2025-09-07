import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={isOpen ? 'open' : ''}>
      <nav>
        <div className="sp-icon" onClick={toggleMenu}>
          <div className="sp-icon-wrap">
            <span></span>
            <span></span>
          </div>
        </div>
        <ul>
          <li className="top-link"><Link to="/">TOP</Link></li>
          <li className="profile-link"><Link to="/profile">ABOUT ME</Link></li>
          <li className="works-link"><Link to="/works">WORKS</Link></li>
          <li className="contact-link"><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header