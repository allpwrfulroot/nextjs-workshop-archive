import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Abel;
    src: url('/fonts/Abel-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: SourceCP;
    src: url('/fonts/SourceCodePro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: SourceCP;
    src: url('/fonts/SourceCodePro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.default}, sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`

export default GlobalStyle
