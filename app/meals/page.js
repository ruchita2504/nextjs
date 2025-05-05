import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../../components/meals/meals.grid";
import { Suspense } from "react";

function MealsData() {
    return <MealsGrid />;    
}

export default function meals() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious Meals, created {''} 
                    <span className={classes.highlight}>By you</span>
                </h1>
                <p>

                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favourite receipe</Link>
                </p>
            </header>
            <main className={classes.main}>
        
        <Suspense fallback={<p className={classes.loading}>Fetching meals....</p>}>
                     <MealsData />
                </Suspense>
            </main>
        </>
        );
}