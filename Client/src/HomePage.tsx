import BlurredElipse from "./components/Ellipse/BlurredElipse";
import { Link } from "react-router-dom";
import "./home.css";
function HomePage() {
  return (
    <>
      <div className="navbar">
        <h1 className="foodVision">FoodVision</h1>
        <a className="about" href="#aboutPage">About</a>
        <Link to="main">
          <button className="getstarted">Get Started</button>
        </Link>

      </div>
      
      <div className="homePage">
        <div className="text">
          <p className="ingredients">From ingredients to full meal.</p>
          <p className="pantry">
            Tell us what’s in your pantry and fridge and we’ll make your next
            meal.
          </p>
        </div>
        <div className="ellipses">
          <div className="ellipse1">
            <BlurredElipse color="#37C592" />
          </div>
          <div className="ellipse2">
            <BlurredElipse color="#D376FF" />
          </div>
        </div>
      </div>
      <div id="aboutPage">
        <p className="first">With FoodVision, even the least experienced of chefs can make a meal out of nothing.</p>
        <p className="second">Everything’s a cycle. You open your fridge. You don’t know what to cook. You buy new ingredients. Whatever was in the fridge goes bad. Rinse and repeat.</p>
        <p className="third">FoodVision was created by 4 college students that, like many, struggled to make do with what they had. FoodVision was designed to help us, and others, to reduce food waste.</p>
      </div>
    </>
  );
}
export default HomePage;
