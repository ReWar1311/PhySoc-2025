import { useState } from 'react';
import './TeamCard.css';
import { IconName } from '../../common/types/types';
import { Icon } from '../Icon/Icon';

interface socialProps {
    name: IconName;
    link: string;
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  social?: socialProps[];
}

const TeamCard: React.FC<TeamCardProps> = (props) => {
    const { name, role, image, social } = props;
    const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="teamcard"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="teamcard-overlay" style={{ opacity: hover ? 1 : 0 }}>
        {social && social.map((social) =><Icon name={social.name} width={40} height={40}/>  )}
      </div>
      <div className="teamcard-content" style={{ opacity: hover ? 0 : 1 }}>
        {" "}
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );

};

export default TeamCard;