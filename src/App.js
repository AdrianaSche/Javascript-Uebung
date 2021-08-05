import './App.css'
//import response from './characters-response.json'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import { useEffect, useState } from 'react'
import { fetchAllCharacters } from './services/fetchAllCharacters'

function App() {
  //setCharacter schreibt in character rein
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchAllCharacters()
      .then(characters => setCharacters(characters))
      .catch(error => console.error(error))
  }, [])

  /*const loadCharacters = () => {
    setCharacters(response.results)
  }
  const clearCharacters = () => setCharacters([])
*/
  const searchHandler = event => setSearch(event.target.value)
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  const heading = 'Character Gallery'
  // const characters = response.results
  return (
    <div>
      <Header title={heading} />
      {/* <button onClick={loadCharacters}>load cards</button>
        <button onClick={clearCharacters}>clear Characters</button>*/}
      <input type="text" onChange={searchHandler} />
      {filteredCharacters.length === 0 && <p>no characters found!</p>}
      {filteredCharacters.length === 0 || (
        <CharacterGallery characters={filteredCharacters} />
      )}
    </div>
  )
}

export default App
