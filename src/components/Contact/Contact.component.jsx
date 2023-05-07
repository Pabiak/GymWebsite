import { BsTelephoneFill } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'

import './Contact.styles.scss'

const Contact = () => {
  return (
    <div className="contactwrapper">
      <div className="content">
        <div className="contacttext">
          <span className="white">contact with&nbsp;</span>
          <span className="orange">us</span>
        </div>
        <div className="contactdetails">
          <div>
            <BsTelephoneFill className="phone" />
            +48 123 123 123
          </div>
          <div>
            <MdAlternateEmail className="mail" />
            kontakt@gympower.com
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
