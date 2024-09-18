import React, { useState } from 'react';
import { FaSearch, FaFilter, FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const JobPortals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'San Francisco, CA', type: 'Full-time', posted: '2 days ago', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80' },
    { id: 2, title: 'Marketing Intern', company: 'BrandBoost', location: 'New York, NY', type: 'Internship', posted: '1 week ago', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80' },
    { id: 3, title: 'Data Scientist', company: 'DataDrive', location: 'Boston, MA', type: 'Full-time', posted: '3 days ago', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
    { id: 4, title: 'UX Designer', company: 'DesignHub', location: 'Seattle, WA', type: 'Part-time', posted: '5 days ago', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
    { id: 5, title: 'Product Manager', company: 'InnovateCo', location: 'Austin, TX', type: 'Full-time', posted: '1 day ago', image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80' },
    { id: 6, title: 'Sales Representative', company: 'GrowthGen', location: 'Chicago, IL', type: 'Full-time', posted: '4 days ago', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' },
    { id: 7, title: 'Content Writer', company: 'WordCraft', location: 'Remote', type: 'Part-time', posted: '2 weeks ago', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80' },
    { id: 8, title: 'Financial Analyst', company: 'MoneyWise', location: 'New York, NY', type: 'Full-time', posted: '6 days ago', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Job & Internship Listings</h1> */}
      
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for jobs or internships..."
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FaFilter className="text-gray-600 mr-2" />
            <span className="text-gray-600 font-semibold">Filters:</span>
            <select className="ml-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>All Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
            </select>
            <select className="ml-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>All Locations</option>
              <option>Remote</option>
              <option>On-site</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
            
            Apply Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <img src={job.image} alt={job.company} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h2>
              <p className="text-gray-600 mb-4">{job.company}</p>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <span className="text-gray-500">{job.location}</span>
              </div>
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-gray-500 mr-2" />
                <span className="text-gray-500">{job.type}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  <FaClock className="inline mr-1" /> Posted {job.posted}
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobPortals;
