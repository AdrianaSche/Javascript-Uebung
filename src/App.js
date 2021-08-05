
import './App.css';
import Header from "./components/Header";
import response from './characters-response.json'
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";

function App() {

  const[characters,setCharacters] = useState([])
  const loadCharacters = () =>{
    setCharacters(response.results)
  }
  const heading = "Character Gallery"
 // const characters = response.results
  return <div>
    <Header title={heading}/>
    <button onClick={loadCharacters}>load cards</button>
    <CharacterGallery characters={characters}/>
  </div>


}

export default App;
