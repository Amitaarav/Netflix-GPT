import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';

export const useMovieTrailer = ({movieId}) => {

        const dispatch = useDispatch();
        const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)

        const json = await data.json()
    
        const filteredData = json.results.filter((video) => video.type === "Trailer");
        console.log(filteredData)
        const trailer = filteredData.length ? filteredData[0] : json.results[0];

        console.log(trailer)
        dispatch(addTrailerVideo(trailer))
        }
      //https://www.youtube.com/watch?v=KsSoo5K8CpA
    
        useEffect(() => {
            if (movieId) getMovieVideos();
        }, [movieId]);
}