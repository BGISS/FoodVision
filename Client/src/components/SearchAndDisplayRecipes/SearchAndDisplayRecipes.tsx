import SearchBar from "../SearchBar/SearchBar";
import FoodIcon from "../FoodIcon/FoodIcon";
import "./SearchAndDisplayRecipes.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function SearchAndDisplayRecipes() {
  const mainControls = useAnimation();

  const AnimatedListItem = ({ item, index }: { item: any; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    const variants = {
      hidden: { opacity: 0, y: 75 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.25 },
      },
    };

    return (
      <motion.li
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <FoodIcon
          image={String(item.image)}
          title={String(item.title)}
        ></FoodIcon>
      </motion.li>
    );
  };

  const { render, backendData } = SearchBar();
  //@ts-ignore
  const results = backendData?.results || [];
  //console.log(results);
  return (
    <>
      <div className="search-display">
        {render}
        <ul className="image-display">
          {results.map((item: any, index: number) => (
            <AnimatedListItem key={item.id} index={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchAndDisplayRecipes;
