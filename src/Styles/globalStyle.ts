import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  
  html, #root, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  *, button, input {
    border: 0;
    background: none;
    outline: 0;
  }

  body {
    overflow-x: hidden;
  }
`