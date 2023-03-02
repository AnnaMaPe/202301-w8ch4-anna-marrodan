import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

::before,
::after {
  box-sizing: border-box;
}

body {
  width: 100vw;
  margin: 0;
  padding: 40px;
  font-family: var(--displayFont);
  font-size: 1.25rem;
  padding: 0;
  background-color: var(--primaryColor);
  color: #fff;

}

h1,
h2 {
  margin: 0;
  font-family: var(--titleFont)

}

h1 {
  text-align: center;
  margin-bottom: 100px;
}

ul, ol {
  list-style: none;
  padding: 0;
}

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  font-size: inherit;
  background-color: transparent;
}

#root {
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
`;
