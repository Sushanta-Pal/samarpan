import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserCard from './UserCards';
import Search from './Search';

const GOOGLE_SHEET_ID = '1eMX3XyaTGnSFxoGaIuzOrY2y_AiQAvfQvMLgiKDZ8fA';
const SHEET_NAME = 'Test_AluMNi';
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

        const formattedData = response.data.map((user, index) => {
          const cleanedUser = Object.fromEntries(
            Object.entries(user).map(([key, value]) => [key.trim(), value])
          );
        
          const photoId = cleanedUser.Photo?.includes('id=')
            ? cleanedUser.Photo.split('id=')[1]
            : cleanedUser.Photo.split('/d/')[1]?.split('/')[0];
        
          return {
            id: cleanedUser.id || index,
            fullName: cleanedUser.FullName || 'Unknown',
            photoId: photoId,
            email: cleanedUser.Email || 'Not Provided',
            github: cleanedUser.Github || '#',
            linkedin: cleanedUser.Linkedin || '#',
            passOutYear: cleanedUser.PassOutYear || 'Unknown',
            rollNo: cleanedUser.RollNo || 'Not Available',
            jobRole: cleanedUser.jobRole || 'Not Specified',
            currentCompany: cleanedUser.currentCompany || 'Not Available',
            skills: cleanedUser.Skills ? cleanedUser.Skills.split(',').map(skill => skill.trim()) : [],
            gender: cleanedUser.gender || 'Not Specified',
            city: cleanedUser.City || 'Unknown',
            state: cleanedUser.State || 'Unknown',
          };
        });
        

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
      const state = user.state.toLowerCase();
      const rollNo = user.rollNo.toLowerCase();

      if (filter === 'name') {
        return name.includes(lowerCaseQuery);
      } else if (filter === 'city') {
        return city.includes(lowerCaseQuery);
      } else if (filter === 'skills') {
        return skills.some(skill => skill.includes(lowerCaseQuery));
      } else if (filter === 'passOut') {
        return passOut.includes(lowerCaseQuery);
      } else if (filter === 'state') {
        return state.includes(lowerCaseQuery);
      } else if (filter === 'rollNo') {
        return rollNo.includes(lowerCaseQuery);
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
