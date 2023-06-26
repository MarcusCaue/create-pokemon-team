export function PokemonIcon({ icon }: { icon?: string }) {
  return (
    <div>
      <img style={{width: '5rem'}} src={icon} alt="Ícone do Pokemon" />
    </div>
  )
}