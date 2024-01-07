import { Link } from "react-router-dom";
import "./FoodIcon.css";
import axios from "axios";
import { useState } from "react";

interface FoodIconParam {
  image: string;
  title: string;
  id: number;
}

function FoodIcon({ image, title, id }: FoodIconParam) {
  
  const handleClick = async (id: number) => {
    const api = axios.create({
      baseURL: `http://localhost:3000`
    })
   
    try {
      const response = await api.get(`/api/recipeinfo?id=${id}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error Fetching recipe info:", error);
    };
  
  }

  return (
    <div className="icon" onClick={()=>handleClick(id)}>
      <div className="image">
        <Link to="/foodPage">
          <img className="foodImage" src={image} />
        </Link>
      </div>
      <div className="recipe-name">
        <p className="recipeText">{title}</p>
      </div>
    </div>
  );
}


export default FoodIcon;
