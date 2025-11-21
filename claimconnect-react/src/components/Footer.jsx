import { memo } from 'react'
import { Link } from 'react-router-dom'

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3 className="brand-name">ClaimConnect</h3>
              <p className="footer-description">Connecting injured Australians with qualified personal injury lawyers nationwide.</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/motor-vehicle-accidents">Motor Vehicle Accidents</Link></li>
              <li><Link to="/workplace-injuries">Workplace Injuries</Link></li>
              <li><Link to="/medical-malpractice">Medical Malpractice</Link></li>
              <li><Link to="/slip-fall-accidents">Slip & Fall</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <p>📞 1800-CLAIM-NOW</p>
              <p>✉️ help@claimconnect.com.au</p>
              <p>🕒 Available 24/7</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; 2024 ClaimConnect. All rights reserved.</p>
          <p className="disclaimer">This website does not provide legal advice. ClaimConnect is a lead generation service that connects potential clients with qualified legal professionals.</p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer