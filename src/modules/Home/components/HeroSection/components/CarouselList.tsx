'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/assets/icons';

import { cn } from '@/lib/utils';
import { useCommonCarousel } from '@/hooks/useCommonCarousel';
import { Button } from '@/components/ui/button';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { HStack } from '@/components/ui/h-stack';
import { Tooltip } from '@/components/ui/tooltip';
import { VStack } from '@/components/ui/v-stack';

const heroData = [
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    desc: 'Exclusive Tournament',
    btnContent: 'JOIN AND WIN',
    imgSrc: '/images/hero.png',
    bgColor: 'bg-gradient-to-b md:bg-gradient-to-br from-[#147261] to-[#082C25]',
  },
  {
    title: 'Win or Get Back up to €100',
    desc: 'Exclusive Tournament',
    btnContent: 'Discover More',
    imgSrc: '/images/hero2.png',
    bgColor: 'bg-gradient-to-b md:bg-gradient-to-br from-[#ff6b6b] to-[#c81d25]',
  },
  {
    title: 'Weekly Jackpot: Up to €50,000',
    desc: 'Join the challenge and grab the prize!',
    btnContent: 'Play Now',
    imgSrc: '/images/hero2.png',
    bgColor: 'bg-gradient-to-b md:bg-gradient-to-br from-[#FFD700] to-[#FF8C00]',
  },
  {
    title: 'Spin & Win: Instant Rewards Await!',
    desc: 'Try your luck and win big prizes',
    btnContent: 'Spin Now',
    imgSrc: '/images/hero2.png',
    bgColor: 'bg-gradient-to-b md:bg-gradient-to-br from-[#1E3A8A] to-[#9333EA]',
  },
  {
    title: 'VIP Club: Exclusive Perks & Rewards',
    desc: 'Become a VIP and enjoy premium benefits',
    btnContent: 'Join VIP',
    imgSrc: '/images/hero2.png',
    bgColor: 'bg-gradient-to-b md:bg-gradient-to-br from-[#B5179E] to-[#7209B7]',
  },
];

const CarouselList = () => {
  const { carouselRef, scrollSnaps, onDotButtonClick, selectedIndex } = useCommonCarousel();

  return (
    <>
      <CarouselContent ref={carouselRef} className="my-[0.9375rem] md:my-5 lg:my-[1.5625rem]">
        {heroData.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn(
              'max-w-[74.7425rem] basis-[85%] transition-all duration-300 lg:ml-14 lg:skew-x-2',
              index === selectedIndex ? '' : 'opacity-20'
            )}
          >
            <HStack
              className={cn(
                'relative h-[26.4375rem] max-w-[74.7425rem] flex-col-reverse items-center justify-start gap-0 rounded-[2rem] border border-[#21413b] md:flex-row',
                item.bgColor
              )}
            >
              <Tooltip variant="light" label={item.desc}>
                <span className="absolute right-4 top-4 z-10 cursor-pointer">
                  <Icons.circleInfo />
                </span>
              </Tooltip>

              <VStack className="mb-12 w-full flex-1 gap-2 md:mb-0 md:gap-[1rem]" justify="center" align="center">
                <p className="max-w-fit rounded-full bg-white/10 px-4 py-[.3125rem] text-center text-[.75rem] font-semibold md:text-[1.3125rem]">
                  {item.desc}
                </p>

                <p className="max-w-[27.4219rem] text-center text-[24px] font-medium lg:text-[2.625rem] lg:font-extrabold">
                  {item.title}
                </p>

                <Button className="min-h-[50px] bg-[#FF0960] px-[57.72px] py-[16.8px] text-[1.3125rem] font-semibold uppercase transition-all duration-300 md:hover:scale-110 lg:px-[5.4644rem]">
                  {item.btnContent}
                </Button>
              </VStack>

              <div className="relative h-[12.5rem] w-full -translate-y-11 md:h-[21.875rem] md:w-[25rem] md:translate-y-0 lg:h-[25.335rem] lg:w-[36.5625rem]">
                <Image src={item.imgSrc} fill alt="" className="object-contain lg:object-cover" />
              </div>
            </HStack>
          </CarouselItem>
        ))}
      </CarouselContent>

      <DotNavigation onDotButtonClick={onDotButtonClick} scrollSnaps={scrollSnaps} selectedIndex={selectedIndex} />
    </>
  );
};

export default CarouselList;

interface DotButtonProps {
  onClick: () => void;
  selected: boolean;
}

const DotButton = ({ onClick, selected }: DotButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex h-[.375rem] w-[.375rem] cursor-pointer items-center justify-center rounded-full',
        selected ? 'bg-white' : 'bg-white/40'
      )}
    />
  );
};

interface DotNavigationProps {
  scrollSnaps: any[];
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
}

export const DotNavigation = ({ scrollSnaps, selectedIndex, onDotButtonClick }: DotNavigationProps) => {
  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-4 lg:hidden">
      {scrollSnaps.map((_, index) => (
        <DotButton key={index} onClick={() => onDotButtonClick(index)} selected={index === selectedIndex} />
      ))}
    </div>
  );
};
