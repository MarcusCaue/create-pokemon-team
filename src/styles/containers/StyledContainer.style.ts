import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  height: 80vh;
  margin: auto;
  gap: 1rem;

  > section {
    background-color: var(--color-background-second);
    display: flex;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    border-radius: 0.5rem;
  }
`