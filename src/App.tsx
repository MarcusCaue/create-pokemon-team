// Import statements
import api from "./tools/api"
import { TrashIcon } from "./images/TrashIcon"
import { FormEvent, useRef, useState } from "react"
import { Pokemon } from "./classes/Pokemon"
import { InformationsPokemon } from "./components/containers/InformationsPokemon"
import { GetFormPokemon } from "./components/containers/GetFormPokemon"
// Interfaces
import { ImgOptions, Stats, TypesPokemonPokeApi } from "./interfaces/index"
// Styles
import { Body, ResetGlobalCss, HeaderPage } from "./styles/general/index.style"
import { StyledSearchPokemon, StyledTeamPokemon, Container } from "./styles/containers/index.style"
import { PokemonListItem } from "./components/containers/PokemonListItem"
import { StyledPlaceholderToContainer } from "./styles/components/index.style"

export default function App() {
  // States
  const [optionImage, setOptionImage] = useState('official')
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [team, setTeam] = useState<Array<Pokemon>>([])

  // Refs
  const inputRef = useRef<HTMLInputElement>(null)
  const nicknameInputRef = useRef<HTMLInputElement>(null)

  // Functions
  function submitForm(event: FormEvent) {
    event.preventDefault()
    const inputRefValue = inputRef.current?.value.trim().toLowerCase().replace(/ /g, "-")
    inputRefValue && getPokemon(inputRefValue)
  }

  function addPokemonOnTeam() {
    team.length === 6 ? window.alert("O seu time já está completo.") : pokemon && setTeam([...team, pokemon])
  }

  function renderPokemonTeam() {
    return (
      <ul> { team.map((pokemon, key) => <PokemonListItem key={key} pokemon={pokemon} />) } </ul>
    )
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

    const statsOfNewPokemon: Stats = {
      hp: data.stats[0].base_stat,
      speed: data.stats[5].base_stat,
      attack: data.stats[1].base_stat, specialAttack: data.stats[3].base_stat,
      defense: data.stats[2].base_stat, specialDefense: data.stats[4].base_stat
    }

    const nicknameNewPokemon = nicknameInputRef.current?.value

    const newPokemon = new Pokemon(
      data.name,
      data.types.map((typeElement: TypesPokemonPokeApi) => typeElement.type.name),
      statsOfNewPokemon,
      images,
      nicknameNewPokemon
    )

    setPokemon(newPokemon)
  }

  return (
    <>
      <ResetGlobalCss $darkModeActived />
      <Body>
        <HeaderPage> Monte o seu Time de Pokemons!</HeaderPage>

        <Container>
          <StyledSearchPokemon>
            {
              pokemon 
              ?
                <InformationsPokemon
                  pokemon={pokemon}
                  optionImageChoiced={optionImage}
                />
              :
                <StyledPlaceholderToContainer>
                  Utilize as barras de pesquisa <br /> abaixo para pesquisar e adicionar <br /> pokemons ao seu time.
                </StyledPlaceholderToContainer>
            }

            <GetFormPokemon
              submitFormFunction={submitForm}
              refInput={inputRef}
              refNicknameInput={nicknameInputRef}
              optionImageChoiced={optionImage}
              changeOptionImage={setOptionImage}
              addPokemonOnTeamFunction={addPokemonOnTeam}
            />
          </StyledSearchPokemon>

          <StyledTeamPokemon>
            {
              team.length > 0
                ? 
                  renderPokemonTeam()
                :
                  <StyledPlaceholderToContainer> 
                    Adicione Pokemons ao seu time 
                  </StyledPlaceholderToContainer>
            }
            { team.length > 0 && <TrashIcon clearTeam={ () => setTeam([]) } />}
          </StyledTeamPokemon>
        </Container>
      </Body>
    </>
  )
}