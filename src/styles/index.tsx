import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
:root {
  --font-primary: 'Montserrat', sans-serif;
}

.dark {}

.Toastify__progress-bar {}

html {
  ${tw`min-w-[350px] text-base`}
}

body {
  ${tw`font-primary font-normal bg-gray-900 text-gray-100`}
}

h1 {
  ${tw`font-bold	text-5xl	leading-10`}
}

h2 {
  ${tw`font-bold	text-4xl	leading-9`}
}

h3 {
  ${tw`font-semibold	text-3xl	leading-8`}
}

p {}

a {
  ${tw`text-purple-500 hover:text-yellow-500 transition-all duration-300 ease-in`}
  text-decoration: none;
}

.Toastify__progress-bar {
  ${tw`bg-purple-700 bg-gradient-to-l	from-yellow-500 via-purple-600 via-yellow-600 to-purple-700`}
}

.Toastify__toast {
  ${tw`bg-gray-900`}
  box-shadow: 0 6px 30px 0 rgba(126 34 206 / 0.1), 0 -4px 25px -1px rgb(126 34 206 / 0.1);
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;

//312e81
