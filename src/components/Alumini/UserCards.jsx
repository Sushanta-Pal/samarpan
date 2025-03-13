import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './usercard.css';

const UserCard = ({ user }) => {
  const profilePhoto = user.photoId
    ? `https://lh3.googleusercontent.com/d/${user.photoId}=s220`
    : 'https://via.placeholder.com/150';

  console.log('UserCard user:', user);
  console.log('UserCard profilePhoto:', profilePhoto);

  return (
    <div className="card text-center shadow-lg rounded-4 p-4 bg-white fixed-size-card">
      <div className="card-body">
        {/* Profile Photo */}
        <img
          src={profilePhoto}
          alt={user.fullName}
          onLoad={() => console.log(`Image loaded successfully: ${profilePhoto}`)}
          onError={(e) => {
            console.error(`Image failed to load: ${profilePhoto}`, e);
          }}
          className="profile-photo"
        />

        {/* Full Name */}
        <h5 className="card-title fw-bold mt-3 text-primary">{user.fullName}</h5>

        {/* Job Role */}
        <p className="card-text text-muted">{user.jobRole}</p>

        {/* City & Passout Year */}
        <p className="small text-muted">📍 {user.city}, {user.state} | 🎓 {user.passOutYear}</p>

        {/* Current Company */}
        <p className="small text-muted">🏢 Work at: {user.currentCompany}</p>

        {/* Skills Section */}
        <div className="skills-container mt-3">
          <strong className="small text-muted">Skills:</strong>
          <div className="d-flex flex-wrap justify-content-center mt-2">
            {user.skills.map((skill, index) => (
              <span key={index} className="badge bg-primary text-light mx-1 px-2 py-1 rounded-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-info mt-4 d-flex justify-content-center gap-3">
          <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
            <FaEnvelope size={24} />
          </a>
          <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
            <FaGithub size={24} />
          </a>
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
