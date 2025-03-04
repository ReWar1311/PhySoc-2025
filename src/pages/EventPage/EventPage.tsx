import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./EventPage.css"; // Import your CSS file for styling
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Variants } from "framer-motion";
import StatusButton from "../../components/StatusButton/StatusButton";
import InvitationCard from "../../components/InvitationCard/InvitationCard";

const EventPage = () => {
  // Array of images for the carousel
  const images = [
    "../assets/event.jpg", // Replace with your actual image paths
    "../assets/event.jpg",
  ];

  // Event details
  const event = {
    eventName: "Event Name",
    eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt.",
    eventDate: "DD/MM/YYYY",
    eventDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt. Nullam nec purus nec eros ultricies tincidunt.",
    registrationDeadline: "2025-03-07T23:59:59",

  };

  // Your team details
  const yourTeam = {
    teamName: "Team Name",
    teamSlogan: "Slogan",
    members: [
      {
        name: "You",
        role: "Leader",
        status: "Leader",
        color: "#6e44ff",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
      {
        name: "Jake Paul",
        role: "B.Tech 2nd Year",
        status: "Pending",
        color: "#ffa500",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
      {
        name: "Mike Tyson",
        role: "B.Tech 4th Year",
        status: "Rejected",
        color: "#ff4d4d",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
      {
        name: "Mike Tyson",
        role: "B.Tech 4th Year",
        status: "Accepted",
        color: "#4caf50",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
    ],
  };

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

  // State to track the current image index and direction
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



  return (
    <div>
      <Header />
      <div className="event-page">
        {/* Main Content */}
        <div className="main-content">
          {/* Left Section */}
          <div className="left-section">
            {/* Event Image Carousel */}
            <div className="carousel">
              <div className="image-container">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex} // Unique key for each image
                    src={images[currentIndex]}
                    alt={`Event ${currentIndex + 1}`}
                    className="event-image"
                    custom={direction} // Pass direction as a custom prop
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  />
                </AnimatePresence>

                <button className="prev-btn" onClick={prevImage}>
                  ◀
                </button>
                <button className="next-btn" onClick={nextImage}>
                  ▶
                </button>
              </div>
            </div>

            {/* Event Details */}
            <div className="event-details-container">
              <h1 className="event-name">{event.eventName}</h1>
              <p className="event-description">
                {event.eventDescription}
              </p>
              <p className="event-date">Date: {event.eventDate}</p>
              <hr className="divider" />
              <p className="event-details">
                {event.eventDetails}
              </p>
            </div>
          </div>

          {/* Right Section */}
          {/* Right Section */}
          <div className="right-section">
            {/* Timer and Create Team Button */}
            <div className="team-actions">
              <button className="create-team-btn">Make new team</button>
              {timeLeft === "Registration Closed" || <span className="timer">{timeLeft} until registration closes</span>}
              {timeLeft === "Registration Closed" && <p className="registration-closed">Registration Closed</p>}
            </div>

            {/* Your Teams Section */}
            <div className="your-teams">
              <h2>Your Team:</h2>
              <div className="team-card">
                <h3>{yourTeam.teamName}</h3>
                <p>{yourTeam.teamSlogan}</p>
                <ul>
                  {yourTeam.members.map((member) => (
                    <li className="member-item">
                    <div className="member-info">
                      <img src={member.image} alt="profile" className="member-image" />
                      <span>{member.name} - {member.role}</span>
                    </div>
                    <StatusButton status={member.status} color={member.color} />
                  </li>
                  ))}
                </ul>
                <button className="delete-team-btn">Delete Team</button>
                <button className="invite-members-btn">Invite Members</button>
              </div>
            </div>

            {/* Invitations Section */}
            <div className="invitations">
              <h2>Invitations:</h2>
              <InvitationCard name="John Doe" teamName="Team Name" message="This is a message" />
              <InvitationCard name="John Doe" teamName="Team Name" message="This is a message" acceptedStatus={true} />
              <InvitationCard name="John Doe" teamName="Team Name" message="This is a message" rejectedStatus={true} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default EventPage;
