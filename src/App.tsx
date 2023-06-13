// Import statements
import { FormEvent, useEffect, useRef, useState } from "react"
import api from "./tools/api"
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

interface ImgOptions {
  official: string,
  pixelated: string,
  animated: string
}

export default function App() {
  // States
  const [pokemonImg, setPokemonImg] = useState<ImgOptions>()
  const [optionImage, setOptionImage] = useState('official')
  const [pokemonName, setPokemonName] = useState('')

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
    const namePokemon = data.name
    setPokemonImg(img)
    setPokemonName(namePokemon)

  }
  function formatName(name: string) {
    const words = name.split("-")
    
    const wordsFirstLetterUpperCase = words.map(w => {
      const firstLetter = w.charAt(0)
      const firstLetterUpperCase = firstLetter.toUpperCase()
      const replaceFirstLetter = w.replace(firstLetter, firstLetterUpperCase)
      return replaceFirstLetter
    })

    return wordsFirstLetterUpperCase.join(" ")
  }

  useEffect(() => {
    getPokemon("sceptile-mega")
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
                  <li> Nome: {formatName(pokemonName)} </li>
                  
                </ul>
              </DataPokemon>
            </PokemonInformations>

            <section>
              <form onSubmit={submitForm}>
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
              </form>
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