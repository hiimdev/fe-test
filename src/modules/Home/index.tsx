'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/assets/icons';

import { VStack } from '@/components/ui/v-stack';

const HomePage = () => {
  return (
    <VStack spacing={64} className="mb-24 space-y-2 md:space-y-12">
      home page Hot Match
      <div className="relative w-20 h-20">
        <Image src="/images/game1.png" alt="" fill className="object-cover" />
      </div>
      <Icons.games className="w-20 h-20 text-black" />
    </VStack>
  );
};

export default HomePage;
