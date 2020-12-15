import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
const App = () => {
  return (
    <div className="text-center bg-gray-600">
      <Header text="Movie Search" />
      <Main />
    </div>
  )
}

export default App;
