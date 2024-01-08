import "./SearchResto.css";
import { Link } from "react-router-dom";

interface CoordsParam{

}

function SearchResto(){

   

    return(
        <>
            <Link to="main">
                <button  className="getstarted">Get Started</button>
            </Link>
        </>
    )
}

export default SearchResto;