import React from 'react'
import Search from './Search'
import MovieList from './MovieList'
import { useMovieFetch } from '../hooks/useMovieFetch'
import { useSearch } from '../hooks/useSearch'

const Main: React.FC = () => {
  const [searchValue, handleSearchInputChange] = useSearch("man")
  const [movieState, refetch] = useMovieFetch(searchValue)
  return (
    <main className="max-w-6xl p-4 mx-auto my-8 text-center ">
      <Search refetch={refetch} handleSearchInputChange={handleSearchInputChange} />
      <MovieList movieState={movieState} />
    </main>
  )
}

export default Main