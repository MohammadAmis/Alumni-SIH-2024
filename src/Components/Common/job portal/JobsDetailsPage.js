import React, { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaUpload } from 'react-icons/fa';

const JobsDetailsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
    if (!resume) newErrors.resume = 'Resume is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', { ...formData, resume });
      // Reset form after submission
      setFormData({ name: '', email: '', phone: '', coverLetter: '' });
      setResume(null);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
              alt="Company Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Apply Now
            </button>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Senior Frontend Developer</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <FaBuilding className="mr-2" />
            <span className="mr-4">TechCorp Inc.</span>
            <FaMapMarkerAlt className="mr-2" />
            <span className="mr-4">San Francisco, CA</span>
            <FaCalendarAlt className="mr-2" />
            <span>Apply by July 31, 2023</span>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
            <p className="text-gray-600">
              We are seeking a talented Senior Frontend Developer to join our dynamic team. The ideal candidate will have a strong background in React, TypeScript, and modern web technologies.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>5+ years of experience in frontend development</li>
              <li>Expertise in React, Redux, and TypeScript</li>
              <li>Strong understanding of web performance optimization</li>
              <li>Experience with responsive design and cross-browser compatibility</li>
              <li>Excellent problem-solving and communication skills</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">About the Company</h2>
            <p className="text-gray-600">
              TechCorp Inc. is a leading technology company specializing in innovative software solutions. With a team of over 500 employees worldwide, we're committed to pushing the boundaries of what's possible in tech.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                </div>
              </div>
              {errors.resume && <p className="mt-1 text-sm text-red-500">{errors.resume}</p>}
              {resume && <p className="mt-2 text-sm text-gray-600">Selected file: {resume.name}</p>}
            </div>
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="4"
                value={formData.coverLetter}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${errors.coverLetter ? 'border-red-500' : ''}`}
              ></textarea>
              {errors.coverLetter && <p className="mt-1 text-sm text-red-500">{errors.coverLetter}</p>}
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobsDetailsPage;