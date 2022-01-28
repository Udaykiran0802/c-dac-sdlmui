import {Link} from 'react-router-dom'





import { FiLogIn } from "react-icons/fi";
import { SiGnuprivacyguard } from "react-icons/si"

import './index.css'

const Header = props => {
  
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
        
          <h1 className = "nav-bar-heading">Secure Device Lifecycle Management (SDLMUI)</h1>
         
          <ul className="nav-bar-mobile-icons-container">
            
            <li>
              <Link to="/register">
                <SiGnuprivacyguard className="nav-items-mobile-link" />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FiLogIn className="nav-items-mobile-link" />
              </Link>
            </li>
            <li>
             
            </li>
          </ul>
        </div>
        <div className="nav-bar-large-container">
        
          <h1 className = "nav-bar-heading" >Software Development Lifecycle Methodology (SDLMUI)</h1>
    
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cards" className="nav-link">
                cards
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    
  )
}
export default Header
