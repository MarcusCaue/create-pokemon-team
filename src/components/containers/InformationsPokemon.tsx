import styled from "styled-components"
import { ImgOptions } from "../../interfaces/index"
import { Pokemon } from "../../classes/Pokemon"
import { TypePokemon } from "../TypePokemon"

const StyledInformationsPokemon = styled.section`
  height: 40vh;
  gap: 1.5rem;
`
const StyledImagePokemon = styled.section`
  flex: 1;
  img {
    display: block;
    margin: auto;
    height: 16rem;
    width: 16rem;
    object-fit: contain;
  }
`
const StyledDataPokemon = styled.section`
  width: 40%;
  font-size: 1.2rem;
  /* background-color: #30A7D7; */
  
  > ul {
    height: 100%;
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.3rem;

    > li {
      display: flex;
      justify-content: space-between;
    }
  }
`
const StyledListItemTypesPokemon = styled.li`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`
const StyledAttribute = styled.span`
  /* color: var(--color-base-gray-100); */
  /* font-weight: 600; */
`
const StyledValue = styled.span`
  color: var(--color-contrast-text);
  /* font-weight: 600; */
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
  pokemon: Pokemon | undefined,
  optionImageChoiced: string, 
}

export function InformationsPokemon({ optionImageChoiced, pokemon }: InformationsPokemonProps) {
  return (
    <StyledInformationsPokemon>
      <StyledImagePokemon>
        <img src={
          pokemon?.images !== undefined
            ?
            pokemon?.images[optionImageChoiced as keyof ImgOptions] === null
              ?
              pokemon?.images.official
              :
              pokemon?.images[optionImageChoiced as keyof ImgOptions]
            : ''} alt="Imagem de um Pokémon" />
      </StyledImagePokemon>

      <StyledDataPokemon> 
        <ul>
          <li> 
            <StyledAttribute>Nome:</StyledAttribute> <StyledValue>{formatName(pokemon?.name)}</StyledValue> 
          </li>
          <StyledListItemTypesPokemon> 
            <StyledAttribute>Tipos: </StyledAttribute>
            <StyledValue>
              {pokemon?.types ? <TypePokemon types={pokemon.types} /> : "< Os tipos do Pokemon não foram encontrados >"}
            </StyledValue> 
          </StyledListItemTypesPokemon>
          <li>
            <StyledAttribute>HP:</StyledAttribute> <StyledValue>{pokemon?.stats.hp}</StyledValue> 
          </li>
          <li>
            <StyledAttribute>Ataque:</StyledAttribute> <StyledValue>{pokemon?.stats.attack}</StyledValue> 
          </li>
          <li>
            <StyledAttribute>Defesa:</StyledAttribute> <StyledValue>{pokemon?.stats.defense}</StyledValue> 
          </li>
          <li>
            <StyledAttribute>Ataque Especial:</StyledAttribute> <StyledValue>{pokemon?.stats.specialAttack}</StyledValue> 
          </li>
          <li>
            <StyledAttribute>Defesa Especial:</StyledAttribute> <StyledValue>{pokemon?.stats.specialDefense}</StyledValue> 
          </li>
          <li>
            <StyledAttribute>Velocidade:</StyledAttribute> <StyledValue>{pokemon?.stats.speed}</StyledValue> 
          </li>
        </ul>
      </StyledDataPokemon>
    </StyledInformationsPokemon>
  )
}