import { useEffect, useState } from "react"
import Character from "./Character";

const Characters = () =>{
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=23ff8988cbade81d9f4b9e25069f539a&hash=00de9a8f19b12510a7edb83b4a52d448")
            .then((result) => result.json())
            .then((result) => setCharacters(result));
    },[])
    return(
        <>
        {characters.map((character) => <Character name={character.name}></Character>)}
        </>
    )
};