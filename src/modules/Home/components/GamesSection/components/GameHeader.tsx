import React from 'react';
import { Icons } from '@/assets/icons';

import { HStack } from '@/components/ui/h-stack';

const GameHeader = () => {
  return (
    <HStack pos="apart">
      <p className="text-[32px] font-medium">Exclusive Games</p>

      <HStack spacing={12} align="center" className="mt-2 cursor-pointer hover:opacity-70">
        <p className="hidden text-[15px] uppercase md:block">See All</p>

        <Icons.grid />
      </HStack>
    </HStack>
  );
};

export default GameHeader;
