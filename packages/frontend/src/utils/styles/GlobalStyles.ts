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
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden; 
        overflow-y: auto;
    }

    body {
        background-color: ${({ theme }) => theme.primary};
    }

    #root {
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        margin-block: 3px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 25px;
    }

    :hover::-webkit-scrollbar-thumb {
        background-color: #575757;  
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #373737;
    }

`;
