import React, { useEffect, useState, useRef } from "react";
import "./EventSection.css";

interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const events: EventItem[] = [
  {
    id: 1,
    title: "",
    description: "",
    image: "/events/r.png",
    link: "/events",
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "/events/pgorientation25.jpeg",
    link: "/events",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "/events/ms.png",
    link: "/events",
  },
  {
    id: 4,
    title: "",
    description: "",
    image: "/events/rigs.png",
    link: "/events",
  },
];

const AUTO_SLIDE_TIME = 5000; // 5 seconds

const EventSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % events.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  /* Auto slide */
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = window.setInterval(next, AUTO_SLIDE_TIME);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const getClass = (i: number) => {
    if (i === index) return "event-card active";
    if (i === (index - 1 + events.length) % events.length)
      return "event-card left";
    if (i === (index + 1) % events.length)
      return "event-card right";
    return "event-card hidden";
  };

  return (
    <section
      id="eventSectionID"
      className="event-section"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="event-carousel">
        {events.map((event, i) => (
          <a
            key={event.id}
            href={event.link}
            className={getClass(i)}
            aria-label={event.title}
          >
            <img src={event.image} alt={event.title} />

            {i === index && (
              <div className="event-content">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            )}
          </a>
        ))}
      </div>

      <div className="event-controls">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </section>
  );
};

export default EventSection;

