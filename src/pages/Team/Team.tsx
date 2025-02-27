import './Team.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TeamCard from '../../components/TeamCard/TeamCard';
import { IconName } from '../../common/types/types';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: { name: IconName; link: string }[];
}


const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'Faculty',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      socials: [
        { name: 'github', link: 'instagram' },
        { name: 'linkedIn', link: 'facebook' },
      ],
    },
    {
      name: 'Jane Doe',
      role: 'OC',
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    {
      name: 'Alice',
      role: 'Coordinator',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
    },
    {
      name: 'Alice',
      role: 'Coordinator',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
    },
    {
      name: 'Bob',
      role: 'Executive',
      image: 'https://randomuser.me/api/portraits/men/77.jpg',
    },
    {
      name: 'Bob',
      role: 'Executive',
      image: 'https://randomuser.me/api/portraits/men/77.jpg',
    },
    {
      name: 'Bob',
      role: 'Executive',
      image: 'https://randomuser.me/api/portraits/men/77.jpg',
    },
  ];

  return (
<div className="team">
      <div className="team-bg">
        <Header />
        <div className="Heading">Faculty Coordinators:</div>
        <div className="team-cards">
          {team.filter(member => member.role === 'Faculty').map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} social={member.socials?member.socials:[]}/>
          ))}
        </div>
        <div className="Heading">Overall Coordinator and Advisors:</div>
        <div className="team-cards">
          {team.filter(member => member.role === 'OC').map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
        <div className="Heading">Coordinators:</div>
        <div className="team-cards">
          {team.filter(member => member.role === 'Coordinator').map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
        <div className="Heading">Executives:</div>
        <div className="team-cards">
          {team.filter(member => member.role === 'Executive').map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Team;