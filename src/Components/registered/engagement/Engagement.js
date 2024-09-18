import React, { useState } from 'react';
import './Engagement.css';

const Engagement = () => {
  const [selectedTab, setSelectedTab] = useState('newsfeed');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="community-page">
      <header className="community-header">
        <h1>Welcome to the University Community Hub</h1>
        <p>Engage with a vibrant community of alumni, students, and faculty to foster academic excellence, career development, and collaborative opportunities.</p>
      </header>

      <div className="community-tabs">
        <button onClick={() => handleTabClick('newsfeed')} className={selectedTab === 'newsfeed' ? 'active' : ''}>Newsfeed</button>
        <button onClick={() => handleTabClick('forums')} className={selectedTab === 'forums' ? 'active' : ''}>Discussion Forums</button>
        <button onClick={() => handleTabClick('mentorship')} className={selectedTab === 'mentorship' ? 'active' : ''}>Mentorship Program</button>
        <button onClick={() => handleTabClick('events')} className={selectedTab === 'events' ? 'active' : ''}>Events Calendar</button>
        <button onClick={() => handleTabClick('resources')} className={selectedTab === 'resources' ? 'active' : ''}>Resource Sharing</button>
        <button onClick={() => handleTabClick('profiles')} className={selectedTab === 'profiles' ? 'active' : ''}>User Profiles</button>
        <button onClick={() => handleTabClick('jobs')} className={selectedTab === 'jobs' ? 'active' : ''}>Job Board</button>
      </div>

      <div className="community-content">
        {selectedTab === 'newsfeed' && <Newsfeed />}
        {selectedTab === 'forums' && <DiscussionForums />}
        {selectedTab === 'mentorship' && <Mentorship />}
        {selectedTab === 'events' && <EventsCalendar />}
        {selectedTab === 'resources' && <ResourceSharing />}
        {selectedTab === 'profiles' && <UserProfiles />}
        {selectedTab === 'jobs' && <JobBoard />}
      </div>
    </div>
  );
};

const Newsfeed = () => (
  <div>
    <h2>Latest Community News</h2>
    <p>Stay updated with the latest happenings, posts, and announcements.</p>
  </div>
);

const DiscussionForums = () => (
  <div>
    <h2>Discussion Forums</h2>
    <p>Join conversations on various topics, projects, and research areas.</p>
  </div>
);

const Mentorship = () => (
  <div>
    <h2>Mentorship Program</h2>
    <p>Connect with alumni who can guide you through career development.</p>
  </div>
);

const EventsCalendar = () => (
  <div>
    <h2>Upcoming Events</h2>
    <p>Check out upcoming webinars, meetups, and university events.</p>
  </div>
);

const ResourceSharing = () => (
  <div>
    <h2>Shared Resources</h2>
    <p>Find useful resources and share your own with the community.</p>
  </div>
);

const UserProfiles = () => (
  <div>
    <h2>User Profiles</h2>
    <p>Discover profiles of fellow alumni and students, and network with them.</p>
  </div>
);

const JobBoard = () => (
  <div>
    <h2>Job Board & Internships</h2>
    <p>Explore job and internship opportunities posted by alumni.</p>
  </div>
);

export default Engagement;
