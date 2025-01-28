//css
import './App.css'
//botstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//componentalar
import NavbarSection from './components/NavbarSection';
import NavbarHead from './components/NavbarHead';
import LeadingMedisine from './components/LeadingMedisine';
import Leading from './components/Leading';

function App() {


  return (
    <>
     <div className="bacrasm">
     <NavbarSection/>
     <NavbarHead/>
     </div>
     <LeadingMedisine/>
     <Leading/>
    </>
  )
}

export default App
