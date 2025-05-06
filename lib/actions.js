'use server';
import { redirect } from "next/navigation";
import { saveMeal } from './meals';

export async function submitMeals(formData) {
  const imageFile = formData.get("image").name;
  const imageValue = `/images/${formData.get('image').name}`;
    const meal = {
      title : formData.get('title'),
      image : formData.get("image"),
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      creator : formData.get('name'),
      creator_email : formData.get('email')
    };

    await saveMeal(meal);
   redirect('/meals');
}

