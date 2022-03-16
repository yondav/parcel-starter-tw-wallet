import React from 'react';
import tw, { styled, css } from 'twin.macro';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WalletConnect from './components/Button/WalletConnect';

const Wrapper = styled.main`
  ${tw`w-full min-h-screen py-10 px-20 flex flex-col justify-center items-center`}
`;

const App = () => {
  return (
    <Wrapper>
      <div tw='text-center mb-5'>
        <h1 tw='mb-5'>Tailwind Starter</h1>
        <h2>
          Using{' '}
          <a href='https://parceljs.org/' target='_blank' rel='noopener noreferrer'>
            parcel
          </a>{' '}
          <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>
            tailwind
          </a>{' '}
          and{' '}
          <a href='https://github.com/ben-rogerson/twin.macro' target='_blank' rel='noopener noreferrer'>
            twin.macro
          </a>
        </h2>
      </div>
      <WalletConnect />
      <ToastContainer position='bottom-right' theme={'dark'} />
    </Wrapper>
  );
};

export default App;
