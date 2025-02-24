import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaUsers } from 'react-icons/fa'; // For users icon
import './Divider.css'; // Custom CSS for the divider styling

const Divider = () => {
  return (
    <div className="card text-center p-4 shadow-lg">
      {/* Header with Icon */}
      <div className="d-flex justify-content-center mb-3">
        <div
          className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
          style={{ width: '50px', height: '50px' }}
        >
          <FaUsers size={25} />
        </div>
      </div>
      <h2 className="font-weight-bold mb-3">Friends</h2>
      <p className="text-muted">Connect with your friends and stay updated</p>

      {/* Image */}
      <img
        src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
        alt="Centered"
        className="img-fluid"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Divider;
