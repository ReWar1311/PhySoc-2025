import { FC, SVGProps } from 'react';

import './Icon.css';

import ArrowUp from '../../img/icons/arrow-up.svg?react';
import Code from '../../img/icons/code.svg?react';
import ExternalLink from '../../img/icons/external-link.svg?react';
import Github from '../../img/icons/github.svg?react';
import LinkedIn from '../../img/icons/linkedin.svg?react';
import Location from '../../img/icons/location.svg?react';
import Mail from '../../img/icons/mail.svg?react';
import Rocket from '../../img/icons/rocket.svg?react';
import Skype from '../../img/icons/skype.svg?react';
import Telegram from '../../img/icons/tg.svg?react';
import GoogleMaps from '../../img/icons/google-maps.svg?react';

type IconName = 'arrowUp' | 'code' | 'externalLink' | 'github' | 'linkedIn' | 
  'location' | 'mail' | 'rocket' | 'skype' | 'telegram' | 'google-maps';

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  arrowUp: ArrowUp,
  code: Code,
  externalLink: ExternalLink,
  github: Github,
  linkedIn: LinkedIn,
  location: Location,
  mail: Mail,
  rocket: Rocket,
  skype: Skype,
  telegram: Telegram,
  'google-maps': GoogleMaps,
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const Icon: FC<Props> = ({ name, ...props }) => {
  const SVG = icons[name];

  return (
    <SVG
      {...props}
      className="icon"
      width="24"
      height="24"
      stroke=''
    />
  );
};

export { Icon };