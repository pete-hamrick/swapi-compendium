export const fetchCharacters = async () => {
  const characterResults = await fetch(`https://swapi.dev/api/people/`)

  const characterData = await characterResults.json()

  return characterData
}

export const fetchNewPage = async (newPageUrl) => {
  const newPageResults = await fetch(newPageUrl)

  const characterData = await newPageResults.json()

  return characterData
}
