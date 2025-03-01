import React from 'react';
import { Icons } from '@/assets/icons';

import { HStack } from '@/components/ui/h-stack';

const ProviderHeader = () => {
  return (
    <HStack pos="apart">
      <p className="text-sm font-medium uppercase md:text-[32px] md:capitalize">All Providers</p>

      <HStack spacing={12} align="center" className="cursor-pointer hover:opacity-70">
        <p className="hidden text-[15px] uppercase md:block">See All</p>

        <Icons.grid />
      </HStack>
    </HStack>
  );
};

export default ProviderHeader;
