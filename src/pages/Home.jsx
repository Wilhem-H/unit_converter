import { Link } from "react-router-dom";

export default function Home() {
  return (
<<<<<<< HEAD
    <body>
      <div>
        <p>page d&apos;acceuil</p>
        <Link to="/convpoids">
          <button>Poids</button>
        </Link>
      </div>
    </body>
=======
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
>>>>>>> 28a939d (add multiselect in dist function)
  );
}
