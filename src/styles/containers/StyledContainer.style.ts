import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  height: 80vh;
  margin: auto;
  gap: 1rem;

  > section {
    background-color: var(--color-background-second);
    display: flex;
    padding: 0.8rem 2.5rem;
    border-radius: 0.5rem;
  }
`