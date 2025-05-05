'use client';
import {useState,useEffect} from 'react';
import classes from './page.module.css';
import ImagePicker from '@/components/meals/image-picker';
import {submitMeals} from '@/lib/actions';

export default function ShareMealPage() {
  const [formData,setFormData] = useState({
    name: '',
    email:'',
    title:'',
    summary:'',
    instructions:'',
    image:''
  });

  useEffect(() => {
    const storedData = localStorage.getItem('myForm');
    alert(storedData.name);
    if (storedData) {
      setFormData(JSON.parse(storedData));
      alert(storedData)
    }
  },[]);

  const handleSubmit  = (event) => {
    event.preventDefault();
    localStorage.setItem('myForm',JSON.stringify(formData));
  }
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });
  };
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* <form className={classes.form} action={submitMeals}> */}
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" value={formData.name || ''} onChange={handleChange} required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" value={formData.email || ''} onChange={handleChange} required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={formData.title || ''} onChange={handleChange} required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" value={formData.summary  || ''} onChange={handleChange} required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              onChange={handleChange}
              value={formData.summary  || ''}
              required
            ></textarea>
          </p>
          <ImagePicker label ="your image" name="image" value={formData.image  || ''} onChange={handleChange}/>
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
