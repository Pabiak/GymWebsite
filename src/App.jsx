import './App.scss'
import Header from './components/Header/header.component'
import Info from './components/Info/Info.component'
import Prices from './components/Prices/Prices.component'
import Team from './components/Team/team.component'
import Contact from './components/Contact/Contact.component'

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <Team />
      <Prices />
      <Contact />
    </>
  )
}

export default App
