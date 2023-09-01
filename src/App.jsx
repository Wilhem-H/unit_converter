import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Header from "./pages/Header";

import ConvPoids from "./components/ConvPoids";
import ConvDist from "./components/ConvDist";
import ConvVol from "./components/ConvVol";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/convpoids" element={<ConvPoids />} />
          <Route path="/convdist" element={<ConvDist />} />
          <Route path="/convvol" element={<ConvVol />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
