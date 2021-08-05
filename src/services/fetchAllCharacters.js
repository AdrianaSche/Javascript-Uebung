export const fetchAllCharacters = () =>
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => data.results)
