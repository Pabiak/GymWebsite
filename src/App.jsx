import Header from './components/Header/header.component'
import Info from './components/Info/Info.component'
import Prices from './components/Prices/Prices.component'
import Team from './components/Team/team.component'
import Contact from './components/Contact/Contact.component'
import Footer from './components/Footer/Footer.component'

import './App.scss'

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <Team />
      <Prices />
      <Contact />
      <Footer />
    </>
  )
}

export default App
