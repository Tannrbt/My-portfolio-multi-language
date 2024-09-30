import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./style.css"
import "./i18n"
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Portfolio />
        <Footer />
      </div>
    </>
  )
}

export default App
