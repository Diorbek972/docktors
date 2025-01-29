//css
import './App.css'
//botstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//componentalar
import NavbarSection from './components/NavbarSection';
import NavbarHead from './components/NavbarHead';
import LeadingMedisine from './components/LeadingMedisine';
import Leading from './components/Leading';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import GetTouch from './components/GetTouch';

function App() {


  return (
    <>
     <div className="bacrasm">
     <NavbarSection/>
     <NavbarHead/>
     </div>
     <LeadingMedisine/>
     <Leading/>
     <FAQ/>
     <Pricing/>
    <div className="bacround-black"> <GetTouch /></div>
    </>
  )
}

export default App
