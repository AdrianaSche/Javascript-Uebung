

export default function CharacterProperties(props){

   return  <div className="character-cards__properties">
        <div>status: {props.character.status}</div>
        <div>species: {props.character.species}</div>
        <div>origin: {props.character.origin.name}</div>
    </div>
}

