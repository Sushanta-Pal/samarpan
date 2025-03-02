import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserCard from './UserCards';
import Search from './Search';

const GOOGLE_SHEET_ID = '1fiy9ncSDLiFQQ8dhkARjQzlvvvXLRpH6mSKRANGnuRI';
const SHEET_NAME = 'Alumini'; // Sheet tab name
const API_URL = `https://opensheet.vercel.app/${GOOGLE_SHEET_ID}/${SHEET_NAME}`;

export const Alumini = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    // Fetch Alumni Data
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log('Fetched Data:', response.data);

        const formattedData = response.data.map((user, index) => ({
          id: user.id || index,
          fullName: user.Name || 'Unknown',
          profilePhoto: user.profilePhoto || 'https://via.placeholder.com/150',
          jobRole: user.jobRole || 'Not Specified',
          city: user.city || 'Unknown',
          passOutYear: user.passOutYear || 'Unknown',
          currentCompany: user.currentCompany || 'Not Available',
          skills: user.skills ? user.skills.split(',').map(skill => skill.trim()) : [],
        }));

        setAlumni(formattedData);
        setFilteredUsers(formattedData);
        AOS.refresh();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query, filter) => {
    if (!query.trim()) {
      setFilteredUsers(alumni);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const filtered = alumni.filter((user) => {
      if (!user) return false;

      const name = user.fullName.toLowerCase();
      const city = user.city.toLowerCase();
      const skills = user.skills.map(skill => skill.toLowerCase());
      const passOut = String(user.passOutYear);

      if (filter === 'name') {
        return name.includes(lowerCaseQuery);
      } else if (filter === 'city') {
        return city.includes(lowerCaseQuery);
      } else if (filter === 'skills') {
        return skills.some(skill => skill.includes(lowerCaseQuery));
      } else if (filter === 'passOut') {
        return passOut.includes(lowerCaseQuery);
      }
      return false;
    });

    setFilteredUsers(filtered);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4" data-aos="fade-up">Our Alumni</h1>
      <Search onSearch={handleSearch} />
      <div className="row">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <div className="col-12 col-md-6 col-xl-4 mb-4" key={index} data-aos="zoom-in-up">
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <p className="text-center w-100" data-aos="fade-in">No alumni found.</p>
        )}
      </div>
    </div>
  );
};

export default Alumini;
