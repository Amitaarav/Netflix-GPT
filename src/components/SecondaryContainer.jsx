import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    return (
        movies.nowPlayingMovies && (
    <div className="bg-black">
        <div className="-mt-60 pl-12 relative z-20 w-screen">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
        </div>
    </div>
        )
    )
}

export default SecondaryContainer;

