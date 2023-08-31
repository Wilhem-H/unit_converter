import { Link } from "react-router-dom";

export default function Home() {
  return (
    <body>
      <div>
        <p>page d&apos;acceuil</p>
        <Link to="/convpoids">
          <button>Poids</button>
        </Link>
      </div>
    </body>
  );
}
