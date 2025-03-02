import React from "react";
import './usercard.css';

const UserCard = ({ user }) => {
  return (
    <div className="card text-center shadow-sm">
      <div className="card-body">
        {/* Profile Photo */}
        <img
          src={user.profilePhoto}
          alt={user.fullName}
          className="rounded-circle border border-secondary mb-3"
        />

        {/* Full Name */}
        <h5 className="card-title fw-bold">{user.fullName}</h5>

        {/* Job Role */}
        <p className="card-text text-muted">{user.jobRole}</p>

        {/* City & Passout Year */}
        <p className="small text-muted">
          📍 {user.city} | 🎓 {user.passOutYear}
        </p>

        {/* Current Company */}
        <p className="small text-muted">
          🏢 Work at: {user.currentCompany}
        </p>

        {/* Skills Section */}
        <div>
          <strong className="small text-muted">Skills:</strong>
          <div className="skills-container mt-1">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-secondary text-light mx-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
