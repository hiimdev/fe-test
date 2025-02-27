'use client';

import React from 'react';
import { AppContextProvider } from '@/context/app.context';
import { type FCC } from '@/types';

import { TooltipProvider } from '@/components/ui/tooltip';
import BackToTopButton from '@/components/BackToTopButton';
import MobileMenu from '@/components/MobileMenu';

import Footer from './components/Footer';
import Header from './components/Header';

const MainLayout: FCC = ({ children }) => {
  return (
    <AppContextProvider value={{}}>
      <Header />
      <main>
        <TooltipProvider>
          <div>{children}</div>
        </TooltipProvider>
      </main>
      <Footer />
      <MobileMenu />
      <BackToTopButton />
    </AppContextProvider>
  );
};

export default MainLayout;
