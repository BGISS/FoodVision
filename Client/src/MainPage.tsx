import SearchAndDisplayRecipes from "./components/SearchAndDisplayRecipes/SearchAndDisplayRecipes";
import "./mainPage.css";
function MainPage() {
  return (
    <>
      <div className="search-display">
        <SearchAndDisplayRecipes></SearchAndDisplayRecipes>
      </div>
      <div className="foodIcon"></div>
    </>
  );
}

export default MainPage;
