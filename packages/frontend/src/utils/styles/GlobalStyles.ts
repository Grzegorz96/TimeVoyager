import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamilyArial};
    -webkit-tap-highlight-color: transparent;
    }       

    html, body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden; 
        overflow-y: auto;
        scrollbar-gutter: stable;
    }

    body {
        background-color: ${({ theme }) => theme.primary};
    }

    #root {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #575757;
    }
   
    ::-webkit-scrollbar-thumb:hover {
        background-color: #373737;
    }

`;
