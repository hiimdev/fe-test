'use client';

import React from 'react';
import Link from 'next/link';
import { Icons } from '@/assets/icons';
import { ROUTES } from '@/utils/routes';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HStack } from '@/components/ui/h-stack';
import { Logo } from '@/components/logo';

import { NavbarDesktop, NavbarMobile } from './Navbar';

const Header: React.FC = () => {
  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex h-[3.75rem] items-center justify-center border-b border-[#F5F9FF0D] bg-[#03193A] px-4 py-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 md:h-[4.25rem] xl:p-0'
      )}
    >
      <HStack align="center" className="container h-[3.75rem] flex-1 gap-14 md:h-[4.25rem]" pos="apart" noWrap>
        <HStack>
          <NavbarMobile />

          <Link href={ROUTES.HOME}>
            <Logo src="/logo.png" className="h-[1.125rem] w-10 md:h-[1.875rem] md:w-[4.25rem]" alt="logo" />
          </Link>
        </HStack>

        <HStack className="hidden flex-1 lg:flex">
          <span className="cursor-pointer duration-300 hover:opacity-70 md:hover:scale-90">
            <Icons.search />
          </span>

          <NavbarDesktop />
        </HStack>

        <HStack className="gap-2 md:gap-3">
          <Button className="transition-all duration-300 md:hover:scale-110">LOGIN</Button>

          <Button className="bg-[#01AF70] uppercase transition-all duration-300 md:hover:scale-110">
            Registration
          </Button>
        </HStack>
      </HStack>
    </motion.header>
  );
};

export default Header;
