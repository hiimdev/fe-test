import React from 'react';

import { HStack } from '@/components/ui/h-stack';

import ProviderCard from './ProviderCard';

const providers = [
  {
    title: 'Evolution',
    desc: '312 games',
    imageSrc: '/images/evolution.png',
  },
  {
    title: 'Spribe',
    desc: '12 games',
    imageSrc: '/images/spribe.png',
  },
  {
    title: 'VeliPlay',
    desc: '9 games',
    imageSrc: '/images/veliplay2.png',
  },
  {
    title: 'Turbo Games',
    desc: '36 games',
    imageSrc: '/images/turbo-games.png',
  },
  {
    title: 'SmartSoft',
    desc: '37 games',
    imageSrc: '/images/smart-soft.png',
  },
  {
    title: '100HP Gaming',
    desc: '7 games',
    imageSrc: '/images/100hp.png',
  },
  {
    title: 'BGaming',
    desc: '166 games',
    imageSrc: '/images/b-gaming.png',
  },
  {
    title: 'Wazdan',
    desc: '199 games',
    imageSrc: '/images/wazdan.png',
  },
];

const ProviderList = () => {
  return (
    <HStack noWrap className="w-full gap-2 overflow-auto py-2 md:gap-4 lg:pl-[54px]">
      {providers.map((item, index) => (
        <ProviderCard key={index} desc={item.desc} title={item.title} imageSrc={item.imageSrc} />
      ))}
    </HStack>
  );
};

export default ProviderList;
