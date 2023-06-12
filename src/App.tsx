// Import statements
import styled, { createGlobalStyle }   from "styled-components"
import { FormEvent, useEffect, useRef, useState } from "react"
import api                             from "./utils/api"

// Styles
const ResetCss = createGlobalStyle`
  * {
    margin: 0; padding: 0; border: 0;
    font-family: sans-serif;
  }
`
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

height: 80vh;
width: 40vw;
padding: 2rem;

border: 0.4rem solid red;
border-radius: 2rem;
`
const PokemonImage = styled.div`
img {
  margin: auto;
  height: 16rem;
}
`
const SearchPokemonSection = styled.div`


input {
  border: 1px solid black;
  border-radius: 1rem;

  font-size: 1rem;

  padding: 0.5rem 0.75rem;
}

`

interface ImgOptions {
  official: string,
  pixelated: string,
  animated: string
}

export default function App() {
  // States
  const [ pokemonImg,  setPokemonImg ]  = useState<ImgOptions>()
  const [ optionImage, setOptionImage ] = useState('official')
  const [ pokemonName, setPokemonName ] = useState('')

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
    const img : ImgOptions = {
      "official": data.sprites.other["official-artwork"].front_default,
      "pixelated": data.sprites.front_default,
      "animated": data.sprites.versions['generation-v']['black-white'].animated.front_default
    }
    const namePokemon = data.name
    setPokemonImg(img)
    setPokemonName(namePokemon)

  }

  useEffect(() => {
    getPokemon("sceptile-mega")
  } , [])

  return (
    <>
      <ResetCss />
      <Body>
        <Container>
          <div>
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
          </div>
          <div> { pokemonName } </div>
          <SearchPokemonSection>
            <form onSubmit={submitForm}>
              <input type="text" ref={inputRef} placeholder="Digite o nome do Pokemon: "/>

              <div>
                <input 
                  type="radio" 
                  name="optionImage"
                  checked={optionImage === "official"}
                  onChange={() => setOptionImage("official")}
                /> <span> Oficial  </span>
                <input 
                  type="radio" 
                  name="optionImage"
                  checked={optionImage === "pixelated"}
                  onChange={() => setOptionImage("pixelated")}
                /> <span> Pixelada </span>
                <input 
                  type="radio" 
                  name="optionImage"
                  checked={optionImage === "animated"}
                  onChange={() => setOptionImage("animated")}
                /> <span> Animada  </span>
              </div>

              <button type="submit"> Enviar </button>
            </form>
          </SearchPokemonSection>
        </Container>
      </Body>
    </>
  )
}