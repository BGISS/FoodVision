import SearchBar from "../SearchBar/SearchBar";
import FoodIcon from "../FoodIcon/FoodIcon";
import "./SearchAndDisplayRecipes.css";

function SearchAndDisplayRecipes() {
  const { render, backendData } = SearchBar();
  //@ts-ignore
  const results = backendData?.results || [];
  console.log(results);
  return (
    <>
      <div className="search-display">
        {render}
        <ul className="image-display">
          {results.map((item: any) => (
            <li key={item.id}>
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
