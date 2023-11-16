import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Anton';
  src: url('/fonts/Anton-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Arabic-bold';
  src: url('/fonts/ReemKufi-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Feather';
  src: url('/fonts/Feather Bold.ttf') format('truetype');
}

:root {
  --primary-blue-500: #43a0d8;
  --primary-blue-400: #3680ad;
  --primary-blue-300: #286082;
  --primary-blue-200: #1b4056;
  --primary-blue-100: #0d202b;
  --primary-blue-600: #56aadc;
  --primary-blue-700: #7bbde4;
  --primary-blue-800: #a1d0ec;
  --primary-blue-900: #b4d9ef;

  --primary-blue-dark-500: #252D63;
  --primary-blue-dark-400: #1e244f;
  --primary-blue-dark-300: #161b3b;
  --primary-blue-dark-200: #0f1228;
  --primary-blue-dark-100: #070914;
  --primary-blue-dark-600: #3b4273;
  --primary-blue-dark-700: #515782;
  --primary-blue-dark-800: #666c92;
  --primary-blue-dark-900: #7c81a1;

  --primary-green-500: #99e7d9;
  --primary-green-400: #7ab9ae;
  --primary-green-300: #5c8b82;
  --primary-green-200: #3d5c57;
  --primary-green-100: #1f2e2b;
  --primary-green-600: #adece1;
  --primary-green-700: #c2f1e8;
  --primary-green-800: #ccf3ec;
  --primary-green-900: #d6f5f0;

  --homepage-blue: #1a4a61;
  --homepage-grey: #bbc4c1;
}

a {
    text-decoration: none;
    color: inherit;
}

body {
  margin: 0;
    font-family: sans-serif;
}

input,
button,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}
`;

export default GlobalStyle;
