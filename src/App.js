import './index.css';
import Navbar from './compornts/NaveBar'
import Home from './compornts/Home'
import SocialLinks from './compornts/SocialLinks'
import About from './compornts/About';
import Protfolio from './compornts/Protfolio'
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Protfolio />
      
    </div>
  );
}

export default App;
