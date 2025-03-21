import React, { useEffect, useState } from 'react';
import './members.css';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyf5W-RG1XahXINIX0BZ6zM7GjZVfDkQrNLWNAQX9H2iQib5TCMvXFO67hw2BYLKa3A/exec";
const Members = () => {
    const [coreMembers, setCoreMembers] = useState([]);

    useEffect(() => {
        fetch(GOOGLE_SCRIPT_URL)
            .then(response => response.json())
            .then(data => setCoreMembers(data.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="member-container">
            {coreMembers.map(member => (
                <div key={member.id} className="member-card">
                    <img src={member.imageUrl} alt={member.name} className="member-img" />
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Members;
