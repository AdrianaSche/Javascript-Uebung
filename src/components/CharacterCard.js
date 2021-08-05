import './CharacterCard.css'
export default function CharacterCard (props) {
    return <div className="character-card">
        <h1 className="heading">{props.character.name}</h1>
        <img className="character-card__image" src={props.character.image} alt={props.character.name}/>
        <div className="character-cards__properties">
            <div>status: {props.character.status}</div>
            <div>species: {props.character.species}</div>
            <div>origin: {props.character.origin.name}</div></div>


    </div>
}