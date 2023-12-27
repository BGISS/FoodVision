import BlurredElipse from "./components/BlurredElipse";
import { Link } from "react-router-dom";
import "./home.css";
function HomePage() {
  return (
    <>
      <h1>FOODVISION</h1>
      <div className="about">
        <p>About</p>
      </div>
      <div className="ellipse1">
        <BlurredElipse color="#37C592" />
      </div>
      <div className="text">
        <p className="ingredients">From ingredients to full meal.</p>
        <p className="pantry">
          Tell us what’s in your pantry and fridge and we’ll make your next
          meal.
        </p>
      </div>
      <div className="ellipse2">
        <BlurredElipse color="#D376FF" />
      </div>
      <div className="bttn">
        <Link to="main">
          <button className="getstarted">Get Started</button>
        </Link>
      </div>
    </>
  );
}
export default HomePage;
