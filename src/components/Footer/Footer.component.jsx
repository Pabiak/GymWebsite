import './Footer.styles.scss'

const Footer = () => {
  return (
    <div className="footerwrapper">
      <div className="footertext">
        <span className="white">gym</span>
        <span className="orange">power</span>
      </div>
      <div className="footerbottom">
        <div className="clientswrapper">
          <span className="footercategory">Client</span>
          <a href="#" className="footerlink">
            Form to fill
          </a>
          <a href="#" className="footerlink">
            Help for clients
          </a>
          <a href="#" className="footerlink">
            Gym rules
          </a>
        </div>
        <div className="footercontactwrapper">
          <span className="footercategory">Contact</span>
          <a href="#" className="footerlink">
            +48 123 123 123
          </a>
          <a href="#" className="footerlink">
            kontakt@gympower.com
          </a>
        </div>
        <div className="privacywrapper">
          <span className="footercategory">Privacy</span>
          <a href="#" className="footerlink">
            RODO
          </a>
          <a href="#" className="footerlink">
            Terms of use
          </a>
        </div>
        <div className="otherswrapper">
          <span className="footercategory">Other</span>
          <a href="#" className="footerlink">
            Icons by React icons
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
