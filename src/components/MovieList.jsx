import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null; 
    return (
        <div className="p-6">
    <h1 className="text-2xl text-white mb-4">{title}</h1>
    <div className="flex overflow-x-scroll">
        <div className="flex space-x-4">
            {movies?.map((movie) => (
                <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
            ))}
        </div>
    </div>
</div>

    );
};

export default MovieList;
