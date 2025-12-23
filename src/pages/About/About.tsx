import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">

            {/* Background glow */}
            <div className="about-bg">
                <div className="about-glow-1"></div>
                <div className="about-glow-2"></div>
            </div>

            <div className="about-content">

                <div className="about-box">

                    <h2 className="about-subtitle">
                        Who are we?
                        <div className="about-divider"></div>
                    </h2>

                    <div className="about-text">
                        <p>
                            Welcome to <strong>PhySoc</strong> — the Physics Society. We are a student-driven
                            community that brings together people from diverse backgrounds, interests,
                            and aspirations, united by a shared curiosity for understanding the physical
                            world. At PhySoc, we organise a wide range of events from academic talks,
                            problem-solving sessions, and research discussions, to cultural activities
                            and informal gatherings that strengthen the sense of belonging within the department.
                        </p>

                        <p className="about-hide-mobile">
                            Our aim is not just to promote physics beyond the classroom, but also to create
                            a welcoming space where students from different years, research areas, and
                            experiences can interact, collaborate, and learn from one another. Whether you
                            are deeply invested in theory, experiment, or simply curious about physics and
                            the people around it — PhySoc is a place to <strong>explore</strong>, <strong>connect</strong>,
                            and <strong>grow</strong> together.
                        </p>

                    </div>

                </div>
            </div>


        </section>
    );
};

export default About;
