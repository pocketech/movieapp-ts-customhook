import { useContext, useEffect, useState, useCallback } from 'react'
import { MovieUpdateContext, MovieContext } from '../context/movieContext'
import { actionCreators, State } from '../reducer/movie'
import { SearchResult } from '../type/Movie'

export const useMovieFetch = (searchValue: string): [State, () => void] => {
  const movieState = useContext(MovieContext)
  const dispatch = useContext(MovieUpdateContext)
  const [refetchIndex, setRefetchIndex] = useState(0)

  const refetch = useCallback(() => setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1), [setRefetchIndex])


  useEffect(() => {
    const fetchData = async () => {
      if (!dispatch) return
      dispatch(actionCreators.startFetchMovieAction())
      fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=b0fee22e`)
        .then(res => res.json())
        .then((data: SearchResult) => {
          if (!data.Search) return

          dispatch(actionCreators.successFetchMovieAction(data.Search))
        })
        .catch(() => dispatch(actionCreators.failFetchMovieAction()))
    }
    fetchData()
    // eslint-disable-next-line
  }, [refetchIndex])
  return [movieState, refetch]
}