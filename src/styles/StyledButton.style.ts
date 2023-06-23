import styled from "styled-components"

export const StyledButton = styled.button<{$textColor: string, $bgColor: string}>`
  padding: 0.3rem 2rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  border: 1px solid black;
  cursor: pointer;
  color: ${props => props.$textColor};
  background-color: ${props => props.$bgColor};
  font-weight: 600;

  &:hover {
    filter: brightness(1.25);
  }
`