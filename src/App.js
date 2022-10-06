import './index.css';
import Navbar from './compornts/NaveBar'
import Home from './compornts/Home'
import SocialLinks from './compornts/SocialLinks'
import About from './compornts/About';
import Protfolio from './compornts/Protfolio'
import Experience from './compornts/Experience'
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Protfolio />
      <Experience />
      
      
    </div>
  );
}

export default App;
