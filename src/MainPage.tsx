import BlurredElipse from "./components/Ellipse/BlurredElipse";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchBar from "./components/Searchbar/SearchBar";

function MainPage() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className="ellipse1">
        <BlurredElipse color="blue" />
      </div>
    </>
  );
}

export default MainPage;
