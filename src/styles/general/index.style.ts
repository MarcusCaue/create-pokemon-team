import styled, { createGlobalStyle } from "styled-components"

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`

export const HeaderPage = styled.header`
  background-color: gray;
  text-align: center;
  font-size: 2rem;
  padding: 1.5rem 0rem;
`

export const ResetCss = createGlobalStyle`
  * {
    margin: 0; padding: 0; border: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`