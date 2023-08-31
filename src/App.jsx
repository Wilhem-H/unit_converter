import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

import ConvPoids from "./components/ConvPoids";
import ConvDist from "./components/ConvDist";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/convpoids" element={<ConvPoids />} />
          <Route path="/convdist" element={<ConvDist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
