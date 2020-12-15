# Movie Search with TypeScript

## :star2: OverView
映画データ検索アプリ<br>
データソースはOMDb API ([http://www.omdbapi.com/](http://www.omdbapi.com/))を使用


## :bulb: Inspiration
- カスタムフックと仲良くなりたい！
- 型安全にデータフェッチしたい！
## :earth_africa: Demo
[デモページ (GitHub Pages)](https://pocketech.github.io/movieapp-ts-customhook)

In the project directory, you can run:

## :clap: Best Parts

```typescript
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
```

## :clipboard:Task List

  finish




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
