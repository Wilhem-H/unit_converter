import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ConvPoids from "./components/ConvPoids";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/convpoids" element={<ConvPoids />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
