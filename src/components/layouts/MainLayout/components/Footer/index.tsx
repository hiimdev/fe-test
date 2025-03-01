'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HStack } from '@/components/ui/h-stack';
import { VStack } from '@/components/ui/v-stack';

const socialIcons = [
  { name: 'telegram', link: '/images/telegram.png' },
  { name: 'facebook', link: '/images/facebook.png' },
  { name: 'instagram', link: '/images/insta.png' },
  { name: 'twitter', link: '/images/twitter.png' },
];

const accordionData = [
  {
    title: 'Game',
    items: ['Game 1', 'Game 2', 'Game 3', 'Game 14'],
  },
  {
    title: 'About',
    items: ['About Us', 'Promotions', 'VIP', 'Help Center', 'Awards & Certificates', 'App'],
  },
  {
    title: 'Legal',
    items: [
      'General Terms & Conditions',
      'Responsible Gaming Policy',
      'Sports Betting Rules',
      'Privacy and Cookies Policy',
      'Payment Methods',
      'Limits',
    ],
  },
];

const games = ['Game 1', 'Game 2', 'Game 3', 'Game 14'];
const aboutList = ['About Us', 'Promotions', 'VIP', 'Help Center', 'Awards & Certificates', 'App'];
const legalList = [
  'General Terms & Conditions',
  'Responsible Gaming Policy',
  'Sports Betting Rules',
  'Privacy and Cookies Policy',
  'Payment Methods',
  'Limits',
];

const FooterList = ({ title, items }: { title: string; items: string[] }) => (
  <VStack className="gap-5 text-[15px]">
    <p className="font-medium">{title}</p>
    {items.map((item, index) => (
      <p key={index} className="cursor-pointer text-[#90A2BD] hover:opacity-70">
        {item}
      </p>
    ))}
  </VStack>
);

const SocialIcons = () => (
  <HStack className="justify-center gap-8 md:gap-4 lg:justify-start">
    {socialIcons.map((icon, index) => (
      <div
        key={index}
        className="relative h-[30px] w-[30px] cursor-pointer transition-all duration-300 hover:opacity-70 md:hover:scale-110"
      >
        <Image alt={icon.name} fill src={icon.link} />
      </div>
    ))}
  </HStack>
);

const Footer = () => {
  const [value, setValue] = useState('');

  return (
    <footer className="bg-[#12294A] px-4 py-[60px] lg:px-0">
      <HStack pos="apart" align="start" className="container mx-auto flex-col gap-4 md:flex-row lg:gap-[158px]">
        <Accordion
          value={value}
          onValueChange={setValue}
          type="single"
          collapsible
          className="w-full space-y-4 lg:hidden"
        >
          {accordionData?.map((item, index) => (
            <AccordionItem
              value={`item-${item?.title}`}
              key={`${item?.title}-${index}`}
              className="rounded-[10px] bg-[#1A3157]"
            >
              <AccordionTrigger className="py-[13px]">
                <span className="text-base md:text-lg lg:text-xl">{item?.title || ''}</span>
              </AccordionTrigger>
              <AccordionContent>
                <VStack spacing={16}>
                  {item?.items?.map((item, index) => (
                    <p key={index} className="text-[#90A2BD]">
                      {item || ''}
                    </p>
                  ))}
                </VStack>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <VStack className="mb-14 w-full gap-6 md:gap-2 lg:mb-0 lg:w-auto">
          <p className="hidden text-2xl font-medium lg:block">Help Center</p>
          <p className="mb-2 hidden text-[15px] text-[#90A2BD] lg:block">If you have any questions?</p>
          <Button className="mb-6 hidden bg-[#3555FF] text-[13px] uppercase transition-all duration-300 md:hover:scale-110 lg:block">
            get answers
          </Button>

          <p className="text-center font-medium lg:hidden">Follow Us</p>
          <SocialIcons />
        </VStack>

        <HStack className="hidden flex-1 gap-[158px] lg:flex" align="start">
          <FooterList title="Games" items={games} />
          <FooterList title="About" items={aboutList} />
          <FooterList title="Legal Information" items={legalList} />
        </HStack>

        <HStack
          className="w-full rounded-[10px] bg-[#1A3157] px-[24px] py-[18px] lg:hidden"
          align="center"
          pos="apart"
          noWrap
        >
          <div>
            <p className="font-medium">Help Center</p>
            <p className="text-[13px] text-[#90A2BD]">If you have any questions?</p>
          </div>
          <Button className="bg-[#3555FF] text-[13px] uppercase transition-all duration-300 md:hover:scale-110">
            get answers
          </Button>
        </HStack>

        <VStack className="hidden gap-2 text-[15px] lg:flex">
          <HStack
            spacing={0}
            className="max-w-[160px] cursor-pointer rounded-[8px] bg-[#1A3157] px-[10px] py-[6px] hover:opacity-70"
            noWrap
          >
            <Image alt="Mac OS App" width={42} height={42} src="/images/apple.png" className="object-contain" />
            <p className="flex-1 font-medium">Bluechip App for Mac OS</p>
          </HStack>

          <HStack spacing={8} pos="apart">
            {['android', 'apple'].map((platform, index) => (
              <VStack
                key={index}
                spacing={0}
                justify="center"
                className="flex-1 cursor-pointer rounded-[10px] bg-[#1A3157] px-[11.55px] hover:opacity-70"
              >
                <div className="flex items-center justify-center">
                  <Image
                    alt={platform}
                    width={42}
                    height={42}
                    src={`/images/${platform}.png`}
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-[#90A2BD]">{platform === 'android' ? 'Android' : 'iOS'}</p>
              </VStack>
            ))}
          </HStack>
        </VStack>

        <HStack spacing={8} pos="apart" className="w-full lg:hidden">
          <HStack
            spacing={0}
            className="flex-1 cursor-pointer rounded-[8px] bg-[#1A3157] px-[10px] py-[6px] hover:opacity-70"
            noWrap
          >
            <Image alt="Mac OS App" width={42} height={42} src="/images/android.png" className="object-contain" />
            <VStack spacing={0}>
              <p className="font-medium">Bluechip App</p>
              <p className="text-[12px] text-[#90A2BD]">for Android</p>
            </VStack>
          </HStack>

          <HStack
            spacing={0}
            className="flex-1 cursor-pointer rounded-[8px] bg-[#1A3157] px-[10px] py-[6px] hover:opacity-70"
            noWrap
          >
            <Image alt="Mac OS App" width={42} height={42} src="/images/apple.png" className="object-contain" />
            <VStack spacing={0}>
              <p className="font-medium">Bluechip App</p>
              <p className="text-[12px] text-[#90A2BD]">for iOS</p>
            </VStack>
          </HStack>
        </HStack>
      </HStack>
    </footer>
  );
};

export default Footer;
