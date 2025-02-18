import './Events.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EventCard from '../../components/EventCard/EventCard';
import event from '../../assets/event.jpg';

const Events: React.FC = () => {
  return (
    <div className="event">
      <div className="event-bg">
        <Header/>
        <div className="Heading">Upcoming:</div>
        <div className="event-cards">
          <EventCard id={1} title="event" image={event} description="desc" />
        </div>
        <div className="Heading">Future:</div>
        <div className="event-cards">
        <EventCard id={1} title="event" image={event} description="desc" />          <EventCard id={1} title="event" image={event} description="desc" />          <EventCard id={1} title="event" image={event} description="desc" />
        </div>
        <div className="Heading">Past:</div>
        <div className="event-cards">
        <EventCard id={1} title="event" image= {event} description="desc" />          <EventCard id={1} title="event" image={event} description="desc" />          <EventCard id={1} title="event" image={event} description="desc" />
        </div>
        <Footer options={['Home', 'About', 'Events', 'Contact']} />
      </div>
    </div>
  );
};

export default Events;