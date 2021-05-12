import { useEffect, useState } from "react"
import Character from "./Character";

const Characters = () =>{
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        if(!navigator.onLine){
            console.log("From Storage",JSON.parse(localStorage.getItem("characters")));
            setCharacters(JSON.parse(localStorage.getItem("characters") || "[]"));
        }
        fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=23ff8988cbade81d9f4b9e25069f539a&hash=00de9a8f19b12510a7edb83b4a52d448")
            .then((result) => result.json())
            .then((result) => {
                console.log("From internet",result);
                setCharacters(result.data.results);
                localStorage.setItem("characters", JSON.stringify(result.data.results));
            });
    },[])
    return(
        <>
        <h1 className="text-center">Marvel Characters</h1>
        <div className="container">
            <div className="row">
                {characters.map((character) => <div className="col-12 col-md-3"><Character key={character.id} id ={character.id} name={character.name} thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}></Character></div>)}
            </div>
        </div>
        </>
    )
};

export default Characters;