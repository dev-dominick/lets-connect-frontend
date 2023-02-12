import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'

function App() {


  return (
    <div className="routesContainer">
        <Routes>
          <Route path="/" element={< Home />} />
          {/* <Route path="/about" element={< About />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/contact" element={< Contact />} /> */}
        </Routes>
    </div>
  );
}

export default App;