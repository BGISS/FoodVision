const express= require('express')
const app= express()
const cors = require('cors');

app.use(cors());

app.get(`/api/recipe`, async (req,res)=>{
    const {apiData}= req.query;
    try {
      const result = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a41283952ec040c8934bb16c8384f429&includeIngredients=${apiData}&number=10`
      );
      const data = await result.json();
      res.json(data);
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  
});

app.get(`/api/recipeinfo`, async (req,res)=>{
  const {id}= req.query;
  
  try {
    const result = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=a41283952ec040c8934bb16c8384f429`
    );
    const data = await result.json();
    console.log(data.sourceUrl);
    res.json(data.sourceUrl);
    
  } catch (error) {
    console.error("Error fetching recipe info:", error);
  }
});

app.get(`/api/restaurant`, async (req,res)=>{
  const {budget,cuisine,distance,latitude,longitude}= req.query;
  
  try {
    const result = await fetch(
      `https://api.spoonacular.com/food/restaurants/search?apiKey=a41283952ec040c8934bb16c8384f429&budget=${budget}&cuisine=${cuisine}&distance=${distance}&lat=${latitude}&lng=${longitude}&page=1`
      );
    const data = await result.json();
    console.log(data.name);
    res.json(data);
    
  } catch (error) {
    console.error("Error fetching restaurant info:", error);
  }
});


app.listen(3000,()=>{console.log("Server started on port 3000")})
