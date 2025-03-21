import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies"
import { usePopularMovies } from "../hooks/usePopularMovies"
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { useUpcomingMovies } from '../hooks/useUpcomingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
    // fetch data from TMDB API and update the store
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch)
    return (
        <div>
            <Header/>
            {
                showGPTSearch ? (<GPTSearch />) : <>
                <MainContainer />
                <SecondaryContainer/>
                </>
            }
        </div>
    )
}

export default Browse;
