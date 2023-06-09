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

height: 80vh;
width: 40vw;
padding: 2em;

border: 0.4em solid red;
border-radius: 2em;
`

export default function App() {
  // States
  const [ pokemonImg, setPokemonImg ] = useState('')
  const [ pokemonName, setPokemonName ] = useState('')

  // Refs
  const inputRef = useRef<HTMLInputElement>(null)

  // Functions
  async function searchPokemon(event: FormEvent) {
    event.preventDefault()
    
    const inputRefValue = inputRef.current?.value

    const response = await api.get("/" + inputRefValue)
    const data = response.data
    const img = data.sprites.versions['generation-v']['black-white'].animated.front_default
    const name = data.name
    setPokemonImg(img)
    setPokemonName(name)
  }

  useEffect(() => {
    api.get("/kyogre").then(response => {
      const data = response.data
      const img = data.sprites.versions['generation-v']['black-white'].animated.front_default
      const name = data.name
      setPokemonImg(img)
      setPokemonName(name)
    })
  }, [])

  return (
    <>
      <ResetCss />
      <Body>
        <Container>
          <div> <img src={pokemonImg} alt="Imagem de um Pokémon" /> </div>
          <div> { pokemonName } </div>
          <div>
            <form onSubmit={searchPokemon}>
              <input type="text" ref={inputRef} placeholder="Digite o nome do Pokemon: "/>
              <button type="submit"> Enviar </button>
            </form>
          </div>
        </Container>
      </Body>
    </>
  )
}