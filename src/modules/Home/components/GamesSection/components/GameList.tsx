import React from 'react';

import { cn } from '@/lib/utils';
import { useCommonCarousel } from '@/hooks/useCommonCarousel';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { HStack } from '@/components/ui/h-stack';

import GameCard from './GameCard';

const Games = [
  {
    icon: '/images/hot.png',
    title: '100HP Gaming',
    imageSrc: '/images/game1.png',
  },
  {
    icon: '/images/hot.png',
    title: 'VeliPlay',
    imageSrc: '/images/game2.png',
  },
  {
    icon: '/images/new.png',
    title: 'Evolution',
    imageSrc: '/images/game3.png',
  },
  {
    icon: '',
    title: 'VeliPlay',
    imageSrc: '/images/game4.png',
  },
  {
    icon: '/images/hot.png',
    title: 'Onlyplay',
    imageSrc: '/images/game5.png',
  },
  {
    icon: '',
    title: 'VeliPlay',
    imageSrc: '/images/game1.png',
  },
  {
    icon: '',
    title: 'VeliPlay',
    imageSrc: '/images/game2.png',
  },
  {
    icon: '/images/new.png',
    title: 'VeliPlay',
    imageSrc: '/images/game3.png',
  },
  {
    icon: '/images/hot.png',
    title: 'VeliPlay',
    imageSrc: '/images/game4.png',
  },
  {
    icon: '',
    title: 'VeliPlay',
    imageSrc: '/images/game5.png',
  },
  {
    icon: '/images/hot.png',
    title: 'VeliPlay',
    imageSrc: '/images/game4.png',
  },
  {
    icon: '/images/new.png',
    title: 'VeliPlay',
    imageSrc: '/images/game5.png',
  },
];

const GameList = () => {
  const { carouselRef, selectedIndex } = useCommonCarousel();

  return (
    <HStack>
      <CarouselContent ref={carouselRef} className="my-[0.9375rem] md:my-5 lg:my-[1.5625rem]">
        {Games.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn('basis-1/2 sm:basis-1/4 md:basis-1/4 lg:basis-[12%]', index === selectedIndex ? '' : '')}
          >
            <GameCard key={index} icon={item.icon} title={item.title} imageSrc={item.imageSrc} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </HStack>
  );
};

export default GameList;
