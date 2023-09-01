import { Link } from "react-router-dom";
import "./HomeHeader.css";

export default function Header() {
  return (
    <header>
      <div className="titreHeader">
        <Link to="/">
          <h1 className="h1Header">Unit Converter</h1>
        </Link>
        <div className="navbarHeader">
          <Link to="/convpoids">
            <button>
              <h2 className="h2Button">Weight</h2>
            </button>
          </Link>
          <Link to="/convdist">
            <button>
              <h2 className="h2Button">Distance</h2>
            </button>
          </Link>
          <Link to="/convvol">
            <button>
              <h2 className="h2Button">Volume</h2>
            </button>
          </Link>
          <Link to="/convtemp">
            <button>
              <h2 className="h2Button">Temperature</h2>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
