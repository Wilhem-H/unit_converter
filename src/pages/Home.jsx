import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Unit Converter</h1>
      <p>page d&apos;acceuil</p>
      <Link to="/convpoids">
        <button>Poids</button>
      </Link>
      <Link to="/convdist">
        <button>Distance</button>
      </Link>
    </div>
  );
}
