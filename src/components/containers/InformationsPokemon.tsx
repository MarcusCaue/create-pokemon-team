import styled from "styled-components"
import { ImgOptions } from "../../interfaces/ImgOptions"
import { Pokemon } from "../../classes/Pokemon"

const InformationsPokemonStyle = styled.section`
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`
const ImagePokemonStyle = styled.section`
  width: 50%;

  img {
    height: 16rem;
    width: 16rem;
    object-fit: contain;
  }
`
const DataPokemonStyle = styled.section`
  font-size: 1.1rem;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    list-style: none;
  }
`

function formatName(name: string | undefined) {
  if (name === undefined) {
    return " < Pokemon não foi encontrado > "
  }

  const words = name.split("-")
  
  const wordsFirstLetterUpperCase = words.map(w => {
    const firstLetter = w.charAt(0)
    const firstLetterUpperCase = firstLetter.toUpperCase()
    const replaceFirstLetter = w.replace(firstLetter, firstLetterUpperCase)
    return replaceFirstLetter
  })

  return wordsFirstLetterUpperCase.join(" ")
}

interface InformationsPokemonProps {
  imagesOfPokemon: ImgOptions | undefined, 
  pokemon: Pokemon | undefined,
  optionImageChoiced: string, 
}

export function InformationsPokemon({ imagesOfPokemon, optionImageChoiced, pokemon }: InformationsPokemonProps) {
  return (
    <InformationsPokemonStyle>
      <ImagePokemonStyle>
        <img src={
          imagesOfPokemon !== undefined
            ?
            imagesOfPokemon[optionImageChoiced as keyof ImgOptions] === null
              ?
              imagesOfPokemon.official
              :
              imagesOfPokemon[optionImageChoiced as keyof ImgOptions]
            : ''} alt="Imagem de um Pokémon" />
      </ImagePokemonStyle>

      <DataPokemonStyle>
        <ul>
          <li> Nome: {formatName(pokemon?.name)} </li>
          <li> Tipos: {pokemon?.types ? pokemon.types.join(" | ") : "< Os tipos do Pokemon não foram encontrados >"} </li>
          <li> HP: {pokemon?.stats.hp} </li>
          <li> Ataque: {pokemon?.stats.attack} </li>
          <li> Defesa: {pokemon?.stats.defense} </li>
          <li> Ataque Especial: {pokemon?.stats.specialAttack} </li>
          <li> Defesa Especial: {pokemon?.stats.specialDefense} </li>
          <li> Velocidade: {pokemon?.stats.speed} </li>
        </ul>
      </DataPokemonStyle>
    </InformationsPokemonStyle>
  )
}