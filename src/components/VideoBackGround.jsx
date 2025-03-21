import React from 'react'
import { useSelector } from 'react-redux'
import { useMovieTrailer } from '../hooks/useMovieTrailer';

// first get the trailer by making api call for that we need movieId
const VideoBackGround = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  console.log(trailerVideo);
  return(
    <div className="">
      <iframe 
      className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      title="YouTube video player">
      </iframe>
    </div>
  )
}
export default VideoBackGround;