import { students, renameImmutable, renameMutable } from './student'
import charactersResponse from './characters-response.json'

const characters = charactersResponse.results
const alive = characters.filter(
  character =>
    character.status === 'Alive' && character.origin.name !== 'unknown'
)
const names = characters.map(character => character.name)

const newObjectArray = characters.map(character => {
  return {
    name: character.name,
    origin: character.origin.name,
  }
})

const aliveAndEarth = console.log(alive)

/*
console.log('it works')
console.log(faktrek(6))
console.log(renameImmutable(students, 'jim', 'Peter'))
*/
