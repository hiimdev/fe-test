import React, { type FC } from 'react';
import Link from 'next/link';
import { Icons } from '@/assets/icons';
import { useMenuMobileStore } from '@/stores';
import { ROUTES } from '@/utils/routes';

import { cn } from '@/lib/utils';

const navList = [
  {
    id: 1,
    title: 'HOME',
    href: ROUTES.HOME,
  },
  {
    id: 2,
    title: 'GAME',
    href: ROUTES.PRODUCTS,
  },
  {
    id: 3,
    title: 'INFOR',
    href: ROUTES.SERVICES,
  },
  {
    id: 4,
    title: 'NEWS',
    href: ROUTES.ABOUT,
  },
  {
    id: 5,
    title: 'PROMOTIONS',
    href: ROUTES.PROMOTIONS,
  },
  {
    id: 6,
    title: 'VIP',
    href: ROUTES.VIP,
  },
];

interface INavbarDesktopProps {
  isTransparent?: boolean;
}

const NavbarDesktop = () => {
  return (
    <nav className="group hidden flex-1 items-center space-x-2 lg:flex">
      {navList?.map((item, index) => {
        // const isActive = item?.href === pathname;

        return (
          <Link
            href={item.href}
            key={index}
            className={cn(
              'flex h-[2.375rem] items-center justify-center rounded-lg px-4 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-white/5 hover:!opacity-100 group-hover:opacity-40'
              // {
              //   'text-white hover:bg-white/5': isTransparent,
              //   'bg-black/5 group-hover:bg-black/10': isActive,
              //   'bg-white/5 group-hover:bg-white/10': isTransparent && isActive,
              // }
            )}
          >
            {item?.title}
          </Link>
        );
      })}
    </nav>
  );
};

interface INavbarMobileProps extends INavbarDesktopProps {}

const NavbarMobile: FC<INavbarMobileProps> = ({ isTransparent }) => {
  const isOpen = useMenuMobileStore.use.isOpen();
  const setIsOpen = useMenuMobileStore.use.setIsOpen();

  return (
    <nav className="flex max-w-fit flex-1 items-center lg:hidden">
      <button onClick={() => setIsOpen(true)}>
        <Icons.menuMobile
          className={cn('stroke-white transition-transform duration-300', {
            'scale-50': isOpen,
            'stroke-black': !isTransparent,
          })}
          width={24}
          height={24}
        />
      </button>
    </nav>
  );
};

export { NavbarDesktop, NavbarMobile, navList };
