import React from 'react'
type Props = {
  refetch: () => void;
  handleSearchInputChange: React.ChangeEventHandler;
}

const Search: React.FC<Props> = React.memo(({ refetch, handleSearchInputChange }) =>
  <div className="flex items-end justify-center w-full mb-6 md:justify-start">
    <input className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border-2 border-gray-300 rounded outline-none focus:border-indigo-500" type="text" onChange={handleSearchInputChange} />
    <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600" onClick={refetch}>Search!</button>
  </div>
)

export default Search