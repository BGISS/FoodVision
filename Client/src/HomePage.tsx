import BlurredElipse from "./components/Ellipse/BlurredElipse";
import { Link } from "react-router-dom";
import "./home.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } },
  };

  return (
    <motion.main
      key="/"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <div className="navbar">
            <h1 className="foodVision">FoodVision</h1>
            <a className="about" href="#aboutPage">
              About
            </a>
            <Link to="/main">
              <button className="getstarted">Get Started</button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="homePage">
            <div className="text">
              <p className="ingredients">From ingredients to full meal.</p>
              <p className="pantry">
                Tell us what’s in your pantry and fridge and we’ll make your
                next meal.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <div className="ellipses">
                <div className="ellipse1">
                  <BlurredElipse color="#37C592" />
                </div>
                <div className="ellipse2">
                  <BlurredElipse color="#D376FF" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={mainControls}
          variants={variants}
        >
          <div id="aboutPage">
            <p className="first">
              With FoodVision, even the least experienced of chefs can make a
              meal out of nothing.
            </p>
            <p className="second">
              Everything’s a cycle. You open your fridge. You don’t know what to
              cook. You buy new ingredients. Whatever was in the fridge goes
              bad. Rinse and repeat.
            </p>
            <p className="third">
              FoodVision was created by 4 college students that, like many,
              struggled to make do with what they had. FoodVision was designed
              to help us, and others, to reduce food waste.
            </p>
          </div>
        </motion.div>
      </main>
    </motion.main>
  );
}
export default HomePage;
