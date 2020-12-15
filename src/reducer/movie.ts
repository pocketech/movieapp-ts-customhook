import { Movie } from '../type/Movie'

const START_FETCH_MOVIE = "START_FETCH_MOVIE" as const
const SUCCESS_FETCH_MOVIE = "SUCCESS_FETCH_MOVIE" as const
const FAIL_FETCH_MOVIE = "FAIL_FETCH_MOVIE" as const

const startFetchMovieAction = () => {
  return { type: START_FETCH_MOVIE }
}
const successFetchMovieAction = (movies: Movie[]) => {
  return { type: SUCCESS_FETCH_MOVIE, payload: movies }
}
const failFetchMovieAction = () => {
  return { type: FAIL_FETCH_MOVIE }
}

export const actionCreators = {
  startFetchMovieAction,
  successFetchMovieAction,
  failFetchMovieAction
}

export type ActionType =
  | ReturnType<typeof startFetchMovieAction>
  | ReturnType<typeof successFetchMovieAction>
  | ReturnType<typeof failFetchMovieAction>

export type State =
  | undefined
  | { isLoading: true; data: undefined } // loading
  | { isLoading: false; data: Movie[] } //success
  | { isLoading: false; data: undefined } // fail

export const initialState: State = undefined

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case START_FETCH_MOVIE:
      return {
        ...state,
        isLoading: true,
        data: undefined
      }
    case SUCCESS_FETCH_MOVIE:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case FAIL_FETCH_MOVIE:
      return {
        ...state,
        isLoading: false,
        data: undefined
      }
    default:
      return state
  }
}