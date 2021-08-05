import './App.css'
import response from './characters-response.json'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import { useState } from 'react'

function App() {
  //setCharacter schreibt in character rein
  //
  const [characters, setCharacters] = useState([])
  const loadCharacters = () => {
    setCharacters(response.results)
  }
  const clearCharacters = () => setCharacters([])

  const heading = 'Character Gallery'
  // const characters = response.results
  return (
    <div>
      <Header title={heading} />
      <button onClick={loadCharacters}>load cards</button>
      <button onClick={clearCharacters}>clear Characters</button>
      <CharacterGallery characters={characters} />
    </div>
  )
}

export default App
