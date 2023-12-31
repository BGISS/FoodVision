import BlurredElipse from "./components/Ellipse/BlurredElipse";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchBar from "./components/SearchAndDisplayRecipes/SearchAndDisplayRecipes";
import FoodIcon from "./components/FoodIcon/FoodIcon";
import SearchAndDisplayRecipes from "./components/SearchAndDisplayRecipes/SearchAndDisplayRecipes";

function MainPage() {
  return (
    <>
      <div>
        <SearchAndDisplayRecipes></SearchAndDisplayRecipes>
      </div>
      <div className="ellipse1">
        <BlurredElipse color="blue" />
      </div>
      <div className = "foodIcon">
      </div>
    </>
  );
}

export default MainPage;
