import BlurredElipse from "./components/Ellipse/BlurredElipse";
import { Link } from "react-router-dom";
import "./restaurant.css";
import React, { useState } from "react";
import CurrentLocation from "./components/Location/CurrentLocation";


function RestaurantHomePage() {

    // State variables to store user input
  const [budget, setBudget] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const {latitude,longitude}=CurrentLocation();

  const handleGetStarted = () => {
    console.log("Budget:", budget);
    console.log("Cuisine:", cuisine);
    console.log("Distance:", distance);
    console.log("User Latitude:", latitude);
    console.log("User Longitude:", longitude);
  }

  return (
    <>  
      <div className="restaurantHomePage">
        <div className="tagline">
          <p className="notmood">Not in a mood for cooking?</p>
          <p className="gotyou">We got you!</p>
        </div>


        <div>
            <div className="info">
                <div className="budgetInfo">
                    <p className="budgetText">What's your budget?</p>
                    <input className = "budgetInput" placeholder = "Budget (USD)" value = {budget} onChange={(event)=> setBudget(event.target.value)}/>  
                    {/* event.target.value extracts the new value entered by the user from the event object. */}
                </div>

              <div className="cuisineInfo">
                  <p className="cuisineText">What cuisine would you like?</p>
                  <input className = "cuisineInput" placeholder = "Cuisine (e.g Indian, Italian)"></input>
              </div>
                <div className="cuisineInfo">
                    <p className="cuisineText">What cuisine would you like?</p>
                    <input className = "cuisineInput" placeholder = "Cuisine (e.g Indian, Italian)" value = {cuisine} onChange={(event)=> setCuisine(event.target.value)}></input>
                </div>

                <div className="distanceInfo">
                    <p className="distanceText">How far are you willing to travel?</p>
                    <input className = "distanceInput" placeholder = "Distance (Miles)" value = {distance} onChange={(event)=> setDistance(event.target.value)}></input>
                </div>
            </div>

            <div>
                <Link to="main">
                    <button className="getstarted" onClick={handleGetStarted}>Get Started</button>
                </Link>
            </div>
        </div>

          <div className="restaurantContainer">

          </div>
        </div>

        
        
        
        <div className="ellipse">
            <BlurredElipse color="#FF7676" />
        </div>

      </div>
      
    </>
  );
}
export default RestaurantHomePage;
