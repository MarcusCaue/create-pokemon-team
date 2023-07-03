import { Pokemon } from "../../classes/Pokemon";
import { PokemonIcon } from "../PokemonIcon";
import { PokemonLifebar } from "../PokemonLifebar";
import { PokemonNickname } from "../PokemonNickname";
import styled from "styled-components"

const StyledPokemonListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export function PokemonListItem({ pokemon }: { pokemon?: Pokemon}) {
  return (
    <StyledPokemonListItem>
      <PokemonIcon icon={pokemon?.images.icon} />
      <div>
        <PokemonNickname nickname={pokemon?.nickname}/>
        <PokemonLifebar hp={pokemon?.stats.hp} />
      </div>
    </StyledPokemonListItem>
  )
}