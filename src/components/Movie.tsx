import React from 'react'
import { Movie } from "../type/Movie";

type Props = {
  movie: Movie
}

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"

const MovieCard: React.FC<Props> = ({ movie }) =>
  <div className="relative flex flex-col justify-between w-48 p-4 overflow-hidden text-center duration-200 ease-in-out bg-white border-t-2 border-b-2 border-yellow-300 rounded-lg shadow-lg h-80">
    <h2 className="overflow-hidden text-xl font-bold cursor-pointer overflow-ellipsis whitespace-nowrap" tooltip="">{movie.Title}</h2>

    <img
      className="block object-contain max-h-52"
      src={movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster}
      alt={`The movie titled: ${movie.Title}`}
    />
    <p>({movie.Year})</p>
  </div>

export default MovieCard