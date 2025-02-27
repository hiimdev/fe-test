import React from 'react';
import Image from 'next/image';

import { VStack } from '@/components/ui/v-stack';

type Props = {
  desc: string;
  title: string;
  imageSrc: string;
};

const ProviderCard = ({ title, desc, imageSrc }: Props) => {
  return (
    <VStack
      className="relative h-auto w-[156px] cursor-pointer space-y-[22px] rounded-[8px] bg-[#12294A] px-4 pb-[76px] pt-4 transition-all duration-300 hover:scale-110 hover:opacity-70 md:px-8"
      justify="center"
      align="center"
    >
      <div className="relative h-[30px] w-[93px]">
        <Image src={imageSrc} fill alt="provider-card" className="object-contain" />
      </div>

      <VStack
        className="absolute inset-x-0 bottom-0 h-[54px] bg-[#F5F9FF0D] text-center underline underline-offset-2"
        align="center"
        justify="center"
        spacing={4}
      >
        <p className="text-[13px]">{title}</p>
        <p className="text-[11px] text-[#90A2BD]">{desc}</p>
      </VStack>
    </VStack>
  );
};

export default ProviderCard;
