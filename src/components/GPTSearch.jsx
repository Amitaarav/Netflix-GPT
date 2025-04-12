import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions';
import GPTSearchBar from './GPTSearchBar';
import { BACKGND_IMG } from '../utils/constants';
const GPTSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BACKGND_IMG} alt="Background Image" className="w-screen h-screen" />
            </div>
            <GPTSearchBar/>
            <GPTMovieSuggestions/>
        </div>
    )
}

export default GPTSearch;
