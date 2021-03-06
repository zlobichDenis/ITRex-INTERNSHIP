import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    body {
        height: 100%;
    }

    ul[class],
    ol[class] {
    padding: 0;
    list-style: none;
    }

    button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    }
    
    a{
      text-underline: none;
      text-decoration: none;
    }

    html,
    main,
    body,
    div,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
    margin: 0;
    padding: 0;
    }
`;
