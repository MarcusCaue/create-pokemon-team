// Import statements
import { FormEvent, useEffect, useRef, useState } from "react"
import api from "./tools/api"
import { Pokemon } from "./classes/Pokemon"
// Interfaces
import { ImgOptions } from "./interfaces/ImgOptions"
import { Stats } from "./interfaces/Stats"
import { TypesPokemonPokeApi } from "./interfaces/TypesPokemonPokeApi"
// Styles
import { Body } from "./styles/Body"
import { Container } from "./styles/Container"
import { PokemonImage } from "./styles/PokemonImage"
import { ResetCss } from "./styles/ResetCss"
import { SearchPokemonSection } from "./styles/SearchPokemonSection"
import { HeaderPage } from "./styles/HeaderPage"
import { TeamPokemonSection } from "./styles/TeamPokemonSection"
import { Button } from "./styles/Button"
import { Input } from "./styles/Input"
import { RadiosContainer } from "./styles/RadiosContainer"
import { InputRadio } from "./components/InputRadio"
import { PokemonInformations } from "./styles/PokemonInformations"
import { DataPokemon } from "./styles/DataPokemon"
import { FormContainer } from "./styles/FormContainer"

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
  function showTypes(pokemonTypes: string[] | undefined) {
    if (pokemonTypes === undefined) {
      return " < Os tipos do Pokemon não foram encontrados > "
    }

    return pokemonTypes.join(" | ")
  }

  useEffect(() => {
    getPokemon("lugia")
  }, [])

  return (
    <>
      <ResetCss />
      <Body>
        <HeaderPage> Monte o seu Time de Pokemons! </HeaderPage>

        <Container>
          <SearchPokemonSection>
            <PokemonInformations>
              <PokemonImage>
                <img src={
                  pokemonImg !== undefined
                    ?
                    pokemonImg[optionImage as keyof ImgOptions] === null
                      ?
                      pokemonImg.official
                      :
                      pokemonImg[optionImage as keyof ImgOptions]
                    : ''} alt="Imagem de um Pokémon" />
              </PokemonImage>

              <DataPokemon>
                <ul>
                  <li> Nome: {formatName(pokemon?.name)} </li>
                  <li> Tipos: {showTypes(pokemon?.types)} </li>
                  <li> HP: { pokemon?.stats.hp } </li>
                  <li> Ataque: { pokemon?.stats.attack } </li>
                  <li> Defesa: { pokemon?.stats.defense } </li>
                  <li> Ataque Especial: { pokemon?.stats.specialAttack } </li>
                  <li> Defesa Especial: { pokemon?.stats.specialDefense } </li>
                  <li> Velocidade: { pokemon?.stats.speed } </li>
                </ul>
              </DataPokemon>
            </PokemonInformations>

            <section>
              <FormContainer onSubmit={submitForm}>
                <div>
                  <Input type="text" name="pokemonName" id="pokemonName" ref={inputRef} placeholder="Digite o nome do Pokemon: " />
                </div>
                {/* Input Radios */}
                <RadiosContainer>
                  <InputRadio optionName="official" title="Oficial" onChangeFunction={setOptionImage} optionImageVar={optionImage} />
                  <InputRadio optionName="pixelated" title="Pixelada" onChangeFunction={setOptionImage} optionImageVar={optionImage} />
                  <InputRadio optionName="animated" title="Animada" onChangeFunction={setOptionImage} optionImageVar={optionImage} />
                </RadiosContainer>
                <div>
                  <Button type="submit"> Enviar </Button>
                </div>
              </FormContainer>
            </section>
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