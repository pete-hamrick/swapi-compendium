export function filterCharactersByEyeColor(characterList, eyeColor) {
  // TODO
  // There may be some bug here when I start using previous and next buttons
  // may need to add a current url to state?

  const sortedCharacters = []
  characterList.map((character) => {
    if (character.eye_color === eyeColor) {
      sortedCharacters.push(character)
    }
  })

  return sortedCharacters
}
