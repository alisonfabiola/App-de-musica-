import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
}

form {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input, button {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    max-width: 300px;
    border-radius: 4px;
    border: 1px solid #ddd;
}

button {
    background-color: #1db954;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #1ed760;
}
`;

export default GlobalStyles;
