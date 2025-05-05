'use server';
import dummyMeals from '@/data';

export async function submitMeals(formData) {
  const imageValue = `/images/${formData.get('image').name}`
    const meal = {
      title : formData.get('title'),
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      image : imageValue,
      creator_email : formData.get('email'),
      creator : formData.get('name')   
    };
    // const shareMeals = JSON.stringify(meal);
    // const shareMealsArray = JSON.parse(shareMeals);

    dummyMeals.push(meal);
}
