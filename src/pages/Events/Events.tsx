import "./Events.css";
import event from "../../assets/event.jpg";
import { Card } from "../../components/Card/card";

interface EventData {
  title: string;
  image: string;
  description: string;
  href?: string;
  instagramUrl?: string;
  date?: string;
  topics?: string[];
}


const Events: React.FC = () => {
  // call api to get event data------------------------------------------------------------------------------------------------------
  const eventData: EventData[] = [
    {
      title: "Research Intern Guide Session",
      image: "src/assets/events/rigs.png",
      description:
        "Insider’s guide to securing top-tier physics research opportunities. Panel of Physics Trailblazers share their success secrets. Date: 21st August, Time: 5:00 PM, Venue: MS420.",
      instagramUrl: "https://www.instagram.com/p/C-2lZc1yR_v/",
      date: "08/21/2024",
      topics: ["Physics", "Research", "Internship"],
    },
    {
      title: "Stellar Safari",
      image: "src/assets/events/ss.png",
      description:
        "Campus mystery hunt to unravel campus gems. Date: August 28th, Time: 6 PM. Form a team, tackle challenges, and uncover hidden gems.",
      instagramUrl: "https://www.instagram.com/p/C--p9T4ytvn/",
      date: "08/28/2024",
      topics: ["Mystery Hunt", "Campus Event", "Physics"],
    },
    {
      title: "Freshers Orientation",
      image: "src/assets/events/fo.png",
      description:
        "Orientation event hosted by PhySoc! Discover the physics department, meet enthusiasts, and learn about opportunities. Date: 4 September, Time: 6:00 pm, Location: MS420.",
      instagramUrl: "https://www.instagram.com/p/C_cpTt-y2d0/",
      date: "09/04/2024",
      topics: ["Orientation", "Physics", "Freshers"],
    },
    {
      title: "Movie Screening",
      image: "src/assets/events/ms.png",
      description:
        "Screening of 'The Hitchhiker’s Guide to the Galaxy'! Date: 5th Nov, Time: 6:00 PM, Venue: Seminar Hall. Open to All.",
      instagramUrl: "https://www.instagram.com/p/DB4Pfmjz7e-/",
      date: "11/05/2024",
      topics: ["Movie Screening", "Hitchhiker's Guide to the Galaxy", "Open to All"],
    },
    {
      title: "Stic Lunch",
      image: "src/assets/events/sl.png",
      description:
        "Student-Teacher Interaction Lunch by Physoc! Students and professors connect in an informal setting. Lively discussions and knowledge-sharing.",
      instagramUrl: "Instagram",
      date: "08/08/2025",
      topics: ["STIC Lunch", "Student-Teacher Interaction", "Physics"],
    },
    {
      title: "Freshers Party",
      image: "src/assets/events/fp.png",
      description:
        "Unforgettable evening with music, games, performances, and dinner! Connect with batchmates and seniors. Date: 4th February 2025, Time: 8:00 PM, Venue: Playgue Club & Lounge.",
      instagramUrl: "https://www.instagram.com/p/DFh8Z7eScrx/",
      date: "02/04/2025",
      topics: ["Freshers Party", "Music", "Games"],
    },
    {
      title: "Future Tech Showcase",
      image: "src/assets/events/fts.png",
      description:
        "Present your game-changing idea on futuristic technologies! Submission Deadline: 2nd March. Top ideas advance to Tryst, IIT Delhi!",
      instagramUrl: "https://www.instagram.com/p/DGvw9dJswey/",
      date: "03/02/2024",
      topics: ["Future Tech", "Showcase", "Technology"],
    },
    {
      title: "Resonance",
      image: "src/assets/events/r.png",
      description:
        "PhySoc’s annual fest! A 3-day adventure with cultural, sports, and fun games. Dates: 28-30 March.",
      instagramUrl: "https://www.instagram.com/p/DG2LsOTylCt/",
      date: "03/28/2024",
      topics: ["Resonance", "Annual Fest", "Physics"],
    },
  ];
  return (
    <div className="event">
      <div className="event-bg">
        <div className="Heading">Upcoming</div>
        <div className="event-cards upcoming-cards">
            {eventData.filter(event => event.date && new Date(event.date) >= new Date()).map((event) => (
            <Card
              instagramUrl={event.instagramUrl || ""}
              title={event.title}
              image={event.image}
              description={event.description}
              date={event.date}
              topics={event.topics}
            />
            ))}

        </div>
        <div className="Heading">Future<div></div></div>
        <div className="event-cards">
          {eventData.filter(event => !event.date || event.date =="").map((event) => (
            <Card
            instagramUrl={event.instagramUrl || ""}
            title={event.title}
            image={event.image}
            description={event.description}
            topics={event.topics}
            />
          ))}
          
        </div>
        <div className="Heading">Past</div>
        <div className="event-cards">
          {eventData.filter(event => event.date && new Date(event.date) < new Date()).map((event) => (
            <Card
              instagramUrl={event.instagramUrl || ""}
              title={event.title}
              image={event.image}
              description={event.description}
              date={event.date}
              topics={event.topics}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
