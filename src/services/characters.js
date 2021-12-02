export const fetchCharacters = async () => {
  const characterResults = await fetch(`https://swapi.dev/api/people/`)

  const characterData = await characterResults.json()

  return characterData.results
}
