import { Pokemon } from "../classes/Pokemon";
import { PokemonIcon } from "./PokemonIcon";
import { PokemonLifebar } from "./PokemonLifebar";
import { PokemonNickname } from "./PokemonNickname";

export function PokemonListItem({ pokemon }: { pokemon?: Pokemon}) {
  return (
    <div>
      <PokemonIcon icon={pokemon?.images.icon} />
      <PokemonNickname />
      <PokemonLifebar />
    </div>
  )
}