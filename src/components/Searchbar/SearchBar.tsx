import { FormEvent, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar() {
  const [input, setInput] = useState("");
  const getRecipe = async (query: string) => {
    try {
      const result = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a41283952ec040c8934bb16c8384f429&includeIngredients=${query}&number=2`
      );
      return result;
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  };
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getRecipe(input);
  };
  return (
    <form onSubmit={handleOnSubmit} className="input-wrapper">
      <FaSearch className="search-icon" size={30} />
      <input
        className="search-bar"
        placeholder="Enter your Ingredients!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
export default SearchBar;
