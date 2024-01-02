import SearchBar from "../SearchBar/SearchBar";
import FoodIcon from "../FoodIcon/FoodIcon";

import { useState } from "react";
import "./SearchAndDisplayRecipes.css";

function SearchAndDisplayRecipes() {
  const { render, backendData } = SearchBar();
  //console.log(backendData);
  //const {results}=backendData
  //monn met ts.ignore ici acz mpa ley fix zafr la for mais bzn fix li
  //@ts-ignore
  const results = backendData?.results || [];

  return (
    <>
      <div className="search-display">
        {render}
        <ul className="image-display">
          {results.map((item: any, index: any) => (
            <li key={index}>
              <FoodIcon
                image={String(item.image)}
                title={String(item.title)}
              ></FoodIcon>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchAndDisplayRecipes;
