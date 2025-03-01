import React from 'react';

import { VStack } from '@/components/ui/v-stack';

import ProviderHeader from './components/ProviderHeader';
import ProviderList from './components/ProviderList';

const ProviderSection = () => {
  return (
    <VStack className="container mx-auto px-4 md:gap-[40px] lg:px-0">
      <ProviderHeader />

      <ProviderList />
    </VStack>
  );
};

export default ProviderSection;
