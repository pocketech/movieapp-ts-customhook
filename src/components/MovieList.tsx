import React from 'react'
import Movie from './Movie'
import { State } from '../reducer/movie'

type Props = {
  movieState: State
}

const MovieList: React.FC<Props> = ({ movieState }) => {
  if (!movieState) return <p>Error</p>
  if (movieState.isLoading) return <p>Loading...</p>
  if (!movieState.data) return <p>No Data</p>
  return (
    <div className="grid items-center justify-center gap-3 grid-cols-fit-card">
      {movieState.data.map((movie, index) =>
        <Movie key={index} movie={movie} />
      )}
    </div>
  )
}

export default MovieList