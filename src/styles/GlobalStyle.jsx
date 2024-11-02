import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(45deg, #ff00ff, #00008b); /* Degradado */
    color: #fff;
    }



    h1 {
    font-family: 'Poppins', sans-serif; /* Cambia la fuente  */
    font-size: 3rem; /* Aumenta el tamaño del texto */
    font-weight: bold;
    color: #ff6a88; /* Cambia el color a un tono llamativo */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Añade una sombra suave */
    text-align: center;
    margin-bottom: 10px;
}

    h2 {
        color: #f7f8fc;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .card {
        background: linear-gradient(45deg, #9d50bb, #ff6a88); /* Degradado morado a rosado */

        color: #fff;
        border: none; /* Quita el borde para que se vea mejor */
        border-radius: 30px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-header {
        background: transparent;
        font-size: 1.25rem;
        font-weight: bold;
        color: #fff;
    }

`;

export default GlobalStyle;
