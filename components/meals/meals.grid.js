import MealItem from "./meal-item";
import dummyMeals from "@/data";
import classes from "./meals-grid.module.css";

export default function MealsGrid() {
    
    return (
     
      <ul className={classes.meals}>
         {
            dummyMeals.map((meal) =>(
               <li key={meal.id}>
                  <MealItem {...meal} />
               </li>
            ))
         }
      </ul>
    );
}