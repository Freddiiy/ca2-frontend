import React, {useEffect, useRef, useState} from 'react'
import AnimalList from "./AnimalList/AnimalList";

const Animals = () => {
  const [animal, setAnimal] = useState("");
  const [joke, setJoke] = useState("");
  const [funnyAnimalName, setFunnyAnimalName] = useState("");
  const [funnyAnimalJoke, setFunnyAnimalJoke] = useState("");

  useEffect(() => {
      const existingAnimal = localStorage.getItem('animalList');
      setAnimalList(existingAnimal ? JSON.parse(existingAnimal) : []);
  }, [])


    const getAnimal = async () => {
        const response = await fetch("http://localhost:8080/api/animal/rand")
        .then(response => response.json())
        .then(data => {
          setAnimal(data.name)
        })
      }

      const getJoke = async () => {
        const Jokeresponse = await fetch("http://localhost:8080/api/joke/rand")
        .then(response => response.json())
        .then(data => {
          setJoke(data.value)
        })
      }

      const getFunnyAnimal = async () => {
          const funnyAnimalName = await fetch("http://localhost:8080/api/animal/rand")
          .then(response => response.json())
          .then(data => {
            setFunnyAnimalName(data.name)
          })

          const funnyAnimalJoke = await fetch("http://localhost:8080/api/joke/rand")
          .then(response => response.json())
          .then(data => {
            setFunnyAnimalJoke(data.value)
          })
      }

      const animalText = useRef();
    const [animalList, setAnimalList] = useState([])

      function addToList(event) {
          event.preventDefault();
          if (animal === "") return;
          const next = [...animalList, animal]
          setAnimalList(next);
          localStorage.setItem("animalList", JSON.stringify(next));
      }


  return (
    <div style={{marginTop: "2em"}}>
        <div>
            <h4>Click to get an animal!</h4>
            <button onClick={getAnimal}>Get an animal</button>
            <p ref={animalText}>{animal}</p>
            <button onClick={addToList}>Add to list</button>
        </div>

        <div style={{marginTop: "2em"}}>
            <h4>Click here to get a joke!</h4>
            <button onClick={getJoke}>Get a joke</button>
            <p>{joke}</p>
        </div>

        <div style={{marginTop: "2em"}}>
            <h4>Click here to get a funny animal!</h4>
            <button onClick={getFunnyAnimal}>Get a funny animal</button>
            <p>{funnyAnimalName} says: {funnyAnimalJoke}</p>
        </div>

        <div style={{marginTop: "2em"}}>
            <AnimalList animalList={animalList} />
        </div>
    </div>
  )
}

export default Animals