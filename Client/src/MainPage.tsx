import SearchAndDisplayRecipes from "./components/SearchAndDisplayRecipes/SearchAndDisplayRecipes";
import BlurredElipse from "./components/Ellipse/BlurredElipse";
import "./mainPage.css";
function MainPage() {
  return (
    <>
      <div className="fullDisplay">
        <SearchAndDisplayRecipes></SearchAndDisplayRecipes>
      </div>
      <div className="ellipses">
          <div className="ellipse1">
            <BlurredElipse color="#37C592" />
          </div>
          <div className="ellipse2">
            <BlurredElipse color="#D376FF" />
          </div>
        </div>
    </>
  );
}

export default MainPage;
