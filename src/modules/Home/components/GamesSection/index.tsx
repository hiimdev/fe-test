import React from 'react';

import { Carousel } from '@/components/ui/carousel';
import { VStack } from '@/components/ui/v-stack';

import GameHeader from './components/GameHeader';
import GameList from './components/GameList';

const GamesSection = () => {
  return (
    <VStack className="container mx-auto px-4 md:gap-[20px] lg:px-0">
      <GameHeader />

      <Carousel opts={{ loop: false }}>
        <GameList />
      </Carousel>
    </VStack>
  );
};

export default GamesSection;
