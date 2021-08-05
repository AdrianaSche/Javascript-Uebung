
import './App.css';
import Header from "./components/Header";
import response from './characters-response.json'
import CharacterGallery from "./components/CharacterGallery";

function App() {
  const heading = "Character Gallery"
  const characters = response.results
  return <div>
    <Header title={heading}/>
    <CharacterGallery characters={characters}/>
  </div>


}

export default App;
