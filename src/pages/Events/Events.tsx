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
  const eventData: EventData[] =  [
   {
    title: "Steller Safari",
    image: event,
    description:
      "desc kfdhnja ifhj sfisd ishdjf isfjisdf is f sifhsdif is si dfhi sdfi sdif isdhfis dfis 9is dfis fisdhfis is is fish fi sfiks fis fisdhjfishd fish fis hifhsi fisfis dfih",
    instagramUrl: "",
    date: "12/12/2025",
    topics: ["Open for All", "Treasure Hunt"],
   },
   {
    title: "event",
    image: event,
    description: "desc",
    instagramUrl: "",
    date: "12/12/2021",
    topics: ["Open for All", "Treasure Hunt"],
   },
   {
    title: "event",
    image: event,
    description: "desc",
   },
   {
    title: "event",
    image: event,
    description: "desc",
   },
   {
    title: "event",
    image: event,
    description: "desc",
   },
   {
    title: "event",
    image: event,
    description: "desc",
   },
   {
    title: "event",
    image: event,
    description: "desc",
   },
   {
    title: "event",
    image: event,
    description: "desc",
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
