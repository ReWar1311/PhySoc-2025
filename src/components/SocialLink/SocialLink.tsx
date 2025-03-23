import { FC } from 'react';

import { IconName } from '../../common/types/types';
import { Icon } from '../Icon/Icon';
import './SocialLink.css';

type Props = {
  href: string;
  title: string;
  iconName: IconName;
  size?: number;
  className?: string;
}

// Remove size if not needed
const SocialLink: FC<Props> = ({ href, title, iconName, className }) => {
  return (
    <a
      className={`socialLink ${className}`}
      href={href}
      aria-label={title}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="socialIcon" name={iconName} />
    </a>
  );
};

export { SocialLink };