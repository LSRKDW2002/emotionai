import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MotionAI from './Pages/Emotion';
import About from './Pages/AboutUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motion-ai" element={<MotionAI />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
