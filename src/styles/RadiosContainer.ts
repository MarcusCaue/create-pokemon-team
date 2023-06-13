import styled from "styled-components"

export const RadiosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 0rem;

  div {
    display: flex;  
    gap: 0.4rem;
    font-size: 1.25rem;
  }

  input[type="radio"] {
    cursor: pointer;
  }
`