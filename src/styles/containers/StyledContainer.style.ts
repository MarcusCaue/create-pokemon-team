import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  gap: 1rem;
  margin: 1.5rem auto;

  > section {
    background-color: var(--color-background-second);
    display: flex;
    padding: 0.8rem 2.5rem;
    border-radius: 0.5rem;
  }
`