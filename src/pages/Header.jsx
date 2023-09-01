import { Link } from "react-router-dom";
import "./HomeHeader.css";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Unit Converter</h1>
        </Link>
        <Link to="/convpoids">
          <button>weight</button>
        </Link>
        <Link to="/convdist">
          <button>Distance</button>
        </Link>
      </div>
    </header>
  );
}
