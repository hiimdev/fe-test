import React from 'react';

import { Carousel } from '@/components/ui/carousel';

import CarouselList from './components/CarouselList';

const HeroSection = () => {
  return (
    <section className="relative">
      <Carousel opts={{ loop: true }}>
        <CarouselList />
      </Carousel>
    </section>
  );
};

export default HeroSection;
