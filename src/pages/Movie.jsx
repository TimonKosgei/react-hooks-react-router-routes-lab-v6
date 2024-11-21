import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const {id} = useParams()
  const [movie, setMovie] = useState({})
  const [genres, setGenres] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/movies/${id}`)
    .then(res => res.json())
    .then(data => {
      setMovie(data)
      setGenres(data.genres)
    })
  },[id])

  return (
    <>
      
      <header>
        <NavBar />
      </header>
      <main>
        {
          <>
          <h1>{movie.title}</h1>
          <p>{movie.time}</p>
          <div>
          {genres.map((genre, index) => <span key={index}>{genre}</span>)}
        </div>
          </>
          }
      </main>
    </>
  );
};

export default Movie;
