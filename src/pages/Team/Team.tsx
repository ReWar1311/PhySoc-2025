import './Team.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TeamCard from '../../components/TeamCard/TeamCard';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}


const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'President',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
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
      name: 'Bob',
      role: 'Executive',
      image: 'https://randomuser.me/api/portraits/men/77.jpg',
    },
  ];

  return (
<div className="team">
      <div className="team-bg">
        <Header />
        <div className="Heading">Team:</div>
        <div className="team-cards">
          {team.map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Team;