import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    :root {
        --black: #000000;
        --pink-chock: #e64980;
        --cute-pink: #E3A5D8;
        --grey: #b197fc;
    }

    body {
        font-family: 'Gloria Hallelujah';
    }

    ul {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
