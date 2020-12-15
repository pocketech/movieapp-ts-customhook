import React, { createContext, Dispatch, ReactChild, useReducer } from 'react'
import { initialState, reducer, State, ActionType } from '../reducer/movie'

export const MovieContext = createContext<State>(undefined)

export const MovieUpdateContext = createContext<Dispatch<ActionType> | null>(null)

export const MovieContextProvider = ({ children }: { children: ReactChild }) => {
  const [movieState, dispatch] = useReducer(reducer, initialState)

  return (
    <MovieContext.Provider value={movieState}>
      <MovieUpdateContext.Provider value={dispatch}>
        {children}
      </MovieUpdateContext.Provider>
    </MovieContext.Provider>
  )

}