import React from 'react';

import { Carousel } from '@/components/ui/carousel';

import CarouselList from './components/CarouselList';

const HeroSection = () => {
  return (
    <section className="relative pb-4">
      <Carousel opts={{ loop: true, align: 'center' }}>
        <CarouselList />
      </Carousel>
    </section>
  );
};

export default HeroSection;
