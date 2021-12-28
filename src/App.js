import Nav from "./components.js/Nav";
import About from "./components.js/About";
import Tech from "./components.js/Tech";
import { render } from "react-dom";
import Projects from "./components.js/Projects";
import Contact from "./components.js/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
          <Nav />
            <div className="content">
              <Routes>
                <Route path='/' element={<About />} />
                <Route path='technologies' element={<Tech />} />
                <Route path='projects' element={<Projects />} />
                <Route path='contact' element={<Contact />} />
              </Routes>
            </div>
        </div>
      </Router>
  );
}

export default App;
