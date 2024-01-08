import BlurredElipse from "./components/Ellipse/BlurredElipse";
import { Link } from "react-router-dom";
import "./restaurant.css";
import axios from "axios";
import React, { useState } from "react";
import CurrentLocation from "./components/Location/CurrentLocation";


function RestaurantHomePage() {

  const api = axios.create({
    baseURL: `http://localhost:3000`
  })
  
    // State variables to store user input
  const [budget, setBudget] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const {latitude,longitude}=CurrentLocation();
  const [backendData, setBackendData] = useState(null);

   //api call to our express server
  const getResto = async () =>{
    try {
      const response = await api.get(`/api/restaurant?budget=${budget}&cuisine=${cuisine}&distance=${distance}&latitude=${latitude}&longitude=${longitude}`);
      setBackendData(response.data);

    } catch (error) {
      console.error("Error Fetching restaurant data:", error);
    }
  }


  const handleGetStarted = () => {
    // console.log("Budget:", budget);
    // console.log("Cuisine:", cuisine);
    // console.log("Distance:", distance);
    // console.log("User Latitude:", latitude);
    // console.log("User Longitude:", longitude);

   getResto();

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
                    <input className = "cuisineInput" placeholder = "Cuisine (e.g Indian, Italian)" value = {cuisine} onChange={(event)=> setCuisine(event.target.value)}></input>
                </div>

                <div className="distanceInfo">
                    <p className="distanceText">How far are you willing to travel?</p>
                    <input className = "distanceInput" placeholder = "Distance (Miles)" value = {distance} onChange={(event)=> setDistance(event.target.value)}></input>
                </div>
            </div>

            <div>
              <button className="getstarted" onClick={handleGetStarted}>Get Started</button>
            </div>
        </div>

          <div className="restaurantContainer">

          </div>
        </div>

        
        
        
        <div className="ellipse">
            <BlurredElipse color="#FF7676" />
        </div>
      
    </>
  );
}
export default RestaurantHomePage;
