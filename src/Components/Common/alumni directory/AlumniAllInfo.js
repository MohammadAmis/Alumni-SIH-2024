import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing from react-icons
// import PersonalInfoCard from './AlumniInformationCard/PersonalInfoCard';
import PersonalInfo from './PersonalInfo';
import AcademicInfo from './AcademicInfo';
import LocationInfo from './LocationInfo';
import ImageGallery from './AlumniInformationCard/Gallary'



const AlumniAllInfo = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);

  const topics = [
    'Personal',
    'Academic',
    'Address',
    'Professional',
    'Networking',
    'Success Story',
    'Career',
    'Social Media',
    'Gallary'
  ];

  const handleStepClick = (index) => {
    setSelectedTopic(index);
  };

  const initialImages=[
      'https://picsum.photos/id/1005/400/300',
      'https://picsum.photos/id/1006/400/300',
      'https://picsum.photos/id/1011/400/300'
    ];
  
  


  const renderStep = () => {
    switch (selectedTopic) {
      case 0:
        return (
          <PersonalInfo

          />
        );
      case 1:
        return (
          <AcademicInfo />
        );
      case 2:
        return (
          <LocationInfo />
        )
      case 3:
        return(
          <ImageGallery initialImages={initialImages} />
        );
      default:
        return <h1>Page Not Found</h1>
    }
  }

  return (
    <div className="flex h-[calc(100vh-72px)] bg-gray-100">
      {/* Left Section (Profile Info) */}
      <div className="w-1/4 p-4 bg-white shadow-md border-r text-center">
        <img
          src='https://randomuser.me/api/portraits/women/65.jpg' // Replace with real image path
          alt="Profile"
          className="w-full rounded-lg"
        />
        <h2 className="text-xl font-semibold mt-4">Carlos Fernandez</h2>
        <p className="text-gray-600">Civil Engineering, Class of 2016</p>
        <p className="text-gray-600">Project Manager at Urban Builders</p>

        {/* Icons */}
        <div className="flex space-x-4 mt-4 text-gray-500 justify-center">
          <FaPhone className="cursor-pointer hover:text-blue-500" />
          <FaEnvelope className="cursor-pointer hover:text-blue-500" />
          <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          <FaGithub className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Middle Section (Dynamic Content) */}
      <div className="w-1/2 p-4 flex justify-center items-center bg-gray-100 overflow-y-auto max-h-screen">
        {renderStep()}
      </div>


      {/* Right Section (Topics) */}
      <div className="w-1/4 p-4 bg-white shadow-md">
        <h3 className="text-lg font-bold text-center mb-4">Topics</h3>
        <div className="flex flex-col space-y-4">
          {topics.map((topic, index) => (
            <button
              key={index}
              className="py-2 px-4 bg-gray-900  text-white hover:bg-gray-500 hover:text-white transition"
              onClick={() => handleStepClick(index)}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniAllInfo;
