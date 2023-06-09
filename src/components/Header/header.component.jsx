import Nav from '../Nav/nav.component'

import { MdKeyboardArrowRight } from 'react-icons/md'

import './header.styles.scss'

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="headerleft">
        <div className="text">
          <span className="white">do it for</span>
          <span className="orange">yourself</span>
        </div>
        <button className="joinbutton">
          join to us now <MdKeyboardArrowRight className="buttonicon" />
        </button>
      </div>
    </header>
  )
}

export default Header
