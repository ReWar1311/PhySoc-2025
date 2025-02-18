import './EventCard.css';

interface EventCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  const { title, id, description, image } = props;
  return (
    <div className="event-card" style={{backgroundImage: `url(${image})`}}>
    <div className="event-card-overlay">   </div>
    <div className="event-card-content">
        <div className="event-card-footer">
        <h3>{title}</h3>
        <p>{description}</p>   
        </div>
        <a className="event-card-btn" href={`/${id}`} role='button'>MORE</a>
    </div>
</div>
  );
};

export default EventCard