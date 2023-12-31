import SearchBar from "../SearchBar/SearchBar";
import FoodIcon from "../FoodIcon/FoodIcon";
import { useState } from "react";

function ImageDisplay() {
  const [recipeData, setRecipeData] = useState(null);

  return (
    <div>
      <SearchBar />
    </div>
  );
}
