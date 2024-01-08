import SearchBar from "../SearchBar/SearchBar";
import FoodIcon from "../FoodIcon/FoodIcon";
import "./SearchAndDisplayRecipes.css";
import { motion } from "framer-motion";

function SearchAndDisplayRecipes() {
  const { render, backendData } = SearchBar();
  //@ts-ignore
  const results = backendData?.results || [];
  //console.log(results);
  return (
    <>
      <div className="search-display">
        {render}
        <ul className="image-display">
          {results.map((item: any) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "backOut" }}
            >
              <li key={item.id}>
                <FoodIcon
                  image={String(item.image)}
                  title={String(item.title)}
                ></FoodIcon>
              </li>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchAndDisplayRecipes;
