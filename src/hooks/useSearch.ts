import { useState, useCallback } from 'react'

export const useSearch = (query: string): [string, React.ChangeEventHandler<HTMLInputElement>] => {
  const [searchValue, setSearchValue] = useState<string>(query)
  const handleSearchInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }, [setSearchValue])
  return [searchValue, handleSearchInputChange]
} 