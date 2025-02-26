import { env } from '@/utils/const';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Nevel Tech',
  metaTitle: 'Nevel Tech',
  description: 'Nevel Tech',
  ogImage: `${env.APP_URL}/og-image.png`,
};
