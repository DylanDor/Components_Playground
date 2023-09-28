import './App.css'
import { AkindCard } from './components/Cards/AkindCard/AkindCard'
import { Counter } from './components/Counter/Counter'
import { AkindNavbar } from './components/Navbar/AkindNavbar/AkindNavbar'

function App() {

  return (
  <div className="main_container">
    <AkindNavbar />
    <AkindCard />
    <Counter />
  </div>
  )
}

export default App
