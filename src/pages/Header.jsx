import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Unit Converter</h1>
        </Link>
        <Link to="/convpoids">
          <button>Poids</button>
        </Link>
        <Link to="/convdist">
          <button>Distance</button>
        </Link>
      </div>
    </header>
  );
}
