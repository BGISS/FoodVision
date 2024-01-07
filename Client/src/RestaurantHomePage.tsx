import BlurredElipse from "./components/Ellipse/BlurredElipse";
import { Link } from "react-router-dom";
import "./restaurant.css";

function RestaurantHomePage() {
  return (
    <>  
      <div className="restaurantHomePage">
        <div className="tagline">
          <p className="notmood">Not in a mood for cooking?</p>
          <p className="gotyou">We got you!</p>
        </div>


        <div className="info">
            <div className="budgetInfo">
                <p className="budgetText">What's your budget?</p>
                <input className = "budgetInput" placeholder = "Budget (USD)"/>
            </div>

            <div className="cuisineInfo">
                <p className="cuisineText">What cuisine would you like?</p>
                <input className = "cuisineInput" placeholder = "Cuisine (e.g Indian, Italian)"></input>
            </div>

            <div className="distanceInfo">
                <p className="distanceText">How far are you willing to travel?</p>
                <input className = "distanceInput" placeholder = "Distance (Miles)"></input>
            </div>
          
        </div>

        <div>
            <Link to="main">
                <button className="getstarted">Get Started</button>
            </Link>
        </div>
        
        
        <div className="ellipse">
            <BlurredElipse color="#FF7676" />
        </div>
      </div>
      
    </>
  );
}
export default RestaurantHomePage;
