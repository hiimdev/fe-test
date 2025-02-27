import React from 'react';
import { Icons } from '@/assets/icons';

import useMobile from '@/hooks/useMobile';
import { HStack } from '@/components/ui/h-stack';
import { Show } from '@/components/Show';

import CategoryItem from './CategoryItem';

const categories = [
  {
    title: 'Diamond mine',
    icon: null,
    imageSrc: '/images/diamond.png',
  },
  {
    title: 'VIP',
    icon: null,
    imageSrc: '/images/vip.png',
  },
  {
    title: 'Promotion',
    icon: null,
    imageSrc: '/images/gift.png',
  },
  {
    title: 'Hot Match',
    icon: null,
    imageSrc: '/images/ball.png',
  },
  {
    title: 'P2P Transaction',
    icon: null,
    imageSrc: '/images/token.png',
  },
  {
    title: 'Games',
    icon: <Icons.games className="h-[24px] w-[24px]" />,
    imageSrc: '',
    isActive: true,
  },
  {
    title: 'Providers',
    icon: <Icons.provider className="h-[24px] w-[24px]" />,
    imageSrc: '',
    isActive: true,
  },
];

const categoriesMobile = [
  {
    title: 'Search',
    icon: <Icons.search className="h-[24px] w-[24px]" />,
    imageSrc: '',
    isActive: true,
  },
  {
    title: 'Games',
    icon: <Icons.games className="h-[24px] w-[24px]" />,
    imageSrc: '',
    isActive: true,
  },
  {
    title: 'Providers',
    icon: <Icons.provider className="h-[24px] w-[24px]" />,
    imageSrc: '',
    isActive: true,
  },
];

const CategoryList = () => {
  const isMobile = useMobile();

  return (
    <HStack spacing={8} pos="center" className="mx-[10px] pb-2 lg:mx-0">
      <Show when={!isMobile}>
        {categories.map((item, index) => (
          <CategoryItem key={index} title={item.title} icon={item.icon} imageSrc={item.imageSrc} />
        ))}
      </Show>

      <Show when={isMobile}>
        {categoriesMobile.map((item, index) => (
          <CategoryItem key={index} title={item.title} icon={item.icon} imageSrc={item.imageSrc} />
        ))}
      </Show>
    </HStack>
  );
};

export default CategoryList;
