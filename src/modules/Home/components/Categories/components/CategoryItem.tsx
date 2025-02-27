import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { HStack } from '@/components/ui/h-stack';

type Props = {
  icon?: React.ReactNode;
  title: string;
  imageSrc?: string;
};

const CategoryItem = ({ icon, title, imageSrc }: Props) => {
  return (
    <HStack
      noWrap
      pos="center"
      spacing={12}
      align="center"
      className={cn(
        'max-w-fit cursor-pointer rounded-[10px] border border-white/10 px-[17px] py-4 transition-all duration-300 hover:scale-90 hover:opacity-70 md:min-w-[197.14px] md:px-[20px]',
        !!icon && 'bg-[#12294A]'
      )}
    >
      {imageSrc && <Image src={imageSrc} width={24} height={24} alt="category-item" className="object-contain" />}
      {icon && icon}
      <p className="text-sm font-normal md:text-base">{title}</p>
    </HStack>
  );
};

export default CategoryItem;
