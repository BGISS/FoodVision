interface FoodIconParam {
  image: string;
  title: string;
}

function FoodIcon({ image, title }: FoodIconParam) {
  return (
    <div className="icon">
      <div className="image">
        <img src = {image}/>
      </div>
      <div className="recipe-name">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default FoodIcon;
