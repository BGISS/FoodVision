import "./ResaturantIcon.css"
interface RestaurantIconParam {
    //image: string;
    name: string;
    rating: number;
    street: string;
    city: string;
    phoneNum: number;
}

function RestaurantIcon({  name, rating, street, city, phoneNum }: RestaurantIconParam){
    return(
        <div className="icon">
            <div className="text">
                <p className="name">Name: {name}</p>
                <p className="address">Address: {street}, {city}</p>
                <p className="phoneNum">Phone Number: {phoneNum}</p>
                <p className="rating">Rating: {rating}</p>
            </div>
            {/* <img className="RestaurantImage" src={image} alt="restaurant logo" /> */}
        </div>
      
    );
}

export default RestaurantIcon;