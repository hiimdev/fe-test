'use client';

import React from 'react';

import { VStack } from '@/components/ui/v-stack';

import Categories from './components/Categories';
import GamesSection from './components/GamesSection';
import HeroSection from './components/HeroSection';
import ProviderSection from './components/ProviderSection';

const HomePage = () => {
  return (
    <VStack className="mb-24 gap-8 pt-[6.25rem] lg:gap-8">
      <HeroSection />

      <Categories />

      <GamesSection />

      <ProviderSection />
    </VStack>
  );
};

export default HomePage;
