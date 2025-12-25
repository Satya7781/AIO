import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Culture from './pages/Culture';
import Careers from './pages/Careers';
import Team from './pages/Team';
import Alliances from './pages/Alliances';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alliances" element={<Alliances />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
