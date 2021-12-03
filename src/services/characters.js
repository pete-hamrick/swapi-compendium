export const fetchCharacters = async () => {
  const characterResults = await fetch(`https://swapi.dev/api/people/`)

  const characterData = await characterResults.json()

  return characterData
}

export const fetchNextPage = async (nextPageUrl) => {
  const nextPageResults = await fetch(nextPageUrl)

  const characterData = await nextPageResults.json()

  return characterData
}

export const fetchPrevPage = async (prevPageUrl) => {
  const prevPageResults = await fetch(prevPageUrl)

  const characterData = await prevPageResults.json()

  return characterData
}
