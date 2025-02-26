'use client';

import React from 'react';
import Link from 'next/link';
import { Icons } from '@/assets/icons';
import { useMenuMobileStore } from '@/stores';
import { ROUTES } from '@/utils/routes';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { navList } from './layouts/MainLayout/components/Header/Navbar';
import { Logo } from './logo';
import { HStack } from './ui/h-stack';
import { VStack } from './ui/v-stack';

const MobileMenu = () => {
  const isOpen = useMenuMobileStore.use.isOpen();
  const setIsOpen = useMenuMobileStore.use.setIsOpen();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-[#0e203a] transition-opacity duration-300',
        {
          'hidden pointer-events-none': !isOpen,
        }
      )}
    >
      <VStack align="center" className="h-full w-full px-4 md:px-0">
        <HStack
          pos="apart"
          align="center"
          className="container h-[5.125rem] md:h-[6.5625rem] lg:max-w-none lg:px-[70px]"
        >
          <Link href={ROUTES.HOME}>
            <Logo src="/logo.png" className="h-[1.875rem] w-[4.25rem]" alt="logo" />
          </Link>

          <button onClick={() => setIsOpen(false)}>
            <Icons.x
              className={cn('text-white transition-transform duration-300', {
                'scale-50': !isOpen,
              })}
            />
          </button>
        </HStack>

        <VStack justify="between" className="container w-full flex-1 pb-[1.875rem]">
          <VStack spacing={0} className="my-3.5 w-full">
            {navList?.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isOpen ? 'visible' : 'hidden'}
                  variants={variants}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex h-[3.0625rem] w-full items-center text-lg font-medium text-white"
                  >
                    {item?.title}
                  </Link>
                </motion.div>
              );
            })}
          </VStack>
        </VStack>
      </VStack>
    </div>
  );
};

export default MobileMenu;
