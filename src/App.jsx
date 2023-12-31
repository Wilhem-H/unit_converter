import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Header from "./pages/Header";

import ConvPoids from "./components/ConvPoids";
import ConvDist from "./components/ConvDist";
import ConvVol from "./components/ConvVol";
import ConvTemp from "./components/ConvTemp";

function App() {
  return (
    <div className="divApp">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/convpoids" element={<ConvPoids />} />
          <Route path="/convdist" element={<ConvDist />} />
          <Route path="/convvol" element={<ConvVol />} />
          <Route path="/convtemp" element={<ConvTemp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
