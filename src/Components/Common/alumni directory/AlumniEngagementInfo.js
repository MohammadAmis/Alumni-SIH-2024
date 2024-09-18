import React, { useState ,useEffect} from 'react';
import { FaCalendarAlt, FaHandHoldingUsd, FaComment } from 'react-icons/fa';

const AlumniEngagementInfo = ({alumniEngagementInfo,handleSaveAndNext,handleBack,index}) => {
  const [formData, setFormData] = useState({
    eventAttendance: '',
    interestInEvents: '',
    donationPreferences: '',
    feedback: ''
  });

  useEffect(() => {
    if (alumniEngagementInfo) {
      setFormData((prevFormData) => ({
        ...prevFormData,  // Keep existing formData
        ...alumniEngagementInfo   // Override with academicInfo from props
      }));
    }
  }, [alumniEngagementInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFormData({
      eventAttendance: '',
      interestInEvents: '',
      donationPreferences: '',
      feedback: ''
    });
  };


  const handleBackClick=()=>{
    handleBack(index)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Object.keys(formData).forEach(key => validateField(key, formData[key]));
    // if (Object.values(errors).every(x => x === '')) {
      handleSaveAndNext(formData, index); // Call the save and next handler
    // } else {
    //   console.log('Form has errors. Please correct them.');
    // }
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Prefered Engagement Choice</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="eventAttendance" className="block text-sm font-medium text-gray-700">Event Attendance History</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="eventAttendance"
                  id="eventAttendance"
                  value={formData.eventAttendance}
                  onChange={handleChange}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interestInEvents" className="block text-sm font-medium text-gray-700">Interest in Upcoming Events</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="interestInEvents"
                  id="interestInEvents"
                  value={formData.interestInEvents}
                  onChange={handleChange}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="donationPreferences" className="block text-sm font-medium text-gray-700">Donation Preferences</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaHandHoldingUsd className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="donationPreferences"
                  id="donationPreferences"
                  value={formData.donationPreferences}
                  onChange={handleChange}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback and Suggestions (optional)</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaComment className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="feedback"
                  id="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex items-center justify-between space-x-4">
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleBackClick}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back
              </button>
              <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => handleSaveAndNext(formData, index)} // Save and next on click
                >
                Save & Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlumniEngagementInfo;
