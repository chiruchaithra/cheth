import React,{useState,useEffect,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState(null)




  const  fetchMovies = useCallback( async () => {
        // This is by using asynchrouous call of then
      // fetch('https://swapi.dev/api/films').then((response) => {
      //     return response.json()}).then((data) => {
      //        const transformedMovies = data.results.map(movie => {
      //            return {
      //                id:movie.episode_id,
      //                title:movie.title,
      //                releaseDate:movie.release_date,
      //                openingText: movie.opening_crawl
      //            }
      //        })
      //     setMovies(transformedMovies)
      //
      // })


      // This simplifies asynchrous call by async and await
      setIsLoading(true)
      setError(null)
      try {
          // const response = await fetch('https://swapi.dev/api/films')
          const response = await fetch('https://react-http-c48b2-default-rtdb.firebaseio.com/movies.json')
          if(!response.ok) {
              throw new Error('something went wrong')
          }
          const data = await response.json()
          const transformedMovies = data.results.map(movie => {
              return {
                  id:movie.episode_id,
                  title:movie.title,
                  releaseDate:movie.release_date,
                  openingText: movie.opening_crawl
              }
          })
          setMovies(transformedMovies)
      } catch (error) {
          setError(error.message)
      }

      setIsLoading(false)
  },[])

    useEffect(() => {
        fetchMovies()
    },[fetchMovies])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
          {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
          {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
          {isLoading && <p>Loading....</p>}
          {!isLoading && error && <p>{error}</p>}

      </section>
    </React.Fragment>
  );
}

export default App;
