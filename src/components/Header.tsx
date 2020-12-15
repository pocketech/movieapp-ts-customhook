import React from 'react'

type Props = {
  text: string
}

const Header: React.FC<Props> = ({ text }) =>
  <header className="flex flex-col justify-center h-32 text-3xl font-bold bg-red-700 text-red-50">
    <h2>{text}</h2>
  </header>

export default Header