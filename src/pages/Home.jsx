import scale from "/scales.svg";
import "./Home.css";

export default function Home() {
  return (
    <div className="homeContent">
      <h3>Welcome to our Unit Converte !</h3>
      <img src={scale} />
    </div>
  );
}
