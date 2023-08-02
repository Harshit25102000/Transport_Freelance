import About from "./Component/About";
import Contact from "./Component/Contact";
import Displyimg from "./Component/Displyimg";
import Feet from "./Component/Feet";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      < Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Feet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/images" element={<Displyimg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
