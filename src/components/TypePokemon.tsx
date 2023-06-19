import styled from "styled-components"

const typesColors = new Map([
  ["normal",    {bgColor: "#ffffff", textColor: "#000000"}],
  ["fire",      {bgColor: "#FD7D24", textColor: "#000000"}],
  ["water",     {bgColor: "#4592C4", textColor: "#ffffff"}],
  ["grass",     {bgColor: "#9BCC50", textColor: "#ffffff"}],
  ["bug",       {bgColor: "#616161", textColor: "#000000"}],
  ["fairy",     {bgColor: "#FDB9E9", textColor: "#000000"}],
  ["fighting",  {bgColor: "#D56723", textColor: "#000000"}],
  ["rock",      {bgColor: "#A38C21", textColor: "#ffffff"}],
  ["ice",       {bgColor: "#51C4E7", textColor: "#000000"}],
  ["dark",      {bgColor: "#707070", textColor: "#000000"}],
  ["ghost",     {bgColor: "#7B62A3", textColor: "#ffffff"}],
  ["psychic",   {bgColor: "#F366B9", textColor: "#000000"}],
  ["poison",    {bgColor: "#B97FC9", textColor: "#000000"}],
  ["electric",  {bgColor: "#EED535", textColor: "#000000"}],
  ["ground",    {bgColor: "#736154", textColor: "#ffffff"}],
  ["steel",     {bgColor: "#807C84", textColor: "#ffffff"}],
  ["dragon",    {bgColor: "#FF0000", textColor: "#ffffff"}],
  ["flying",    {bgColor: "#FFFDD0", textColor: "#000000"}],
])

const TypePokemonStyle = styled.span<{$type: string}>`
  background-color: ${props => {console.log(typesColors.get(props.$type)?.bgColor); return typesColors.get(props.$type)?.bgColor}};
  color: ${props => typesColors.get(props.$type)?.textColor};

  border: 1px solid black;
  border-radius: 9999px;
  padding: 0.3rem 0.8rem;
`
const TypesPokemonContainerStyle = styled.div`
  display: flex;
  gap: 0.2rem;
`

interface TypePokemonProps {
  types: string[] | undefined
}

export function TypePokemon({ types }: TypePokemonProps) {
  console.log(typesColors.get("psychic")?.bgColor)

  return (
    <TypesPokemonContainerStyle>
      { 
        types?.map((type, key) => <TypePokemonStyle key={key} $type={type}> { type } </TypePokemonStyle>) 
      }
    </TypesPokemonContainerStyle>
  )
}