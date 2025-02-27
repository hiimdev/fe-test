'use client';

import React from 'react';

import { VStack } from '@/components/ui/v-stack';

import Categories from './components/Categories';
import GamesSection from './components/GamesSection';
import HeroSection from './components/HeroSection';

const HomePage = () => {
  return (
    <VStack className="mb-24 gap-8 pt-[6.25rem] lg:gap-8">
      <HeroSection />

      <Categories />

      <GamesSection />
    </VStack>
  );
};

export default HomePage;
