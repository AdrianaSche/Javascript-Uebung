import CharacterCard from './CharacterCard'
import './CharacterGallery.css'

export default function CharacterGallery(props) {
  return (
    <div className="character-gallery">
      {props.characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}
