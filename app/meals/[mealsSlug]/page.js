'use client';
import Image from "next/image";
import classes from './page.module.css';
import dummyMeals from "@/data";

export default function MealsDetailsPage({params}) {

    const mealsData = dummyMeals.find((meal) => meal.slug === params.mealsSlug );

    // if(!mealsData) {
    //     notFound();
    // }
    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={mealsData.image} alt={mealsData.title} width="500" height="300"/>
            </div>
            <div className={classes.headerText}>
                <h1>{mealsData.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${mealsData.creator_email}`}>{mealsData.creator}</a>
                </p>
                <p className={classes.summary}>{mealsData.summary}</p>
            </div>
        </header> 

        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{__html:mealsData.instructions.replace(/\n/g,'<br>')}}></p>
        </main>
        </>
    );
}