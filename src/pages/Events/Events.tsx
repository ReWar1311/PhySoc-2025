import "./Events.css";
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
      image: "/events/rigs.png",
      description:
        "Insider’s guide to securing top-tier physics research opportunities. Panel of Physics Trailblazers share their success secrets. Date: 21st August, Time: 5:00 PM, Venue: MS420.",
      instagramUrl: "https://www.instagram.com/p/C-2lZc1yR_v/",
      date: "08/21/2024",
      topics: ["Physics", "Research", "Internship"],
    },
    {
      title: "Stellar Safari",
      image: "/events/ss.png",
      description:
        "Campus mystery hunt to unravel campus gems. Date: August 28th, Time: 6 PM. Form a team, tackle challenges, and uncover hidden gems.",
      instagramUrl: "https://www.instagram.com/p/C--p9T4ytvn/",
      date: "08/28/2024",
      topics: ["Mystery Hunt", "Campus Event", "Physics"],
    },
    {
      title: "Freshers Orientation",
      image: "/events/fo.png",
      description:
        "Orientation event hosted by PhySoc! Discover the physics department, meet enthusiasts, and learn about opportunities. Date: 4 September, Time: 6:00 pm, Location: MS420.",
      instagramUrl: "https://www.instagram.com/p/C_cpTt-y2d0/",
      date: "09/04/2024",
      topics: ["Orientation", "Physics", "Freshers"],
    },
    {
      title: "Movie Screening",
      image: "/events/ms.png",
      description:
        "Screening of 'The Hitchhiker’s Guide to the Galaxy'! Date: 5th Nov, Time: 6:00 PM, Venue: Seminar Hall. Open to All.",
      instagramUrl: "https://www.instagram.com/p/DB4Pfmjz7e-/",
      date: "11/05/2024",
      topics: ["Movie Screening", "Hitchhiker's Guide to the Galaxy", "Open to All"],
    },
    {
      title: "Stic Lunch",
      image: "/events/sl.png",
      description:
        "Student-Teacher Interaction Lunch by Physoc! Students and professors connect in an informal setting. Lively discussions and knowledge-sharing.",
      instagramUrl: "https://www.instagram.com/p/DCOfrjoTFS4/?img_index=1",
      date: "08/08/2024",
      topics: ["STIC Lunch", "Student-Teacher Interaction", "Physics"],
    },
    {
      title: "Freshers Party",
      image: "/events/fp.png",
      description:
        "Unforgettable evening with music, games, performances, and dinner! Connect with batchmates and seniors. Date: 4th February 2025, Time: 8:00 PM, Venue: Playgue Club & Lounge.",
      instagramUrl: "https://www.instagram.com/p/DFh8Z7eScrx/",
      date: "02/04/2025",
      topics: ["Freshers Party", "Music", "Games"],
    },
    {
      title: "Future Tech Showcase",
      image: "/events/fts.png",
      description:
        "Present your game-changing idea on futuristic technologies! Submission Deadline: 2nd March. Top ideas advance to Tryst, IIT Delhi!",
      instagramUrl: "https://www.instagram.com/p/DGvw9dJswey/",
      date: "03/02/2025",
      topics: ["Future Tech", "Showcase", "Technology"],
    },
    {
      title: "Resonance",
      image: "/events/r.png",
      description:
        "PhySoc’s annual fest! A 3-day adventure with cultural, sports, and fun games. Dates: 28-30 March.",
      instagramUrl: "https://www.instagram.com/p/DG2LsOTylCt/",
      date: "03/28/2025",
      topics: ["Resonance", "Annual Fest", "Physics"],
    },
  ];

  // Create filtered and sorted arrays
  const today = new Date();
  
  const upcomingEvents = eventData
    .filter(event => event.date && new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime());

  const futureEvents = eventData.filter(event => !event.date || event.date === "");

  const pastEvents = eventData
    .filter(event => event.date && new Date(event.date) < today)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());

  return (
    <div className="event">
      <div className="event-bg">
        {upcomingEvents.length > 0 && (
          <>
            <div className="Heading">Upcoming</div>
            <div className="event-cards upcoming-cards">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.title}
                  instagramUrl={event.instagramUrl || ""}
                  title={event.title}
                  image={event.image}
                  description={event.description}
                  date={event.date}
                  topics={event.topics}
                />
              ))}
            </div>
          </>
        )}

        {futureEvents.length > 0 && (
          <>
            <div className="Heading">Future</div>
            <div className="event-cards">
              {futureEvents.map((event) => (
                <Card
                  key={event.title}
                  instagramUrl={event.instagramUrl || ""}
                  title={event.title}
                  image={event.image}
                  description={event.description}
                  topics={event.topics}
                />
              ))}
            </div>
          </>
        )}

        {pastEvents.length > 0 && (
          <>
            <div className="Heading">Past</div>
            <div className="event-cards">
              {pastEvents.map((event) => (
                <Card
                  key={event.title}
                  instagramUrl={event.instagramUrl || ""}
                  title={event.title}
                  image={event.image}
                  description={event.description}
                  date={event.date}
                  topics={event.topics}
                />
              ))}
            </div>
          </>
        )}

        {upcomingEvents.length === 0 && futureEvents.length === 0 && pastEvents.length === 0 && (
          <div className="no-events">
            <p>No events to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
