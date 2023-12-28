function FoodIcon(image: string, title: string) {
  return (
    <div className="icon">
      <div className="image">
        <img>src={image}</img>
      </div>
      <div className="recipe-name">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default FoodIcon;
