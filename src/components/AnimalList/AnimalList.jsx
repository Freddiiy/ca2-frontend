import {useState} from "react";

export default function AnimalList({animalList}) {

    return (
        <>
            <h1>Animal List:</h1>
            <ul>
                {animalList.map((animal, key) => (
                    <>
                        <li key={key}>{animal}</li>
                    </>
                ))}
            </ul>
        </>
    )
}