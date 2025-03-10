import { type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';
import { X } from 'lucide-react';

import alignLeft from './svg/align-left.svg';
import circleInfo from './svg/circle-info.svg';
import efficiency from './svg/efficiency.svg';
import expertise from './svg/expertise.svg';
import games from './svg/games.svg';
import genAi from './svg/gen-ai.svg';
import grid from './svg/grid.svg';
import impacts from './svg/impacts.svg';
import involvement from './svg/involvement.svg';
import location from './svg/location.svg';
import mail from './svg/mail.svg';
import menuMobile from './svg/menu.svg';
import minus from './svg/minus.svg';
import plus from './svg/plus.svg';
import provider from './svg/provider.svg';
import qualification from './svg/qualification.svg';
import search from './svg/search.svg';
import servicing from './svg/servicing.svg';
import standardization from './svg/standardization.svg';
import telegram from './svg/telegram.svg';
import traceability from './svg/traceability.svg';
import trust from './svg/trust.svg';
import twitter from './svg/twitter.svg';
import verification from './svg/verification.svg';
import wallet from './svg/wallet.svg';

const IconList = {
  twitter,
  telegram,
  alignLeft,
  x: X,
  trust,
  efficiency,
  traceability,
  wallet,
  mail,
  location,
  verification,
  qualification,
  servicing,
  involvement,
  impacts,
  expertise,
  standardization,
  genAi,
  plus,
  minus,
  menuMobile,
  search,
  circleInfo,
  games,
  provider,
  grid,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
