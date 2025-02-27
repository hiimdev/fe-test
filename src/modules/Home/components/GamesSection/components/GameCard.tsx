import React from 'react';
import Image from 'next/image';

type Props = {
  icon?: string;
  title: string;
  imageSrc: string;
};

const GameCard = ({ title, icon, imageSrc }: Props) => {
  return (
    <div className="relative h-[210.6px] w-[156px] cursor-pointer overflow-hidden rounded-[8px] transition-all duration-300 hover:scale-110 hover:opacity-70">
      <Image src={imageSrc} alt="game-card" fill className="object-contain" />

      {icon && (
        <Image src={icon} alt="icon-card" width={36} height={21} className="absolute -left-1 top-4 object-contain" />
      )}

      <p className="absolute inset-x-0 bottom-[2px] text-center text-xs font-medium">{title}</p>
    </div>
  );
};

export default GameCard;
