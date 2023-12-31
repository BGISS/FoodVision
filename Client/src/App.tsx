import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import FoodDescriptionPage from "./FoodDescriptionPage";
import RestaurantHomePage from "./RestaurantHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="foodPage" element={<FoodDescriptionPage />} />
        <Route path="restaurant" element={<RestaurantHomePage />} />
      </Routes>
    </Router>
  );
}
export default App;
