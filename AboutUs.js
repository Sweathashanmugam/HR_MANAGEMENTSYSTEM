// AboutUs.js

import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Our HR Management System</h1>
      <p>
        Welcome to our HR Management System! We are dedicated to helping
        businesses streamline their human resources operations and enhance
        workforce management.
      </p>
      <p>
        Our system provides tools and features for efficient employee
        onboarding, performance management, leave tracking, and more.
      </p>
      <p>
        We believe in the power of technology to simplify HR processes, saving
        time and resources for your organization.
      </p>
      <h2>Our Team</h2>
      <p>
        Meet the team behind our HR Management System. Our experienced and
        passionate professionals are committed to delivering the best HR
        solutions for your business.
      </p>
      <div className="team-members">
        {/* Add team member profiles here */}
      </div>
    </div>
  );
}

export default AboutUs;
