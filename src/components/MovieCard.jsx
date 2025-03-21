import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ posterPath }) => { 
    if (!posterPath) return null; 

    return (
        <div className="w-48 h-60 rounded-lg shadow-lg">
            <img 
                className="w-48 h-full object-cover hover:cursor-pointer transform hover:scale-110 transition duration-300"
                src={IMG_CDN + posterPath} 
                alt="Movie Poster"
            />
        </div>
    );
}

export default MovieCard;
