import SearchAndDisplayRecipes from "./components/SearchAndDisplayRecipes/SearchAndDisplayRecipes";
import BlurredElipse from "./components/Ellipse/BlurredElipse";
import "./mainPage.css";
import { motion } from "framer-motion";
function MainPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="fullDisplay">
          <SearchAndDisplayRecipes></SearchAndDisplayRecipes>
        </div>
      </motion.div>
    </>
  );
}

export default MainPage;
