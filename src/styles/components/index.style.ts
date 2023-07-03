import styled from "styled-components"

export const StyledButton = styled.button<{ $textColor: string, $bgColor: string }>`
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
export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid var(--color-base-text);
  border-radius: 1rem;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  outline: none;

  &:focus-visible {
    border: 1px solid var(--color-contrast-text);
  }
`
export const StyledPlaceholderToContainer = styled.p`
  font-weight: 600;
  font-size: 1.3rem; 
  text-align: center;
`