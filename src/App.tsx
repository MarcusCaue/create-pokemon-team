// Import statements
import api from "./tools/api"
import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { Pokemon } from "./classes/Pokemon"
import { InformationsPokemon } from "./components/containers/InformationsPokemon"
import { GetFormPokemon } from "./components/containers/GetFormPokemon"
// Interfaces
import { ImgOptions, Stats, TypesPokemonPokeApi } from "./interfaces/index"
// Styles
import { Body, ResetGlobalCss, HeaderPage } from "./styles/general/index.style"
import { StyledSearchPokemon } from "./styles/containers/StyledSearchPokemon.style"
import { StyledTeamPokemon } from "./styles/containers/StyledTeamPokemon.style"
import { Container } from "./styles/containers/StyledContainer.style"
import { PokemonListItem } from "./components/containers/PokemonListItem"

const imagesPokemonTest = {
  official: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
  animated: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/249.gif",
  pixelated: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
  icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/249.png"
}

const statsPokemonTest: Stats = {
  hp: 1,
  attack: 1,
  defense: 1,
  specialAttack: 1,
  specialDefense: 1,
  speed: 1
} 

const pokemonTest = new Pokemon(
  "lugia",
  [ "psychic", "flying" ],
  statsPokemonTest,
  imagesPokemonTest,
  "Cheirosin"
)

export default function App() {
  // States
  const [ optionImage, setOptionImage ] = useState('official')
  const [ pokemon, setPokemon ] = useState<Pokemon>(pokemonTest)
  const [ team, setTeam ] = useState<Array<Pokemon>>([])

  // Refs
  const inputRef = useRef<HTMLInputElement>(null)
  const nicknameInputRef = useRef<HTMLInputElement>(null)

  // Functions
  function submitForm(event: FormEvent) {
    event.preventDefault()
    const inputRefValue = inputRef.current?.value
    if (inputRefValue !== undefined)
      getPokemon(inputRefValue)
  }

  async function getPokemon(name: string) {

    const response = await api.get("/" + name)
    const data = response.data

    const images: ImgOptions = {
      "official": data.sprites.other["official-artwork"].front_default,
      "pixelated": data.sprites.front_default,
      "animated": data.sprites.versions['generation-v']['black-white'].animated.front_default,
      "icon": data.sprites.versions['generation-vii'].icons.front_default
    }

    const statsOfNewPokemon : Stats = {
      hp: data.stats[0].base_stat,
      speed: data.stats[5].base_stat,
      attack: data.stats[1].base_stat, specialAttack: data.stats[3].base_stat,
      defense: data.stats[2].base_stat, specialDefense: data.stats[4].base_stat
    }

    const nicknameNewPokemon = nicknameInputRef.current?.value

    const newPokemon = new Pokemon(
      data.name,
      data.types.map((typeElement : TypesPokemonPokeApi) => typeElement.type.name),
      statsOfNewPokemon,
      images,
      nicknameNewPokemon
    )

    setPokemon(newPokemon)
  }
  
  return (
    <>
      <ResetGlobalCss $darkModeActived={true} />
      <Body>
        <HeaderPage> Monte o seu Time de Pokemons!</HeaderPage>

        <Container>
          <StyledSearchPokemon>
            <InformationsPokemon 
              pokemon={pokemon} 
              optionImageChoiced={optionImage} 
            />
            <GetFormPokemon 
              submitFormFunction={submitForm} 
              refInput={inputRef}
              refNicknameInput={nicknameInputRef}
              optionImageChoiced={optionImage} 
              changeOptionImage={setOptionImage}
              addPokemonOnTeamFunction={() => {console.log(pokemon); setTeam([...team, pokemon])} }
            />
          </StyledSearchPokemon>
 
          <StyledTeamPokemon>
            {
              team.length > 0 
              ? team.map((pokemon, key) => {
                return (
                  <PokemonListItem key={key} pokemon={pokemon}/>
                )
              })
              :
              <p> Adicione Pokemons ao seu time ;) </p>
            }
          </StyledTeamPokemon>
        </Container>
      </Body>
    </>
  )
}