import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./event_page.css"; // Import your CSS file for styling
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Variants } from "framer-motion";

const EventPage = () => {
  // Array of images for the carousel
  const images = [
    "../assets/event.jpg", // Replace with your actual image paths
    "../assets/event.jpg",
  ];

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
              <h1 className="event-name">EVENT NAME</h1>
              <p className="event-description">
                A small description about the event in one or two lines.
              </p>
              <p className="event-date">Held on: DD/MM/YYYY</p>
              <hr className="divider" />
              <p className="event-details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Right Section */}
          {/* Right Section */}
          <div className="right-section">
            {/* Timer and Create Team Button */}
            <div className="team-actions">
              <button className="create-team-btn">Make new team</button>
              <span className="timer">00:00 until registration closes</span>
            </div>

            {/* Your Teams Section */}
            <div className="your-teams">
              <h2>Your Team:</h2>
              <div className="team-card">
                <h3>TEAM NAME (2/3)</h3>
                <p>"This is a slogan"</p>
                <ul>
                  <li>
                    You - B.Tech 2nd Year{" "}
                    <span className="badge leader-badge">Leader</span>
                  </li>
                  <li>
                    Jake Paul - B.Tech 2nd Year{" "}
                    <span className="badge pending-badge">Pending</span>
                  </li>
                  <li>
                    Mike Tyson - B.Tech 4th Year{" "}
                    <span className="badge rejected-badge">Rejected</span>
                  </li>
                  <li>
                    Mike Tyson - B.Tech 4th Year{" "}
                    <span className="badge accepted-badge">Accepted</span>
                  </li>
                </ul>
                <button className="delete-team-btn">Delete Team</button>
                <button className="invite-members-btn">Invite Members</button>
              </div>
            </div>

            {/* Invitations Section */}
            <div className="invitations">
              <h2>Invitations:</h2>

              {/* Invitation Card */}
              <div className="invitation-card">
                <p><b>Mike Tyson</b> invited you to join:</p>
                <h3>TEAM NAME (1/3)</h3>
                <p>"This is a slogan"</p>
                <div className="invitation-actions">
                  <button className="accept-btn">Accept</button>
                  <button className="reject-btn">Reject</button>
                </div>
              </div>

              {/* Rejected Invitation */}
              <div className="invitation-card">
                <p><b>Jake Paul</b> invited you to join:</p>
                <h3>TEAM NAME (1/3)</h3>
                <p>"This is a slogan"</p>
                <span className="rejected-status">Rejected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;
