'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/utils/routes';

import { cn } from '@/lib/utils';

// type TData = {
//   title: string;
//   description: string;
//   mailContact: string;
//   contactAddress: string;
//   mailTo: string;
// };

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={cn({
        'bg-dark': pathname === ROUTES.CONTACT,
      })}
    >
      footer
    </footer>
  );
};

export default Footer;
