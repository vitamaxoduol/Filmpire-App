import { useEffect, useState } from 'react';

// d2047b5f
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=d2047b5f';

// const movie1 = {
//   Poster
//   : 
//   "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
//   Title
//   : 
//   "Spiderman in Cannes",
//   Type
//   : 
//   "movie",
//   Year
//   : 
//   "2016",
//   imdbID
//   : 
//   "tt5978586"
// };

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    
    

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
      const movieTitles = ['Spiderman', 'The Godfather', 'Star Wars', 'Jurassic Park'];
      movieTitles.forEach(title => searchMovies(title));
    }, []);


    useState(() => {

    });

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>

        <img src={SearchIcon} 
        alt='search'
        onClick={() => searchMovies(searchTerm)}/>

      </div>

      {
       movies?.length > 0
       ? (
        <div className='container'>
       {movies.map((movie) => (
        <MovieCard movie={movie} />
       ))}

      </div>
       ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
       )
      }

      


    </div>

  );
}

export default App;