import { FormEvent, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar() {
  const [input, setInput] = useState("");
  const [backendData, setBackendData] = useState(null);
  const getRecipe = async (query: string) => {
    try {
      const response = await axios.get(`/api/recipe?apiData=${query}`);
      setBackendData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error Fetching recipe data:", error);
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
