import "./Events.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import event from "../../assets/event.jpg";
import { Card } from "../../components/Card/card";

const Events: React.FC = () => {
  return (
    <div className="event">
      <div className="event-bg">
        <Header />
        <div className="Heading">Upcoming</div>
        <div className="event-cards upcoming-cards">
          <Card
            title="Steller Safari"
            image={event}
            description="desc kfdhnja ifhj sfisd ishdjf isfjisdf is f sifhsdif is si dfhi sdfi sdif isdhfis dfis 9is dfis fisdhf is is fish fi sfiks fis fisdhjfishd fish fis hifhsi fisfis dfih"
            instagramUrl={""}
          />

        </div>
        <div className="Heading">Future<div></div></div>
        <div className="event-cards">
          <Card
            instagramUrl=""
            title="event"
            image={event}
            description="desc"
          />{" "}
          <Card
            instagramUrl=""
            title="event"
            image={event}
            description="desc"
          />{" "}
          <Card
            instagramUrl=""
            title="event"
            image={event}
            description="desc"
          />
                    <Card
            instagramUrl=""
            title="event"
            image={event}
            description="desc"
          />{" "}
          <Card
            instagramUrl=""
            title="event"
            image={event}
            description="desc"
          />
        </div>
        <div className="Heading">Past</div>
        <div className="event-cards">
          <Card
            instagramUrl=""
            title="event"
            image={event}
            description="desc"
          />{" "}
          <Card
            instagramUrl=""
            title="event"
            image={event}
            description="desc"
          />{" "}
          <Card
            instagramUrl=""
            title="event"
            image={event}
            description="desc"
          />
        </div>
        <Footer options={["Home", "About", "Events", "Contact"]} />
      </div>
    </div>
  );
};

export default Events;
