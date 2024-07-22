import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
        :root {
    --primary-color: #1D3557;       /* Dark Blue */
    --primary-color-light: #457B9D; /* Medium Blue */
    --primary-color-lighter: #A8DADC; /* Light Blue */
    --color-green: #2A9D8F;        /* Teal */
    --color-grey: #E5E5E5;         /* Light Grey */
    --color-accent: #E63946;       /* Red */
    --color-delete: #F4A261;       /* Orange */
    }

     body {
        font-family: 'Quicksand', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow-x: hidden;
        color: rgba(34, 34, 34, .6);
}
`;