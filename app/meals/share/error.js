"use client";

export default function Error({error}) {
    return (
        <main className="error">
            <h1>An error occured</h1>
            <p>While creating data. Please try again</p>
            <p>{error}</p>
        </main>
    );
}