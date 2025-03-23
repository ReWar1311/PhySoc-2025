import './Team.css';
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
      name: "Aditya N. Agnihotri",
      role: "Faculty",
      image: "https://physics.iitd.ac.in/images/faculty/faculty_LPfUJGc6AK.jpg",
    },
    {
      name: "Prashant Rewar",
      role: "Coordinator",
      image: "/public/rewar.png",
    },
    {
      name: "Tarun Kumar",
      role: "Coordinator",
      image: "https://drive.google.com/thumbnail?id=1pEccUAPO8si10wK7Lco2QwBhPm9jmtt5&sz=w1000",
      socials: [
        { name: "externalLink", link: "https://www.instagram.com/tanur_kumar?igsh=eWF6eWZ4ZWNvZTJo" },
        { name: "mail", link: "mailto:tkumar7632@gmail.com" }
      ]
    },
    {
      name: "Vishvatej Ravlod",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=12vL1cMRoHRroa572JQ2lKTxTpxxpLNGp&sz=w1000",
      socials: [
        { name: "linkedIn", link: "https://www.linkedin.com/in/vishvatej" }
      ]
    },
    {
      name: "Sthitapragyan Mallick",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1XG1QmpHOI-sO4O-Zfk4M7bDdJBuHJgOh&sz=w1000",
      socials: [
        { name: "linkedIn", link: "https://www.linkedin.com/in/sthitapragyan-mallick-192a81284" },
        { name: "github", link: "https://github.com/sthitapragyan001" },
        { name: "mail", link: "mailto:sthitapragyanmallick@outlook.com" }
      ]
    },
    {
      name: "Parth Joshi",
      role: "Coordinator",
      image: "https://drive.google.com/thumbnail?id=1S0Igh5Yu_pdRGpyf6ePdhIV6SBgWsrwO&sz=w1000",
      socials: [
        { name: "mail", link: "mailto:parthjoshi361@gmail.com" }
      ]
    },
    {
      name: "Bhupendra Jat",
      role: "Coordinator",
      image: "https://drive.google.com/thumbnail?id=12WewksXKDPEhIinQaEuvTff_VDEawixf&sz=w1000",
      socials: [
        { name: "linkedIn", link: "https://www.linkedin.com/in/bhupendra-973453256/" },
        { name: "mail", link: "mailto:bhupendra2jat@gmail.com" },
        { name: "externalLink", link: "https://www.instagram.com/teenu.2.7/" }
      ]
    },
    {
      name: "Siddharth Kumar",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=17EVykU-GMCCfB4joWQXQkhX7APBlTUCg&sz=w1000",
      socials: [
        { name: "externalLink", link: "https://www.instagram.com/siddharth_606_?igsh=NXI5M2h5cXY2dDdr" }
      ]
    },
    {
      name: "Neam Adil",
      role: "Coordinator",
      image: "https://drive.google.com/thumbnail?id=1Ve_PaD9hHX80z_bCx5yW0Y19XWx-85E3&sz=w1000",
      socials: [
        { name: "linkedIn", link: "https://www.linkedin.com/in/neam-adil-85463a1ba" }
      ]
    },
    {
      name: "Vijay Shree",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1i25xMNAWXluVk_4RASbxuBzKLZSsoA0c&sz=w1000",
      socials: [
        { name: "mail", link: "mailto:shreevijay281@gmail.com" },
        { name: "externalLink", link: "https://instagram.com/_vijayshree_7" }
      ]
    },
    {
      name: "Krishnan Kundan",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1BNyqpU_WGffkZw0px0iuaOVZPegeF7S5&sz=w1000",
      socials: [
        { name: "linkedIn", link: "https://www.linkedin.com/in/krishnan-kundan-332690326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "externalLink", link: "https://www.instagram.com/krishnan1405s?igsh=N2Frdnc5enA1dWYx" },
        { name: "mail", link: "mailto:phs247191@iitd.ac.in" }
      ]
    },
    {
      name: "Debraj Singha",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1_lw3WuJcZAcN8NvCW_0M_iX7o7pDb47m&sz=w1000",
      socials: [
        { name: "externalLink", link: "https://www.instagram.com/___debraj?igsh=YzljYTk1ODg3Zg==" },
        { name: "linkedIn", link: "https://www.linkedin.com/in/debraj-singha-4a3a97249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "mail", link: "mailto:phs247135@physics.iitd.ac.in" }
      ]
    },
    {
      name: "MANAS PRATAP SINGH",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=13VH4RCp6MaUlJ8IV-uLjLIuyIapfjzbz&sz=w1000",
      socials: [
        { name: "linkedIn", link: "https://www.linkedin.com/in/manas-pratap-singh21" }
      ]
    },
    {
      name: "Manogya Singh Suryansh",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1wL4jmiPDRsGaoWSvGdooxVnlVFA8tkWs&sz=w1000",
      socials: [
        { name: "linkedIn", link: "https://www.linkedin.com/in/manogya-singh-suryansh-196305217" },
        { name: "github", link: "https://github.com/manogyasingh" },
        { name: "externalLink", link: "https://instagram.com/_manogyasingh" }
      ]
    },
    {
      name: "Yashashvi Deshwal",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1pd9LD0YmN6AZSehF6O8Kai087PW3i6lR&sz=w1000",
      socials: [
        { name: "mail", link: "mailto:phs247146@physics.iitd.ac.in" },
        { name: "externalLink", link: "https://instagram.com/y.shi_v_ts" }
      ]
    },
    {
      name: "Siddharth Yadav",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1_XJIiCBOCuak6jJQtzsIyqcgd2FIEA27&sz=w1000",
      socials: [
        { name: "linkedIn", link: "https://www.linkedin.com/in/siddharth-yadav-ab892621b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
      ]
    },
    {
      name: "Sahil Bishnoi",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1Pq29bFFO9k3Ldcl8k69AThDrsNjWVle7&sz=w1000",
      socials: [
        { name: "github", link: "https://github.com/Sahilcreate" },
        { name: "externalLink", link: "https://www.instagram.com/sahilindeadshade/" }
      ]
    },
    {
      name: "Gagan Pratap Singh",
      role: "OC",
      image: "https://drive.google.com/thumbnail?id=1V1qxnmkVzG6WzUVDSLSH9PBTVeQj55G3&sz=w1000",
      socials: [
        { name: "externalLink", link: "https://instagram.com/thegpsingh_09" },
        { name: "linkedIn", link: "https://linkedin.com/in/gaganpratapsingh" }
      ]
    },
    {
      name: "Ashish Meena",
      role: "Coordinator",
      image: "https://drive.google.com/thumbnail?id=1ip9Waw-YYvPvDnevQpmey0xQtYmvgjU5&sz=w1000",
      socials: [
        { name: "externalLink", link: "https://www.instagram.com/asishh0_0/" },
        { name: "linkedIn", link: "https://www.linkedin.com/in/ashish-meena-b7202a25a/" }
      ]
    },
    {
      name: "Pooja Kumari",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1dnzG3rd_lS9YKrS-mKMnJS4lUxLWAnAm&sz=w1000",
      socials: [
        { name: "mail", link: "mailto:poojakumarisheshma@gmail.com" }
      ]
    },
    {
      name: "Kashish Jangra",
      role: "Coordinator",
      image: "https://drive.google.com/thumbnail?id=1H8qP-jmISWtksRZ_2YVomVSX1oR_r6AD&sz=w1000",
      socials: [
        { name: "externalLink", link: "https://www.instagram.com/kashish._171/" }
      ]
    },
    {
      name: "Aryan Singh",
      role: "Executive",
      image: "https://drive.google.com/thumbnail?id=1dztZTTCFhY6zS4WRiCm8oAn1yHlSRM3Y&sz=w1000",
      socials: [
        { name: "externalLink", link: "https://instagram.com/aryansingh.co" },
        { name: "mail", link: "mailto:5551112deo@gmail.com" }
      ]
    },
    {
      name: "Ritu Maurya",
      role: "Coordinator",
      image: "https://drive.google.com/thumbnail?id=1hUPpjP6nOJvb6mfmnVQB3LMs9-R9qYsA&sz=w1000",
      socials: [
        { name: "externalLink", link: "https://www.instagram.com/ritu_m37/profilecard/?igsh=eHYza2VvcGY4Y2o3" }
      ]
    }
  ];

  return (
<div className="team">
      <div className="team-bg">
        <div className="Heading">Faculty Coordinators:</div>
        <div className="team-cards">
          {team.filter(member => member.role === 'Faculty').map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} social={member.socials?member.socials:[]}/>
          ))}
        </div>
        <div className="Heading">Overall Coordinators:</div>
        <div className="team-cards">
          {team.filter(member => member.role === 'OC').map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} social={member.socials?member.socials:[]} />
          ))}
        </div>
        <div className="Heading">Coordinators:</div>
        <div className="team-cards">
          {team.filter(member => member.role === 'Coordinator').map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} social={member.socials?member.socials:[]}/>
          ))}
        </div>
        <div className="Heading">Executives:</div>
        <div className="team-cards">
          {team.filter(member => member.role === 'Executive').map((member, index) => (
                     <TeamCard key={index} name={member.name} role={member.role} image={member.image} social={member.socials?member.socials:[]}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
