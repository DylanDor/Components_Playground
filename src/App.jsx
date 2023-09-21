import './App.css'
import { AkindCard } from './components/Cards/AkindCard/AkindCard'
import { AkindNavbar } from './components/Navbar/AkindNavbar/AkindNavbar'

function App() {

  return (
  <div className="main_container">
    <AkindNavbar />
    <AkindCard />
  </div>
  )
}

export default App
