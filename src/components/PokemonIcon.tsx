

export function PokemonIcon({ icon }: { icon?: string }) {
  return (
    <div>
      <img src={icon} alt="Ícone do Pokemon" />
    </div>
  )
}