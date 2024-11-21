import { act, useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors,setActors] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/actors')
    .then(res => res.json())
    .then(data => setActors(data))
    .catch(error => console.log(error))
  },[]  )
  const actorElements = actors.map((actor)=>{
    return(
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        {actor.movies.map((movie,index)=>{
          return(
            <li key={index}>{movie}</li>
          )
        })}
      </article>
    )
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorElements}
        {/* Actor info here! */}
      </main>
    </>
  );
};

export default Actors;
