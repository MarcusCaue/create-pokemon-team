import styled, { createGlobalStyle } from "styled-components"

export const Body = styled.div`
  display: flex;
  font-family: 'Inter', sans-serif;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`
export const HeaderPage = styled.header`
  color: var(--color-base-gray-100);
  background-color: var(--color-base-red-700);
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  padding: 1.5rem 0rem;
`
export const ResetCss = createGlobalStyle`
  :root {
    --color-base-red-100:  #F35D69;
    --color-base-red-700:  #F23E50;
    --color-base-gray-100: #f5f4ff;
    --color-base-gray-200: #C6C5CD;
    --color-base-blue-100: #B5D8E0;
    --color-base-blue-700: #73A9DD;
    --color-base-blue-800: #334EF2;
  }

  * {
    margin: 0; padding: 0; border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`