// Import statements
import { FormEvent, useEffect, useRef, useState } from "react"
import api from "./tools/api"
import { Pokemon } from "./classes/Pokemon"
import { InformationsPokemon } from "./components/containers/InformationsPokemon"
import { GetFormPokemon } from "./components/containers/GetFormPokemon"
// Interfaces
import { ImgOptions } from "./interfaces/ImgOptions"
import { Stats } from "./interfaces/Stats"
import { TypesPokemonPokeApi } from "./interfaces/TypesPokemonPokeApi"
// Styles
import { Body } from "./styles/general/Body"
import { Container } from "./styles/containers/Container"
import { ResetCss } from "./styles/general/ResetCss"
import { SearchPokemonSection } from "./styles/containers/SearchPokemonSection"
import { HeaderPage } from "./styles/general/HeaderPage"
import { TeamPokemonSection } from "./styles/containers/TeamPokemonSection"
import { TypePokemon } from "./components/TypePokemon"

export default function App() {
  // States
  const [ pokemonImg,  setPokemonImg  ] = useState<ImgOptions>()
  const [ optionImage, setOptionImage ] = useState('official')
  const [ pokemon, setPokemon ] = useState<Pokemon>()

  // Refs
  const inputRef = useRef<HTMLInputElement>(null)

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

    const img: ImgOptions = {
      "official": data.sprites.other["official-artwork"].front_default,
      "pixelated": data.sprites.front_default,
      "animated": data.sprites.versions['generation-v']['black-white'].animated.front_default
    }

    const statsOfNewPokemon : Stats = {
      hp: data.stats[0].base_stat,
      speed: data.stats[5].base_stat,
      attack: data.stats[1].base_stat, specialAttack: data.stats[3].base_stat,
      defense: data.stats[2].base_stat, specialDefense: data.stats[4].base_stat
    }

    const newPokemon = new Pokemon(
      data.name,
      data.types.map((typeElement : TypesPokemonPokeApi) => typeElement.type.name),
      statsOfNewPokemon
    )

    setPokemonImg(img)
    setPokemon(newPokemon)

  }

  useEffect(() => {
    // getPokemon("lugia")
    setPokemonImg({
      official: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
      animated: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/249.gif",
      pixelated: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
    })

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
      [ "physic", "flying" ],
      statsPokemonTest
    )

    setPokemon(pokemonTest)
  }, [])

  return (
    <>
      <ResetCss />
      <Body>
        <HeaderPage> Monte o seu Time de Pokemons! </HeaderPage>

        <Container>
          <SearchPokemonSection>
            <InformationsPokemon 
              imagesOfPokemon={pokemonImg} 
              pokemon={pokemon} 
              optionImageChoiced={optionImage} 
            />
            <GetFormPokemon 
              submitFormFunction={submitForm} 
              refInput={inputRef} 
              optionImageChoiced={optionImage} 
              changeOptionImage={setOptionImage} 
            />
          </SearchPokemonSection>

          <TeamPokemonSection>
            Aqui haverá futuramente o time de Pokemons que o usuário criou! <br />
            Aguarde! ;)
          </TeamPokemonSection>
        </Container>
      </Body>
    </>
  )
}