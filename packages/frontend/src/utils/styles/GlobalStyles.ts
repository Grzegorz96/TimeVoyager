import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fontFamilyArial};
        -webkit-tap-highlight-color: transparent;
    }       

    html {
        width: 100vw; 
        height: 100vh; 
        overflow: hidden;
    }
    
    body {
        width: 100%;
        height: 100%;
        overflow-x: hidden; 
        overflow-y: auto;
        scrollbar-gutter: stable;
        background-color: ${({ theme }) => theme.primary};
    }

    #root {
        min-height: 100%;
        width: 100%; 
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
