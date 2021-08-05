import './CharacterCard.css'
import './CharacterProperties'
import CharacterProperties from "./CharacterProperties";
export default function CharacterCard (props) {
    return <div className="character-card">
        <h1 className="heading">{props.character.name}</h1>
        <img className="character-card__image" src={props.character.image} alt={props.character.name}/>
        <CharacterProperties character ={props.character}/>
    </div>
}