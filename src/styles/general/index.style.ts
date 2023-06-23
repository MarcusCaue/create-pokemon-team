import styled, { createGlobalStyle } from "styled-components"
import { StylesMode } from "../../interfaces"

export const Body = styled.div`
  background-color: var(--color-background-one);
  color: var(--color-base-text);
  display: flex;
  font-family: 'Inter', sans-serif;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`
export const HeaderPage = styled.header`
  color: var(--color-base-text);
  background-color: var(--color-background-second);
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  height: 15vh;
  line-height: 15vh;
`

const globalStyles = {
  ligthMode: {
    baseText: "#f5f4ff",
    contrastText: "#334EF2",
    backgroundOne: "#F23E50",
    backgroundSecond: "#F35D69",
  },
  darkMode: {
    baseText: "#00D9FF",
    contrastText: "#EC9D08",
    backgroundOne: "#030712",
    backgroundSecond: "#1F2937",
  }
}
export const ResetGlobalCss = createGlobalStyle<{ $darkModeActived: boolean, $stylesOfSelectedMode?: StylesMode }>`
  :root {
    --color-base-red-100:  #F35D69;
    --color-base-red-700:  #F23E50;
    --color-base-gray-100: #f5f4ff;
    --color-base-gray-200: #C6C5CD;
    --color-base-blue-100: #B5D8E0;
    --color-base-blue-700: #73A9DD;
    --color-base-blue-800: #334EF2;

    /* Setando as cores do modo selecionado */
    ${props => {
      if (props.$darkModeActived) {
        props.$stylesOfSelectedMode = globalStyles.darkMode
      } else {
        props.$stylesOfSelectedMode = globalStyles.ligthMode
      }
      return ""
    }}

    /* Dark Mode */
    --color-base-text: ${props => props.$stylesOfSelectedMode?.baseText};
    --color-contrast-text: ${props => props.$stylesOfSelectedMode?.contrastText};
    --color-background-one: ${props => props.$stylesOfSelectedMode?.backgroundOne};
    --color-background-second: ${props => props.$stylesOfSelectedMode?.backgroundSecond};
  }

  * {
    margin: 0; padding: 0; border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`