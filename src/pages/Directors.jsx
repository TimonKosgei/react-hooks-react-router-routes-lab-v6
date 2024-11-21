import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Directors() {
  const [directors, setDirectors] = useState([])
  useEffect( ()=>{
  fetch('http://localhost:3000/directors')
  .then(res => res.json())
  .then(data => setDirectors(data))
  .catch(error => console.log(error));
  },[])

  const directorElements = directors.map((director)=>{
    return(
      <article key={director.id}>
        <h2>{director.name}</h2>
        {director.movies.map((movie,index)=>{
          return (<li key={index}>{movie}</li>)
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
        <h1>Directors Page</h1>
        {directorElements}
      </main>
    </>
  );
};

export default Directors;
