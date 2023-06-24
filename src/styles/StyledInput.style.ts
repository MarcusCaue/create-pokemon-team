import styled from "styled-components"

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