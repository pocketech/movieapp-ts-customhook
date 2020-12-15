export type Movie = {
  Title: string
  Year: number
  imdbID: string
  Type: string
  Poster: string
}

export type SearchResult = {
  Search?: Movie[]
  Response: boolean
}