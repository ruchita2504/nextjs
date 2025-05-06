import MealItem from "./meal-item";
// import dummyMeals from "@/data";
import classes from "./meals-grid.module.css";

export default function MealsGrid({meals}) {
    
    return (
     
      <ul className={classes.meals}>
         {
            meals.map((meal) =>(
               <li key={meal.id}>
                  <MealItem {...meal} />
               </li>
            ))
         }
      </ul>
    );
}