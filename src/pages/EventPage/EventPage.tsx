import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./EventPage.css";
import { Variants } from "framer-motion";
import StatusButton from "../../components/StatusButton/StatusButton";
import InvitationCard from "../../components/InvitationCard/InvitationCard";
import { Spinner } from "../../components/Spinner/Spinner";

interface TeamMember {
  id?: string;
  name: string;
  role: string;
  status: string;
  image: string;
}

interface Team {
  id?: string;
  teamName: string;
  teamSlogan: string;
  members: TeamMember[];
}

interface EventData {
  id?: string;
  eventName: string;
  eventDescription: string;
  eventDate: string;
  eventDetails: string;
  registrationDeadline: string;
  images?: string[];
}

interface InvitationData {
  id?: string;
  name: string;
  teamName: string;
  message: string;
  status?: "pending" | "accepted" | "rejected";
}

const EventPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  
  const [images, _setImages] = useState([
    "../assets/event.jpg",
    "../assets/event.jpg",
    "../assets/event.jpg",
    "../assets/event.jpg",
    "../assets/event.jpg",
    "../assets/event.jpg",
    "../assets/event.jpg",
  ]);

  const [event, _setEvent] = useState<EventData>({
    eventName: "EVENT NAME",
    eventDescription: "A small description about event in one or two lines.",
    eventDate: "DD/MM/YYYY",
    eventDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    registrationDeadline: "2025-03-17T15:20:59",
  });

  const [yourTeam, _setYourTeam] = useState<Team>({
    teamName: "TEAM NAME",
    teamSlogan: '"This is a slogan"',
    members: [
      {
        name: "You",
        role: "B.Tech 2nd Year",
        status: "Leader",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
      {
        name: "Jake Paul",
        role: "B.Tech 2nd Year",
        status: "Pending",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
      {
        name: "Mike Tyson",
        role: "B.Tech 4th Year",
        status: "Rejected",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
      {
        name: "Mike Tyson",
        role: "B.Tech 4th Year",
        status: "Accepted",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
    ],
  });

  const [invitations, _setInvitations] = useState<InvitationData[]>([
    { id: "1", name: "John Doe", teamName: "TEAM NAME", message: "This is a message", status: "pending" },
    { id: "2", name: "John Doe", teamName: "TEAM NAME", message: "This is a message", status: "accepted" },
    { id: "3", name: "John Doe", teamName: "TEAM NAME", message: "This is a message", status: "rejected" },
  ]);

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(event.registrationDeadline);
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return "Registration Closed";

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Function to show the previous image
  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to show the next image
  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Animation variants for sliding effect
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.5 },
      position: "absolute",
    }),
  };

  const handleCreateTeam = () => {
    setIsLoading(true);
    // API call 
    setTimeout(() => {
      setIsLoading(false);
      // Update UI
    }, 1000);
  };

  const handleDeleteTeam = (_teamId?: string) => {
    setIsLoading(true);
    // API call 
    setTimeout(() => {
      setIsLoading(false);
      // Update UI
    }, 1000);
  };

  const handleInviteMember = () => {
    // API
  };

  const handleInvitationResponse = (_invitationId: string, _accept: boolean) => {
    // API
  };

  return (
    <div className="event-page-wrapper">
      <div className="event-page">
        {/* while loading */}
        {isLoading && <div className="loading-overlay"><Spinner/></div>}
        
        {/* Error message */}
        {error && <div className="error-message">{error}</div>}
        
        {/* Main Content */}
        <div className="main-content">
          {/* Left Section */}
          <div className="left-section">
            {/* Event Image Carousel */}
            <div className="carousel">
              <div className="image-container">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Event ${currentIndex + 1}`}
                    className="event-image"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  />
                </AnimatePresence>

                <button className="prev-btn" onClick={prevImage} aria-label="Previous image">
                  ←
                </button>

                {/* Dots Indicator */}
                <div className="dots-container">
                  {images.map((_, index) => (
                    <span 
                      key={`dot-${index}`} 
                      className={`dot ${index === currentIndex ? "active" : ""}`}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                    ></span>
                  ))}
                </div>

                <button className="next-btn" onClick={nextImage} aria-label="Next image">
                  →
                </button>
              </div>
            </div>

            {/* Event Details */}
            <div className="event-details-container">
              <h1 className="event-name">{event.eventName}</h1>
              <p className="event-description">{event.eventDescription}</p>
              <p className="event-date">Held on: {event.eventDate}</p>
              <hr className="divider" />
              <p className="event-details">{event.eventDetails}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            {/* Timer and Create Team Button */}
            <div className="team-actions">
              <button 
                className="create-team-btn" 
                onClick={handleCreateTeam}
                disabled={isLoading || timeLeft === "Registration Closed"}
              >
                Make new team
              </button>
              
              {timeLeft !== "Registration Closed" && (
                <span className="timer">
                  <span className="countdown">{timeLeft}</span> until registration closes
                </span>
              )}
              
              {timeLeft === "Registration Closed" && (
                <p className="registration-closed">Registration Closed</p>
              )}
            </div>

            {/* Your Teams Section */}
            <div className="your-teams">
              <h2>Your Teams:</h2>
              <div className="team-card">
                <div className="team-header">
                  <h3>{yourTeam.teamName}</h3>
                  <button 
                    className="delete-team-btn"
                    onClick={() => handleDeleteTeam(yourTeam.id)}
                    disabled={isLoading}
                  >
                    Delete Team
                  </button>
                </div>
                <p>{yourTeam.teamSlogan}</p>
                <ul className="members-list">
                  {yourTeam.members.map((member, index) => (
                    <li key={`member-${index}`} className="member-item">
                      <div className="member-info">
                        <img src={member.image} alt={`${member.name}'s profile`} className="member-image" />
                        <div className="member-details">
                          <div className="memname">{member.name}</div>
                          <div className="role">{member.role}</div>
                        </div>
                      </div>
                      <StatusButton status={member.status} />
                    </li>
                  ))}
                </ul>
                <button 
                  className="invite-members-btn"
                  onClick={handleInviteMember}
                  disabled={isLoading}
                >
                  Invite Members
                </button>
              </div>
            </div>

            {/* Invitations Section */}
            <div className="invitations">
              <h2>Invitations:</h2>
              {invitations.map((invitation) => (
                <InvitationCard 
                  key={invitation.id}
                  name={invitation.name} 
                  teamName={invitation.teamName} 
                  message={invitation.message}
                  acceptedStatus={invitation.status === "accepted"}
                  rejectedStatus={invitation.status === "rejected"}
                  onAccept={invitation.status === "pending" ? () => handleInvitationResponse(invitation.id || "", true) : undefined}
                  onReject={invitation.status === "pending" ? () => handleInvitationResponse(invitation.id || "", false) : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
