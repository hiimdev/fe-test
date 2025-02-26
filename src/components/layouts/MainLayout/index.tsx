'use client';

import React from 'react';
import { AppContextProvider } from '@/context/app.context';
import { type FCC } from '@/types';

import BackToTopButton from '@/components/BackToTopButton';

const MainLayout: FCC = ({ children }) => {
  return (
    <AppContextProvider value={{}}>
      <main>
        <div>{children}</div>
      </main>
      <BackToTopButton />
    </AppContextProvider>
  );
};

export default MainLayout;
