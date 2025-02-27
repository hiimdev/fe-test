import React from 'react';

import { VStack } from '@/components/ui/v-stack';

import ProviderHeader from './components/ProviderHeader';
import ProviderList from './components/ProviderList';

const ProviderSection = () => {
  return (
    <VStack className="container mx-auto gap-[40px] px-4 lg:px-0">
      <ProviderHeader />

      <ProviderList />
    </VStack>
  );
};

export default ProviderSection;
