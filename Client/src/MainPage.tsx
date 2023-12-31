import BlurredElipse from "./components/Ellipse/BlurredElipse";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchBar from "./components/Searchbar/SearchBar";
import FoodIcon from "./components/FoodIcon/FoodIcon";

function MainPage() {
  return (
    <>
      <div>
        <SearchBar />
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
