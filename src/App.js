import Nav from "./components.js/Nav";
import About from "./components.js/About";
import Tech from "./components.js/Tech";
import { render } from "react-dom";
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
              </Routes>
            </div>
        </div>
      </Router>
  );
}

export default App;
