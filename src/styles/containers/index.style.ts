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
export const StyledSearchPokemon = styled.section`
  flex-direction: column;
  justify-content: space-around;
  width: 60vw;
  padding-right: 2.5rem;
  padding-left: 2.5rem;

  > section {
    display: flex;
  }
`
export const StyledTeamPokemon = styled.section`
  width: 24vw;
  padding-right: 1rem;
  padding-left: 1rem;
  align-items: center;
  gap: 0.5rem;

  > ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`