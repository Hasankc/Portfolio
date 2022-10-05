import './index.css';
import Navbar from './compornts/NaveBar'
import Home from './compornts/Home'
import SocialLinks from './compornts/SocialLinks'
import About from './compornts/About';
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
    </div>
  );
}

export default App;
