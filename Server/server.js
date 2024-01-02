const express= require('express')
const app= express()
const cors = require('cors');

app.use(cors());

// const spoonacular=async(apiData)=>{
//     try {
//         const result = await fetch(
//           `https://api.spoonacular.com/recipes/complexSearch?apiKey=a41283952ec040c8934bb16c8384f429&includeIngredients=${apiData}&number=9`
//         );
//         const data = await result.json();
//         return data;
//       } catch (error) {
//         console.error("Error fetching recipe data:", error);
//       }
//     }
app.get(`/api/recipe`, async (req,res)=>{
    const {apiData}= req.query;
    // const recipes=spoonacular(apiData);
    // //res.json(req.query)
    // res.json({recipes});
    try {
      const result = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a41283952ec040c8934bb16c8384f429&includeIngredients=${apiData}&number=9`
      );
      const data = await result.json();
      res.json(data);
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  
});

app.listen(3000,()=>{console.log("Server started on port 3000")})
