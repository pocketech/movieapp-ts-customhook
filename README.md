# Movie Search with TypeScript

## :star2: OverView
映画データ検索アプリ<br>
データソースはOMDb API ([http://www.omdbapi.com/](http://www.omdbapi.com/))を使用


## :bulb: Inspiration
- Reactではじめて作ったアプリをTSでリファクタリングしたい！
- カスタムフックと仲良くなりたい！
- 型安全にデータフェッチしたい！
## :earth_africa: Demo
[デモページ (GitHub Pages)](https://pocketech.github.io/movieapp-ts-customhook)

## :clap: Best Parts
1. Context Providerを責務（取得or変更）で分割することによりRerenderを防ぐvalueの受け渡しを実現。
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
2. dispatchとactionをカスタムフック（useMovieFetch）に隠蔽することでViewをシンプルにし、凝集度を高めた。
```typescript
export const useMovieFetch = (searchValue: string): [State, () => void] => {
  const movieState = useContext(MovieContext)
  const dispatch = useContext(MovieUpdateContext)
  const [refetchIndex, setRefetchIndex] = useState(0)

  const refetch = useCallback(() => setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1), [setRefetchIndex])


  useEffect(() => {
    const fetchData = async () => {
      if (!dispatch) return
      dispatch(actionCreators.startFetchMovieAction())
      fetch(`https://www.omdbapi.com/?s=${searchレンダリングをapikey=b0fee22e`)
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
```
3. useCallBack,React.memoでメモ化し、余計なレンダリングを防ぐ

4. tailwindcssでカスタマイズ性の高いCSS

## :clipboard: Task List
1. 検索結果のページネーション機能
2. 映画タイトルが省略された場合のツールチップサポートの実装
3. 検索結果のソート機能（e.g. 公開年度）
