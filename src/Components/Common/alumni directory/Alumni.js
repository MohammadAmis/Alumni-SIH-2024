import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import { dummyAlumni } from './dummyAlumni';

const Alumni = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [connections, setConnections] = useState({});

  // Function to filter alumni based on the selected major
  const filterAlumni = (alumni) => {
    if (selectedFilter === 'all') return alumni;
    return alumni.filter((a) => a.major.toLowerCase() === selectedFilter);
  };

  // Function to sort alumni based on graduation year
  const sortAlumni = (alumni) => {
    return alumni.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.graduationYear - b.graduationYear;
      } else {
        return b.graduationYear - a.graduationYear;
      }
    });
  };

  // Function to toggle connection status
  const handleConnect = (alumniId) => {
    setConnections((prevConnections) => ({
      ...prevConnections,
      [alumniId]: !prevConnections[alumniId], // Toggle connection status
    }));
  };

  const filteredAndSortedAlumni = sortAlumni(filterAlumni(dummyAlumni));

  return (
    <div className="container mx-auto px-[160px] py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Alumni Profiles</h1>

      {/* Filter and Sort Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative inline-block text-left">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            aria-label="Filter alumni by major"
          >
            <option value="all">All Majors</option>
            <option value="computer science">Computer Science</option>
            <option value="information technology">Information Technology</option>
            <option value="business administration">Business Administration</option>
            <option value="electrical engineering">Electrical Engineering</option>
            <option value="civil engineering">Civil Engineering</option>
            <option value="mechanical engineering">Mechanical Engineering</option>
            <option value="biomedical engineering">Biomedical Engineering</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaFilter className="fill-current h-4 w-4" />
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          aria-label={`Sort by graduation year ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
        >
          <FaSortAmountDown className="mr-2" />
          <span>Sort by Year</span>
        </button>
      </div>

      {/* Alumni Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedAlumni.map((alumni) => (
          <div key={alumni.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src={alumni.image}
              alt={`${alumni.name}'s profile picture`}
              className="w-full object-cover object-center"
              style={{ height: '350px' }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{alumni.name}</h2>
              <p className="text-gray-600 mb-4">{alumni.major}, Class of {alumni.graduationYear}</p>
              <p className="text-gray-700 mb-4">{alumni.position} at {alumni.company}</p>

              {/* Connect Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleConnect(alumni.id)}
                  className={`px-10 py-2 rounded-lg ${
                    connections[alumni.id] ? 'bg-green-500' : 'bg-blue-950'
                  } text-white hover:bg-blue-500 transition duration-300`}
                >
                  {connections[alumni.id] ? 'Connected' : 'Connect'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
