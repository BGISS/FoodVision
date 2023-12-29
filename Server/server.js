const express= require('express')
const app= express()

const spoonacular=async(apiData)=>{
    try {
        const result = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=a41283952ec040c8934bb16c8384f429&includeIngredients=${apiData}&number=2`
        );
        const data = await result.json();
        return data;
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    }
app.get(`/api/recipe`, (req,res)=>{
    const {apiData}= req.query;
    const recipes=spoonacular(apiData);
    res.json({recipes});
    
        
});

app.listen(3000,()=>{console.log("Server startd on port 3000")})
