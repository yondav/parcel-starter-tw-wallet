import tw, { styled, css } from 'twin.macro';

export const Button = styled.button((props: { wallet?: boolean }) => [
  css`
    ${tw`block text-sm font-semibold px-5 py-4 text-center transition-all duration-700 hover:shadow-md whitespace-nowrap`}
    line-height: 1.06rem;
    border-radius: 10px;
  `,

  props.wallet &&
    css`
      ${tw`bg-gradient-to-l	from-yellow-500 via-purple-600 via-yellow-600 to-purple-700`}
      background-size: 400%;

      &:hover {
        background-size: 200%;
        background-position: right center;
      }
    `,
]);
