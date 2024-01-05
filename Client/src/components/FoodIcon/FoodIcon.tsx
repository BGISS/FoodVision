import "./FoodIcon.css";

interface FoodIconParam {
  image: string;
  title: string;
}

function FoodIcon({ image, title }: FoodIconParam) {
  return (
    <div className="icon">
      <div className="image">
        <img className="foodImage" src = {image}/>
      </div>
      <div className="recipe-name">
        <p className="recipeText">{title}</p>
      </div>
    </div>
  );
}

export default FoodIcon;
