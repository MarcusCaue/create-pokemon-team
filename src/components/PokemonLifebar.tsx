export function PokemonLifebar({ hp } : { hp?: number }) {
  return (
    <div>
      { `HP: ` + hp }
    </div>
  )
}