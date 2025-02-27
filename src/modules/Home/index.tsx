'use client';

import React from 'react';

import { VStack } from '@/components/ui/v-stack';

import HeroSection from './components/HeroSection';

const HomePage = () => {
  return (
    <VStack spacing={64} className="mb-24 pt-[6.25rem]">
      <HeroSection />
    </VStack>
  );
};

export default HomePage;
